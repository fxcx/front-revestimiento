export function parseProduct(value: unknown) {
  if (!value || typeof value !== "object") return null
  const input = value as Record<string, unknown>
  const name = typeof input.name === "string" ? input.name.trim() : ""
  const description = typeof input.description === "string" ? input.description.trim() : ""
  const category = typeof input.category === "string" ? input.category.trim() : ""
  const imageUrl = typeof input.imageUrl === "string" ? input.imageUrl.trim() : ""
  const price = Number(input.price)
  const colors = input.colors === undefined || input.colors === null || input.colors === "" ? null : Number(input.colors)
  const active = input.active === undefined ? true : input.active

  if (!name || name.length > 120) return null
  if (!description || description.length > 500) return null
  if (!category || category.length > 60) return null
  if (!Number.isFinite(price) || price < 0 || price > 1_000_000_000) return null
  const validImageUrl = !imageUrl || /^\/(?!\/)/.test(imageUrl) || /^https:\/\//i.test(imageUrl)
  if (imageUrl.length > 2048 || !validImageUrl) return null
  if (colors !== null && (!Number.isInteger(colors) || colors < 0 || colors > 1000)) return null
  if (typeof active !== "boolean") return null

  const longDescription = typeof input.longDescription === "string" ? input.longDescription.trim() : null
  if (longDescription && longDescription.length > 10000) return null

  return { name, description, category, imageUrl, price, colors, active, longDescription }
}
