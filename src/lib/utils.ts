export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}
