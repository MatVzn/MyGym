import { Square } from "lucide-react";

interface ExerciseBoxProps {
    name: string
    gif: string
}

export function ExerciseBox({name, gif}: ExerciseBoxProps) {
    return (
        <li className="bg-stone-900 p-6 rounded-lg flex flex-row items-center justify-center gap-6">
            <Square className="text-zinc-50"/>
            <img 
                src={"./src/assets/gifs/" + gif + ".gif"}  
                alt="gif do exercício" 
                className="size-32 rounded-lg"  
            />
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-zinc-50 mb-4 text-md font-bold">{name}</h1>
                <div className="flex w-full items-center gap-2 bg-yellow-300 py-1 px-2 rounded-lg text-black">
                    <p className="font-bold">Carga:</p>
                    <input type="number" min="0" className="outline-none w-28 bg-transparent rounded-md text-black"/>
                </div>
                <div className="flex w-full items-center gap-2 bg-yellow-300 py-1 px-2 rounded-lg text-black">
                    <input type="text" placeholder="Anotação" className="w-full outline-none placeholder:text-black/30 bg-transparent rounded-md text-black"/>
                </div>
            </div>
        </li>
    )
}