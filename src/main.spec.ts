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

  it("should return V when 5 is passed", () => {
    const result = numeralsToRoman(5)

    expect(result).toBe("V")
  })

  it("should return X when 10 is passed", () => {
    const result = numeralsToRoman(10)

    expect(result).toBe("X")
  })

  it("should return L when 50 is passed", () => {
    const result = numeralsToRoman(50)

    expect(result).toBe("L")
  })

  it("should return C when 100 is passed", () => {
    const result = numeralsToRoman(100)

    expect(result).toBe("C")
  })

  it("should return D when 500 is passed", () => {
    const result = numeralsToRoman(500)

    expect(result).toBe("D")
  })

  it("should return M when 1000 is passed", () => {
    const result = numeralsToRoman(1000)

    expect(result).toBe("M")
  })
})
