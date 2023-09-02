import { FC } from "react";
import { IJsPowerHeader } from "../Interface/IJsPowerHeader";


export const JsPowerHeader: FC<IJsPowerHeader> = (props: IJsPowerHeader) => {

    return(
        <div className="JsPowerHeader">
            Почувствуй силу JavaScript
        </div>
    )
}