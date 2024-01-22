import { describe, expect, it } from 'vitest'

import type { ColorStatItem } from '~/types/index'
import linearGradient from './linear-gradient'

describe('should return a linear gradient', () => {
  it('with blue 100%', () => {
    const items = [{ color: 'blue', value: 1 }]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, blue 0%, blue 100%)',
    )
  })

  it('with blue 100% to top', () => {
    const items = [{ color: 'blue', value: 1 }]
    expect(linearGradient(items, 'to top')).toBe(
      'linear-gradient(to top, blue 0%, blue 100%)',
    )
  })

  it('with blue 50% and red 50%', () => {
    const items = [
      { color: 'blue', value: 1 },
      { color: 'red', value: 1 },
    ]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, blue 0%, blue 50%, white 50%, white 51%, red 51%, red 100%)',
    )
  })

  it('with blue 25% and red 75%', () => {
    const items = [
      { color: 'blue', value: 1 },
      { color: 'red', value: 3 },
    ]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, blue 0%, blue 25%, white 25%, white 26%, red 26%, red 100%)',
    )
  })

  it('with blue 25%, green 50% and red 25%', () => {
    const items = [
      { color: 'blue', value: 25 },
      { color: 'green', value: 50 },
      { color: 'red', value: 25 },
    ]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, blue 0%, blue 25%, white 25%, white 26%, green 26%, green 75%, white 75%, white 76%, red 76%, red 100%)',
    )
  })

  it('with blue 33%, green 33% and red 33%', () => {
    const items = [
      { color: 'blue', value: 10 },
      { color: 'green', value: 10 },
      { color: 'red', value: 10 },
    ]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, blue 0%, blue 33%, white 33%, white 34%, green 34%, green 67%, white 67%, white 68%, red 68%, red 100%)',
    )
  })

  it('empty array', () => {
    const items: ColorStatItem[] = []
    expect(linearGradient(items)).toBe('')
  })

  it('without including negative values', () => {
    const items = [
      { color: 'blue', value: -10 },
      { color: 'red', value: 10 },
    ]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, red 0%, red 100%)',
    )
  })

  it('without a white stop if there is only one stat', () => {
    const items = [{ color: 'blue', value: 2 }]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, blue 0%, blue 100%)',
    )
  })

  it('without including zero values', () => {
    const items = [
      { color: 'green', value: 10 },
      { color: 'blue', value: 0 },
      { color: 'red', value: 0 },
    ]
    expect(linearGradient(items)).toBe(
      'linear-gradient(to bottom, green 0%, green 100%)',
    )
  })

  it('all zero values', () => {
    const items = [
      { color: 'green', value: 0 },
      { color: 'blue', value: 0 },
      { color: 'red', value: 0 },
    ]
    expect(linearGradient(items)).toBe('')
  })
})
