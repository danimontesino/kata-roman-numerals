import { describe, it, expect } from "vitest"
import { numeralsToRoman } from "./main.js";


describe("numeralstoRoman", () => {
  it("should return I when 1 is passed", () => {
    const result = numeralsToRoman(1)

    expect(result).toBe("I")
  })

  it("should return IV when 4 is passed", () => {
    const result = numeralsToRoman(4)

    expect(result).toBe("IV")
  })

  it("should return V when 5 is passed", () => {
    const result = numeralsToRoman(5)

    expect(result).toBe("V")
  })

  it("should return IX when 9 is passed", () => {
    const result = numeralsToRoman(9)

    expect(result).toBe("IX")
  })

  it("should return X when 10 is passed", () => {
    const result = numeralsToRoman(10)

    expect(result).toBe("X")
  })

  it("should return XL when 40 is passed", () => {
    const result = numeralsToRoman(40)

    expect(result).toBe("XL")
  })

  it("should return L when 50 is passed", () => {
    const result = numeralsToRoman(50)

    expect(result).toBe("L")
  })

  it("should return XC when 90 is passed", () => {
    const result = numeralsToRoman(90)

    expect(result).toBe("XC")
  })

  it("should return C when 100 is passed", () => {
    const result = numeralsToRoman(100)

    expect(result).toBe("C")
  })

  it("should return CD when 400 is passed", () => {
    const result = numeralsToRoman(400)

    expect(result).toBe("CD")
  })

  it("should return D when 500 is passed", () => {
    const result = numeralsToRoman(500)

    expect(result).toBe("D")
  })

  it("should return CM when 900 is passed", () => {
    const result = numeralsToRoman(900)

    expect(result).toBe("CM")
  })

  it("should return M when 1000 is passed", () => {
    const result = numeralsToRoman(1000)

    expect(result).toBe("M")
  })
})
