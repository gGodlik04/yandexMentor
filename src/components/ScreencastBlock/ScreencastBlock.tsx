import { FC } from "react"
import { IScreencastBlock } from "../Interface/IScreencastBlock"
import './screencastblock.sass'





export const ScreencastBlock: FC<IScreencastBlock> = (props: IScreencastBlock) => {

  return (
    <div className="screencastBlock">
      <iframe width="100%" height="386" src="https://www.youtube.com/embed/maPRR_jjyOE" title="JavaScript для начинающих 2023.
       Полный курс за 6 часов. Уроки. Теория + практика" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

