
import './App.css'

import goalsImg from './assets/react.svg'
import { Header }  from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

 export type leCours = {
  title: string;
  description:string;
  id:number;
}

function App() {

  const [goals,setGoals]=useState<leCours[]>([])

  function handleAddGoal(sujet:string, but:string){
    setGoals(prevGoal => {

      const newGoal:leCours={
        title: sujet,
        description: but,
        id: Math.random()
      }

      return [...prevGoal, newGoal]
    })
  }

  function handleDelete(id:number){
    setGoals(prevGoal => (
      prevGoal.filter((goal)=> goal.id !== id)
    ))
  }

  return (
    <main>

      <Header image = {{ src : goalsImg, alt: "liste" }} >
          <h1>Ce qui tu dois atteindre</h1>
      </Header>


      <NewGoal onAddGoal={handleAddGoal}/>

      <CourseGoalList goals={goals} onDeleteGoal={handleDelete}/>
  
  
    </main>
  )
}

export default App
