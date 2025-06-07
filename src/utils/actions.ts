import { skips } from './helper'
import { SkipTypes } from './types'

export function getSkipById(id: number): SkipTypes | undefined {
  return skips.find((skip) => skip.id === id)
}
