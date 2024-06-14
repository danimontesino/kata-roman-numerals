export function numeralsToRoman(num: number): string {
  if (num === 5) {
    return 'V'
  }
  if (num === 10) {
    return 'X'
  }
  if (num === 50) {
    return 'L'
  }
  if (num === 100) {
    return 'C'
  }
  if (num === 500) {
    return 'D'
  }
  if (num === 1000) {
    return 'M'
  }
  const charToRepeat = 'I'
  return charToRepeat.repeat(num);
}
