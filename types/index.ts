export interface ColorStatItem {
  color: string
  value: number
}

export type DashboardStat = {
  icon: string
  name: string
  url?: string
  stat: number
  classes?: string
}
