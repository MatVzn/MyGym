import { ExerciseList } from "./components/exercise-list";

export function App() {

  var currentWorkout = 'A'

  return (
    <div className="h-full inset-0 flex-col flex items-center py-16 gap-6 bg-stone-950">

      <div className="justify-center items-center mb-10 flex-row gap-8 text-zinc-300 flex text-3xl">
        <button className="rounded border-zinc-800 border-2 bg-zinc-800 w-12 h-12">A</button>
        <button className="rounded border-zinc-800 border-2 w-12 h-12 cursor-pointer">B</button>
        <button className="rounded border-zinc-800 border-2 w-12 h-12 cursor-pointer">C</button>
      </div>

      <ExerciseList />

    </div>
  )
}
