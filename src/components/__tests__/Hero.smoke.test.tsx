import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Hero } from "../Hero"

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: { src: string; alt: string }) => <img src={props.src} alt={props.alt} />,
}))

describe("Hero smoke", () => {
  it("renders without crashing and shows the headline", () => {
    render(<Hero />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/systems/)
  })
})
