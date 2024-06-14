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

  it("should return III when 3 is passed", () => {
    const result = numeralsToRoman(3)

    expect(result).toBe("III")
  })

  it("should return IV when 4 is passed", () => {
    const result = numeralsToRoman(4)

    expect(result).toBe("IV")
  })
})
