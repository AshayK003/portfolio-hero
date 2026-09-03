"use client"

import {
  createContext,
  type CSSProperties,
  Fragment,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useMemo,
} from "react"
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  formatISO,
  getDay,
  getMonth,
  getYear,
  nextDay,
  parseISO,
  subWeeks,
} from "date-fns"
import type { Day as WeekDay } from "date-fns"

export type Activity = {
  date: string
  count: number
  level: number
}

type Week = Array<Activity | undefined>

export type Labels = {
  months?: string[]
  weekdays?: string[]
  totalCount?: string
  legend?: {
    less?: string
    more?: string
  }
}

type MonthLabel = {
  weekIndex: number
  label: string
}

const DEFAULT_MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

/**
 * Shared by calendar cells and legend so the two can never drift.
 * Colors map to your design system via inline styles.
 */
const LEVEL_COLORS = [
  "rgba(10,10,10,0.06)",  // 0 — empty
  "rgba(177,18,38,0.35)",  // 1 — low (crimson 35%)
  "rgba(177,18,38,0.60)",  // 2 — medium (crimson 60%)
  "rgba(177,18,38,0.82)",  // 3 — high (crimson 82%)
  "rgba(122,11,26,1.00)",  // 4 — max (crimson-dark solid)
]

const DEFAULT_LABELS: Labels = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  totalCount: "{{count}} contributions in {{year}}",
  legend: {
    less: "Less",
    more: "More",
  },
}

type ContributionGraphContextType = {
  data: Activity[]
  weeks: Week[]
  blockMargin: number
  blockRadius: number
  blockSize: number
  fontSize: number
  labels: Labels
  labelHeight: number
  maxLevel: number
  totalCount: number
  weekStart: WeekDay
  year: number
  width: number
  height: number
}

const ContributionGraphContext =
  createContext<ContributionGraphContextType | null>(null)

const useContributionGraph = () => {
  const context = useContext(ContributionGraphContext)
  if (!context) {
    throw new Error(
      "ContributionGraph components must be used within a ContributionGraph"
    )
  }
  return context
}

const fillHoles = (activities: Activity[]): Activity[] => {
  if (activities.length === 0) return []

  const sortedActivities = [...activities].sort((a, b) =>
    a.date.localeCompare(b.date)
  )
  const calendar = new Map<string, Activity>(activities.map((a) => [a.date, a]))
  const firstActivity = sortedActivities[0]
  const lastActivity = sortedActivities.at(-1)

  if (!lastActivity) return []

  return eachDayOfInterval({
    start: parseISO(firstActivity.date),
    end: parseISO(lastActivity.date),
  }).map((day) => {
    const date = formatISO(day, { representation: "date" })
    return calendar.get(date) ?? { date, count: 0, level: 0 }
  })
}

const groupByWeeks = (
  activities: Activity[],
  weekStart: WeekDay = 0
): Week[] => {
  if (activities.length === 0) return []

  const normalizedActivities = fillHoles(activities)
  const firstActivity = normalizedActivities[0]
  const firstDate = parseISO(firstActivity.date)
  const firstCalendarDate =
    getDay(firstDate) === weekStart
      ? firstDate
      : subWeeks(nextDay(firstDate, weekStart), 1)

  const paddedActivities = [
    ...(new Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(
      undefined
    ) as Activity[]),
    ...normalizedActivities,
  ]

  const numberOfWeeks = Math.ceil(paddedActivities.length / 7)

  return new Array(numberOfWeeks)
    .fill(undefined)
    .map((_, weekIndex) =>
      paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7)
    )
}

const getMonthLabels = (
  weeks: Week[],
  monthNames: string[] = DEFAULT_MONTH_LABELS
): MonthLabel[] => {
  return weeks
    .reduce<MonthLabel[]>((labels, week, weekIndex) => {
      const firstActivity = week.find((activity) => activity !== undefined)
      if (!firstActivity) {
        throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty.`)
      }
      const month = monthNames[getMonth(parseISO(firstActivity.date))]
      if (!month) {
        throw new Error(`Unexpected error: undefined month label.`)
      }
      const prevLabel = labels.at(-1)
      if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
        return labels.concat({ weekIndex, label: month })
      }
      return labels
    }, [])
    .filter(({ weekIndex }, index, labels) => {
      const minWeeks = 3
      if (index === 0) {
        return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks
      }
      if (index === labels.length - 1) {
        return weeks.slice(weekIndex).length >= minWeeks
      }
      return true
    })
}

export type ContributionGraphProps = HTMLAttributes<HTMLDivElement> & {
  data: Activity[]
  blockMargin?: number
  blockRadius?: number
  blockSize?: number
  fontSize?: number
  labels?: Labels
  maxLevel?: number
  style?: CSSProperties
  totalCount?: number
  weekStart?: WeekDay
  children: ReactNode
  className?: string
}

export const ContributionGraph = ({
  data,
  blockMargin = 4,
  blockRadius = 2,
  blockSize = 12,
  fontSize = 14,
  labels: labelsProp = undefined,
  maxLevel: maxLevelProp = 4,
  style = {},
  totalCount: totalCountProp = undefined,
  weekStart = 0,
  className,
  ...props
}: ContributionGraphProps) => {
  const maxLevel = Math.max(1, maxLevelProp)
  const weeks = useMemo(() => groupByWeeks(data, weekStart), [data, weekStart])
  const LABEL_MARGIN = 8
  const labels = { ...DEFAULT_LABELS, ...labelsProp }
  const labelHeight = fontSize + LABEL_MARGIN
  const year =
    data.length > 0 ? getYear(parseISO(data[0].date)) : new Date().getFullYear()
  const totalCount =
    typeof totalCountProp === "number"
      ? totalCountProp
      : data.reduce((sum, activity) => sum + activity.count, 0)
  const width = weeks.length * (blockSize + blockMargin) - blockMargin
  const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin

  if (data.length === 0) return null

  return (
    <ContributionGraphContext.Provider
      value={{
        data, weeks, blockMargin, blockRadius, blockSize, fontSize,
        labels, labelHeight, maxLevel, totalCount, weekStart, year, width, height,
      }}
    >
      <div
        className={className}
        style={{
          display: "flex", width: "max-content", maxWidth: "100%",
          flexDirection: "column", gap: 8, fontSize, ...style,
        }}
        {...props}
      />
    </ContributionGraphContext.Provider>
  )
}

export type ContributionGraphBlockProps = HTMLAttributes<SVGRectElement> & {
  activity: Activity
  dayIndex: number
  weekIndex: number
}

export const ContributionGraphBlock = ({
  activity, dayIndex, weekIndex, style, ...props
}: ContributionGraphBlockProps) => {
  const { blockSize, blockMargin, blockRadius, labelHeight, maxLevel } =
    useContributionGraph()

  if (activity.level < 0 || activity.level > maxLevel) {
    throw new RangeError(`Activity level ${activity.level} out of range.`)
  }

  return (
    <rect
      {...props}
      data-count={activity.count}
      data-date={activity.date}
      data-level={activity.level}
      height={blockSize}
      rx={blockRadius}
      ry={blockRadius}
      width={blockSize}
      x={(blockSize + blockMargin) * weekIndex}
      y={labelHeight + (blockSize + blockMargin) * dayIndex}
      style={{ fill: LEVEL_COLORS[activity.level], ...style }}
    />
  )
}

export type ContributionGraphCalendarProps = Omit<
  HTMLAttributes<HTMLDivElement>, "children"
> & {
  hideMonthLabels?: boolean
  className?: string
  children: (props: {
    activity: Activity
    dayIndex: number
    weekIndex: number
  }) => ReactNode
}

export const ContributionGraphCalendar = ({
  hideMonthLabels = false, className, children, ...props
}: ContributionGraphCalendarProps) => {
  const { weeks, width, height, blockSize, blockMargin, labels } =
    useContributionGraph()

  const monthLabels = useMemo(
    () => getMonthLabels(weeks, labels.months),
    [weeks, labels.months]
  )

  return (
    <div
      className={className}
      style={{ maxWidth: "100%", overflowX: "auto", overflowY: "hidden" }}
      {...props}
    >
      <svg
        display="block"
        overflow="visible"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        width={width}
      >
        <title>Contribution Graph</title>
        {!hideMonthLabels && (
          <g fill="currentColor">
            {monthLabels.map(({ label, weekIndex }) => (
              <text
                key={weekIndex}
                dominantBaseline="hanging"
                x={(blockSize + blockMargin) * weekIndex}
              >
                {label}
              </text>
            ))}
          </g>
        )}
        {weeks.map((week, weekIndex) =>
          week.map((activity, dayIndex) => {
            if (!activity) return null
            return (
              <Fragment key={`${weekIndex}-${dayIndex}`}>
                {children({ activity, dayIndex, weekIndex })}
              </Fragment>
            )
          })
        )}
      </svg>
    </div>
  )
}

export type ContributionGraphFooterProps = HTMLAttributes<HTMLDivElement>

export const ContributionGraphFooter = ({
  className, ...props
}: ContributionGraphFooterProps) => (
  <div
    className={className}
    style={{
      display: "flex", flexWrap: "wrap", gap: 4,
      whiteSpace: "nowrap", fontSize: 12, color: "var(--color-ink-muted)",
    }}
    {...props}
  />
)

export type ContributionGraphTotalCountProps = Omit<
  HTMLAttributes<HTMLDivElement>, "children"
> & {
  children?: (props: { totalCount: number; year: number }) => ReactNode
}

export const ContributionGraphTotalCount = ({
  className, children, style, ...props
}: ContributionGraphTotalCountProps) => {
  const { totalCount, year, labels } = useContributionGraph()

  if (children) {
    return <>{children({ totalCount, year })}</>
  }

  return (
    <div
      className={className}
      style={{ color: "var(--color-ink-muted)", ...style }}
      {...props}
    >
      {labels.totalCount
        ? labels.totalCount
            .replace("{{count}}", String(totalCount))
            .replace("{{year}}", String(year))
        : `${totalCount} activities in ${year}`}
    </div>
  )
}

export type ContributionGraphLegendProps = Omit<
  HTMLAttributes<HTMLDivElement>, "children"
> & {
  children?: (props: { level: number }) => ReactNode
}

export const ContributionGraphLegend = ({
  className, children, ...props
}: ContributionGraphLegendProps) => {
  const { labels, maxLevel, blockSize, blockRadius } = useContributionGraph()

  return (
    <div
      className={className}
      style={{
        marginLeft: "auto", display: "flex", alignItems: "center", gap: 3,
      }}
      {...props}
    >
      <span style={{ marginRight: 4, color: "var(--color-ink-muted)" }}>
        {labels.legend?.less || "Less"}
      </span>
      {new Array(maxLevel + 1).fill(undefined).map((_, level) =>
        children ? (
          <Fragment key={level}>{children({ level })}</Fragment>
        ) : (
          <svg height={blockSize} key={level} width={blockSize}>
            <title>{`${level} contributions`}</title>
            <rect
              fill={LEVEL_COLORS[level]}
              height={blockSize}
              rx={blockRadius}
              ry={blockRadius}
              width={blockSize}
            />
          </svg>
        )
      )}
      <span style={{ marginLeft: 4, color: "var(--color-ink-muted)" }}>
        {labels.legend?.more || "More"}
      </span>
    </div>
  )
}
