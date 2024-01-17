import { PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{ title:string, description:string, onDelete:(id: number) => void, id:number
 } >

export default function CourseGoal(props : CourseGoalProps) {
    return <article>
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.children}</p>
        </div>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </article>
}