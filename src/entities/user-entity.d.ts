export type User = {
  name: string
  avatar_url: string
  login: string
  location: string
  followers: number | null
  following: number | null
  notFound?: boolean
}
