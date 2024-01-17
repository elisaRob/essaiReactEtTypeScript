
import './App.css'
import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/react.svg'
import { Header }  from './components/Header'
import autreImage from './assets/vite.svg'
import { Essai } from './components/Essai'
import { useState } from 'react'

type leCours = {
  title: string;
  description:string;
  id:number;
}

function App() {

  const [goals,setGoals]=useState<leCours[]>([])

  function handleAddGoal(){
    setGoals(prevGoal => {

      const newGoal:leCours={
        title:"Bonjour",
        description:"autre",
        id:Math.random()
      }

      return [...prevGoal, newGoal]
    })
  }

  return (
    <main>

      <Header image = {{ src : goalsImg, alt: "liste" }} >
          <h1>Your course goals</h1>
      </Header>

      <Essai autreImage={{ src: autreImage, alt:"autre image"}}>
          <h3>Juste un essai</h3>
      </Essai>

      <button onClick={handleAddGoal}>Add Goal</button>

      <ul>
        {goals.map((goal)=>(
            <li>
            <CourseGoal title={goal.title} description={goal.description} >
                <p>Apprendre pour devenir meilleur</p>
            </CourseGoal>  
            </li>
        ))}
      </ul>
  
  
    </main>
  )
}

export default App
