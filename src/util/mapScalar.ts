export function mapNullNumber(value: string): number | undefined {
  return value !== 'null' ? +value : undefined
}

export function mapNullString(value?: string): string | undefined {
  return value && value !== 'null' ? value : undefined
}

export function mapBoolean(value: string) {
  return (value === 'true') ? true : false
}
