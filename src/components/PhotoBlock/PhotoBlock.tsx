import { FC } from "react";
import { IPhotoBlock } from "../Interface/IPhotoBlock";
import './photoblock.sass';
import before from '../../assets/images/before.jpg';;
import after from '../../assets/images/after.jpg';;




export const PhotoBlock: FC<IPhotoBlock> = (props: IPhotoBlock) => {

  return (
   <div className="photoBlock">
      <img className="photoBlock__image-before" src={before} alt="before" height="90%"/>
      <div className="photoBlock__text">
        <div className="photoBlock__text_right">&#129144;&nbsp;Каким я был</div>
        <div className="photoBlock__text_left">Таким я и остался :)&nbsp;&#129146;</div>
      </div>
      <img className="photoBlock__image-after" src={after} alt="after" height="90%"/>
   </div>
  )
}

