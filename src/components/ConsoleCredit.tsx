"use client"

import { useEffect } from "react"

export function ConsoleCredit() {
  useEffect(() => {
    const brand = "%cSentinelCipher — Ashay Kushwaha"
    const style = "color:#B11226;font-weight:700;font-size:14px;letter-spacing:0.04em"
    const note =
      "%cBuilt by Ashay Kushwaha (SentinelCipher). Code is open-source (MIT / AGPL) — reuse freely, keep the credit. sentinelcipher3301.netlify.app"
    const noteStyle = "color:#64748B;font-size:11px"
    // eslint-disable-next-line no-console
    console.log(brand, style)
    // eslint-disable-next-line no-console
    console.log(note, noteStyle)
  }, [])

  return null
}
