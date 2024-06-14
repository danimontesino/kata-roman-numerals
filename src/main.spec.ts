import { describe, it, expect } from "vitest"
import { numeralsToRoman } from "./main.js";


describe("numeralstoRoman", () => {
  it("should return I when 1 is passed", () => {
    const result = numeralsToRoman(1)

    expect(result).toBe("I")
  })

  it("should return II when 2 is passed", () => {
    const result = numeralsToRoman(2)

    expect(result).toBe("II")
  })
})
