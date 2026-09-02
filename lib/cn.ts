type ClassValue = string | false | null | undefined;

/**
 * Joins class names, dropping falsy values so conditional classes can be
 * written inline. Later classes are not de-duplicated against earlier ones —
 * when a caller overrides a default, pass the override in `className` and keep
 * component defaults narrow enough not to collide.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
