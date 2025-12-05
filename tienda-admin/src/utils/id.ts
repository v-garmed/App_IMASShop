export function generarId(): string {
  return Math.random().toString(36).substring(2, 10);
}
