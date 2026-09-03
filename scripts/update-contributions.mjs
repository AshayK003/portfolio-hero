#!/usr/bin/env node
// Run: npm run update-contributions
// Writes public/contributions.json from GitHub GraphQL API
// Requires GITHUB_TOKEN env var (read:user scope)

const fs = require('fs')
const path = require('path')

const GITHUB_API = 'https://api.github.com/graphql'
const login = process.env.GITHUB_USERNAME || 'AshayK003'
const token = process.env.GITHUB_TOKEN

if (!token) {
  console.error('ERROR: GITHUB_TOKEN not set')
  process.exit(1)
}

const query = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

;(async () => {
  const res = await fetch(GITHUB_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { login } }),
  })

  if (!res.ok) {
    console.error('GitHub request failed:', res.status, await res.text())
    process.exit(1)
  }

  const json = await res.json()
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar

  if (!calendar) {
    console.error('No contribution data found')
    process.exit(1)
  }

  const out = {
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks,
    generatedAt: new Date().toISOString(),
  }

  const outPath = path.join(__dirname, 'public', 'contributions.json')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2))

  console.log(`✓ ${calendar.totalContributions} contributions → public/contributions.json`)
})()
