import CourseGoal from './CourseGoal'
import { leCours } from '../App'

type CourseGoalList = {
    goals : leCours[];
    onDeleteGoal:(id: number)=>void
}

export default function CourseGoalList({goals,onDeleteGoal}: CourseGoalList){

    return(
        <ul>
            {goals.map((goal)=>(
                <li key={goal.id}>
                <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title} description={goal.description} >
                    <p>Apprendre pour devenir meilleur</p>
                </CourseGoal>  
                </li>
            ))}
        </ul>
    )


}