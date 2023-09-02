import { FC } from "react"
import { IFooter } from "../Interface/IFooter"
import './footer.sass'




export const Footer: FC<IFooter> = (props: IFooter) => {

  return (
   <div className="footer">
      Created by godlik
   </div>
  )
}

