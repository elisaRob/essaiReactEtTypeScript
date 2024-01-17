import { type ReactNode } from "react"

type HeaderProps = {
    image: {
        src: string;
        alt:string;
    }
    children: ReactNode;
}

export function Header({image,children}:HeaderProps){
  return(
    <>
        {/* <img src={image.src} alt={image.alt}/> */}
        <img {...image} />
        {children}
    </>
  )
}