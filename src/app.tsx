import { useState } from "react";
import { ExerciseList } from "./components/workout-list";
import { ExercisesList } from "./lib/exercises-list";

export function App() {

  var currentValue = 0
  
  function changeCurrentValue(value) {
    currentValue = value
  }

  return (
    <div className="h-full inset-0 flex-col flex items-center py-16 gap-6 bg-stone-950">

      <div className="justify-center items-center mb-10 flex-row gap-8 text-zinc-300 flex text-3xl">
        <button onClick={() => changeCurrentValue(0)} className="rounded border-zinc-800 border-2 bg-zinc-800/30 w-12 h-12 hover:bg-zinc-800/50">{item}</button>
        <button onClick={() => changeCurrentValue(1)} className="rounded border-zinc-800 border-2 bg-zinc-800/30 w-12 h-12 hover:bg-zinc-800/50">{item}</button>
        <button onClick={() => changeCurrentValue(2)} className="rounded border-zinc-800 border-2 bg-zinc-800/30 w-12 h-12 hover:bg-zinc-800/50">{item}</button>
      </div>

      <ExerciseList currentWorkout={currentValue}/>

    </div>
  )
}
