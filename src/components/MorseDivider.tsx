const MORSE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
}

const MESSAGE = "INCOMPRESSIBLE"

function letterToSymbols(letter: string): (0 | 1)[] {
  const code = MORSE[letter]
  if (!code) return []
  return code.split("").map((c) => (c === "." ? 0 : 1))
}

export function MorseDivider() {
  const letters = MESSAGE.split("")

  return (
    <div
      className="morse-divider"
      role="img"
      aria-label={`Hidden message: ${MESSAGE}, encoded in morse code`}
      title="Hover to decode"
    >
      <div className="morse-track">
        {letters.map((letter, li) => (
          <span className="morse-letter" key={li}>
            {letterToSymbols(letter).map((symbol, si) => (
              <span
                key={si}
                className={symbol === 0 ? "morse-dot" : "morse-dash"}
                aria-hidden="true"
              />
            ))}
          </span>
        ))}
      </div>
      <span className="morse-reveal">{MESSAGE}.</span>
    </div>
  )
}
