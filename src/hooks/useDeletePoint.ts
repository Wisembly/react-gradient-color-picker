import { usePicker } from '../context.js'
import { high, low } from '../utils/formatters.js'

export const useDeletePoint = () => {
  const { colors, selectedColor, createGradientStr } = usePicker()

  const deletePoint = () => {
    if (colors?.length > 2) {
      const formatted = colors?.map((fc: any, i: number) => ({
        ...fc,
        value: i === selectedColor - 1 ? high(fc) : low(fc),
      }))
      const remaining = formatted?.filter(
        (_: any, i: number) => i !== selectedColor
      )
      createGradientStr(remaining)
    }
  }

  return { deletePoint, canDelete: colors?.length > 2 }
}
