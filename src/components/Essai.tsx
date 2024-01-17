import { ReactNode } from "react"

type EssaiProps = {
    children : ReactNode;
    autreImage : {
        src:string;
        alt:string;
    }
}

export function Essai(props:EssaiProps){
    return(
        <>
            <img src={props.autreImage.src} alt={props.autreImage.alt} />
            {props.children}
        </>
    )
}