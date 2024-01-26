export function pluralize(n: number, single: string, plural?: string) {
  return n === 1 ? single : plural || `${single}s`
}
