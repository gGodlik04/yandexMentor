import { FC } from "react"
import { IScreencastBlock } from "../Interface/IScreencastBlock"
import './screencastblock.sass'





export const ScreencastBlock: FC<IScreencastBlock> = (props: IScreencastBlock) => {

  return (
    <div className="screencastBlock">
      <iframe width="100%" height="386" src="https://www.youtube.com/embed/7dCtEvM1n68" title="Build a Color Generator with JavaScript on iCodeThis"
       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

