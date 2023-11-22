export function dateFormat(date: Date) {
  return new Date(date).toLocaleDateString();
}

export function dateSlice(date: string) {
  return date.slice(0, 10);
}
