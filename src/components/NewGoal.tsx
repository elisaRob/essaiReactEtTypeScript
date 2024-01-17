import { type FormEvent, useRef } from 'react'

type NewGoelProps = {
    onAddGoal :(sujet:string, but:string)=>void
}

export default function NewGoal(props:NewGoelProps){

    const sujet = useRef<HTMLInputElement>(null)
    const but = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const recuperationTonSujet=sujet.current!.value
        const recuperationTonBut=but.current!.value

        props.onAddGoal(recuperationTonSujet,recuperationTonBut)
        event.currentTarget.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="tonSujet">Ton sujet</label>
            <input id="tonSujet" type="text" ref={sujet} />
        </p>
        <p>
            <label htmlFor="tonBut">Ton but</label>
            <input id="tonBut" type="text" ref={but}/>
        </p>

        <button onClick={()=>props.onAddGoal}>Ajouter</button>
      
        </form>
    )

}