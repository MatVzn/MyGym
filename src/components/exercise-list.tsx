import { ExerciseBox } from "./exercise-box"

interface ExerciseListProps {
    currentWorkout: string
}

export function ExerciseList({currentWorkout}: ExerciseListProps) {
    return (
        <ExerciseBox />
    )
} 