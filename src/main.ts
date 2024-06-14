export function numeralsToRoman(num: number): string {
  if (num === 5) {
    return 'V'
  }
  const charToRepeat = 'I'
  return charToRepeat.repeat(num);
}
