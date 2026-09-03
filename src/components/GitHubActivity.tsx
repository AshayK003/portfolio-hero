"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Loader } from "lucide-react"
import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "./ui/contribution-graph"

type ContributionDay = {
  date: string
  contributionCount: number
  contributionLevel: string
}

const levelByQuartile: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

type HoveredDay = { count: number; label: string; x: number; y: number }

function dayLabel(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  })
}

function rangeLabel(activities: Activity[]) {
  const first = activities[0]?.date.slice(0, 4)
  const last = activities.at(-1)?.date.slice(0, 4)
  if (!first || !last) return String(new Date().getFullYear())
  return first === last ? first : `${first}-${last.slice(2)}`
}

export function GitHubActivity() {
  const [activities, setActivities] = useState<Activity[] | null>(null)
  const [total, setTotal] = useState(0)
  const [failed, setFailed] = useState(false)
  const [hovered, setHovered] = useState<HoveredDay | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch("/contributions.json")
        if (!res.ok) throw new Error("Request failed")
        const data = await res.json()
        if (cancelled) return
        setActivities(
          data.weeks.flatMap((week: { contributionDays: ContributionDay[] }) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
              level: levelByQuartile[day.contributionLevel] ?? 0,
            }))
          )
        )
        setTotal(data.totalContributions)
      } catch {
        if (!cancelled) setFailed(true)
      }
    }
    void load()
    return () => { cancelled = true }
  }, [])

  const handleCellHover = useCallback((event: React.MouseEvent) => {
    const cell = event.target as SVGRectElement
    const { date, count } = cell.dataset
    if (!date || count === undefined) { setHovered(null); return }
    const container = event.currentTarget.closest("section")
    if (!container) return
    const cellBox = cell.getBoundingClientRect()
    const containerBox = container.getBoundingClientRect()
    setHovered({
      count: Number(count),
      label: dayLabel(date),
      x: cellBox.left + cellBox.width / 2 - containerBox.left,
      y: cellBox.top - containerBox.top,
    })
  }, [])

  const labels = useMemo(
    () => activities
      ? { totalCount: `{{count}} contributions in ${rangeLabel(activities)}` }
      : undefined,
    [activities]
  )

  if (failed) {
    return (
      <section id="activity" aria-label="GitHub activity" className="section">
        <div className="section-header">
          <div className="section-label">Activity</div>
          <h2 className="section-title">
            Contribution <span style={{ color: "var(--color-crimson)" }}>graph.</span>
          </h2>
        </div>
        <div style={{ padding: "20px 16px", textAlign: "center", color: "var(--color-ink-muted)", fontSize: 14 }}>
          Run <code style={{ background: "var(--color-paper)", padding: "2px 6px", borderRadius: 4 }}>npm run update-contributions</code> to load contribution data.
        </div>
      </section>
    )
  }

  return (
    <section id="activity" aria-label="GitHub activity" className="section">
      <div className="section-header">
        <div className="section-label">Activity</div>
        <h2 className="section-title">
          Contribution <span style={{ color: "var(--color-crimson)" }}>graph.</span>
        </h2>
      </div>

      <div
        style={{ position: "relative", padding: "20px 16px" }}
        onMouseLeave={() => setHovered(null)}
      >
        {hovered && (
          <div
            role="status"
            style={{
              position: "absolute", zIndex: 20, transform: "translate(-50%, -100%)",
              background: "var(--color-ink)", color: "var(--color-paper)",
              padding: "4px 8px", borderRadius: 6, fontSize: 12,
              fontWeight: 500, whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              left: hovered.x, top: hovered.y - 6, pointerEvents: "none",
            }}
          >
            {hovered.count === 1 ? "1 contribution" : `${hovered.count} contributions`}
            {" on "}{hovered.label}
          </div>
        )}

        {activities ? (
          <ContributionGraph
            data={activities}
            totalCount={total}
            fontSize={11}
            blockSize={9}
            blockMargin={3}
            labels={labels}
            className="mx-auto"
          >
            <ContributionGraphCalendar
              onMouseOver={handleCellHover}
              style={{ overflowX: "auto", overflowY: "hidden" }}
            >
              {({ activity, dayIndex, weekIndex }) => (
                <ContributionGraphBlock
                  key={`${weekIndex}-${dayIndex}`}
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter>
              <ContributionGraphTotalCount />
              <ContributionGraphLegend />
            </ContributionGraphFooter>
          </ContributionGraph>
        ) : (
          <div style={{ display: "flex", height: 162, alignItems: "center", justifyContent: "center" }}>
            <Loader className="animate-spin" style={{ color: "var(--color-ink)" }} />
          </div>
        )}
      </div>
    </section>
  )
}
