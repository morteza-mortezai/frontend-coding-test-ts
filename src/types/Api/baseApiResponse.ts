export type BaseApiResponse<T>= {
  results: T[]
  count: number
  next: string
  previus: string|string
}
