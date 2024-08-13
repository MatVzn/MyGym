import { useEffect, useState } from "react"
import { ExercisesList } from "../lib/exercises-list"
import { ExerciseBox } from "./exercise-box"

interface ExerciseListProps {
    currentWorkout: string
}

interface WorkoutProps {
    name: string
    gif: string
    weight: number
    note: string
}

export function ExerciseList({currentWorkout}: ExerciseListProps) {
    
    const workoutAlt = ExercisesList.Alt
    const [workout, setWorkout] = useState<WorkoutProps[]>([])

    useEffect(() => {
        try {
            if (currentWorkout === 'A') {
                setWorkout(ExercisesList.A)
            } else if (currentWorkout === 'B') {
                setWorkout(ExercisesList.B)
            } else if (currentWorkout === 'C') {
                setWorkout(ExercisesList.C)
            } 
        } catch (err) {
            currentWorkout = 'algo deu errado'
        }
    }, [currentWorkout])

    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-4 mb-4 mx-2">
                <h1 className="w-20 text-white/40">Treino {currentWorkout}</h1>
                <div className="w-full h-px bg-white/40"></div>
            </div>
            <ul>
                {workout && workout.map((item, index) => 
                    <ExerciseBox 
                        key={index} 
                        name={item.name} 
                        gif={item.gif} 
                        weight={item.weight} 
                        note={item.note}
                    />
                )}
                <div className="flex flex-row justify-center items-center gap-8 mb-4 mx-2">
                    <h1 className="w-auto whitespace-nowrap text-white/40">Outros</h1>
                    <div className="w-full h-px bg-white/40"></div>
                </div>
                {workoutAlt.map((item, index) => 
                    <ExerciseBox 
                        key={index} 
                        name={item.name} 
                        gif={item.gif} 
                        weight={item.weight} 
                        note={item.note}
                    />
                )}
            </ul>
        </div>
    )
} 