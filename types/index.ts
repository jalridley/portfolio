export interface ColorStatItem {
  color: string
  value: number
}

export type StatItem = {
  icon: Component
  name: string
  url?: string
  stat: number
  classes?: string
}
