import { FC } from "react";
import { IJsPowerHeader } from "../Interface/IJsPowerHeader";
import './jspowerheader.sass'


export const JsPowerHeader: FC<IJsPowerHeader> = (props: IJsPowerHeader) => {

    return(
        <div className="jsPowerHeader">
            <p>Почувствуй силу JavaScript*</p>
        </div>
    )
}