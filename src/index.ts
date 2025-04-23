import { ColorPicker } from './components/index.js'
import Opacity from './components/Opacity.js'
import GradientBar from './components/GradientBar.js'

export type {
  Styles,
  ColorsProps,
  PassedConfig,
  LocalesProps,
  GradientProps,
  ColorPickerProps,
} from './shared/types.js'

export { useColorPicker } from './hooks/useColorPicker.js'
export { GradientBar, Opacity }
export { useDropper } from './hooks/useDropper.js'
export { useDeletePoint } from './hooks/useDeletePoint.js'
export default ColorPicker
