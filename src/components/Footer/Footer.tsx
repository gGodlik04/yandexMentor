import { FC } from "react"
import { IFooter } from "../Interface/IFooter"
import './footer.sass'




export const Footer: FC<IFooter> = (/* props: IFooter */) => {

  return (
   <div className="footer">
      <p className="footer__text">&#169;Created by godlik</p>
   </div>
  )
}

