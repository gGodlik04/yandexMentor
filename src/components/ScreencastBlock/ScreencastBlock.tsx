import { FC } from "react"
import { IScreencastBlock } from "../Interface/IScreencastBlock"
import './screencastblock.sass'




export const ScreencastBlock: FC<IScreencastBlock> = (props: IScreencastBlock) => {

  return (
   <div className="screencastBlock">
      ScreencastBlock
   </div>
  )
}

