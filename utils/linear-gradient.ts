import type { ColorStatItem } from '~/types/index'

export default function linearGradient(
  items: ColorStatItem[],
  direction = 'to bottom',
): string {
  const positiveItems = items.filter((item) => item.value > 0)

  if (positiveItems.length === 0) {
    return ''
  }

  let totalValue = 0
  positiveItems.forEach((item) => {
    totalValue += item.value
  })

  const colors: string[] = []
  let startPercentage = 0
  let accumulatedValue = 0

  positiveItems.forEach((item) => {
    accumulatedValue += item.value
    let endPercentage = Math.round((accumulatedValue / totalValue) * 100)
    colors.push(
      `${item.color} ${startPercentage}%`,
      `${item.color} ${endPercentage}%`,
    )

    if (endPercentage !== 100) {
      colors.push(
        `white ${endPercentage}%`,
        `white ${Math.min(endPercentage + 1, 100)}%`,
      )
      endPercentage = Math.min(endPercentage + 1, 100)
    }
    startPercentage = endPercentage
  })

  return `linear-gradient(${direction}, ${colors.join(', ')})`
}
