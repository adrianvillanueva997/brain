import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/copyCode.scss"
// @ts-ignore
import script from "./scripts/clipboard.inline"

export default (() => {
  const CopyCode: QuartzComponent = () => {
    return <></>
  }

  CopyCode.afterDOMLoaded = script
  CopyCode.css = style

  return CopyCode
}) satisfies QuartzComponentConstructor
