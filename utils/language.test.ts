import { describe, expect, it } from 'vitest'

import { pluralize } from './language'

describe('Pluralize', () => {
  it('handles single case', () => {
    const result = pluralize(1, 'file')
    expect(result).toBe('file')
  })

  it('handles single case providing plural', () => {
    const result = pluralize(1, 'file', 'files')
    expect(result).toBe('file')
  })

  it('pluralizes by adding s', () => {
    const result = pluralize(2, 'file')
    expect(result).toBe('files')
  })

  it('pluralizes by providing it', () => {
    const result = pluralize(3, 'wolf', 'pack')
    expect(result).toBe('pack')
  })

  it('pluralizes zero case', () => {
    const result = pluralize(0, 'file')
    expect(result).toBe('files')
  })
})
