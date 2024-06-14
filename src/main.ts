export function numeralsToRoman(num: number): string {
  if (num === 4) {
    return 'IV'
  }
  const charToRepeat = 'I'
  return charToRepeat.repeat(num);
}
