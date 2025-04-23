import { useState } from 'react'
import html2canvas from 'html2canvas'
import tc from 'tinycolor2'

const useDropper = (onSelect: (arg0: string) => void) => {
  const [pickerCanvas, setPickerCanvas] =
    useState<CanvasRenderingContext2D | null>(null)
  const [coverUp, setCoverUp] = useState(false)
  const [isPicking, setIsPicking] = useState(false)

  const takePick = () => {
    const root = document.getElementById('root')
    setCoverUp(true)

    // @ts-expect-error some error with this imported packages types
    html2canvas(root).then((canvas: any) => {
      const blankCanvas = document.createElement('canvas')
      const ctx = blankCanvas.getContext('2d', { willReadFrequently: true })

      if (root && ctx) {
        blankCanvas.width = root.offsetWidth * 2
        blankCanvas.height = root.offsetHeight * 2
        ctx.drawImage(canvas, 0, 0)
      }

      setPickerCanvas(ctx)
    })
  }

  const getColorLegacy = (e: any) => {
    e.stopPropagation()
    if (pickerCanvas) {
      const { pageX, pageY } = e
      const x1 = pageX * 2
      const y1 = pageY * 2
      const rgb = pickerCanvas.getImageData(x1, y1, 1, 1).data
      onSelect(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`)
    }
    setIsPicking(false)
    setCoverUp(false)
  }

  const getEyeDrop = () => {
    setIsPicking(true)
    // @ts-expect-error some error with this imported packages types
    if (!window.EyeDropper) {
      takePick()
    } else {
      // @ts-expect-error some error with this imported packages types
      const eyeDropper = new window.EyeDropper()
      const abortController = new window.AbortController()

      eyeDropper
        .open({ signal: abortController.signal })
        .then((result: any) => {
          const tinyHex = tc(result.sRGBHex)
          const { r, g, b } = tinyHex.toRgb()
          onSelect(`rgba(${r}, ${g}, ${b}, 1)`)
          setIsPicking(false)
        })
        .catch((e: any) => {
          console.log(e)
          setIsPicking(false)
        })
    }
  }

  return { coverUp, isPicking, getColorLegacy, getEyeDrop }
}

export { useDropper }
