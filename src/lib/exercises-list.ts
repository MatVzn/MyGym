type ExerciseList = {
    workouts: {
        name: string
        gif: string
        weight: number
        note: string
    }[]
}

export var exercisesList: ExerciseList[] = [
    {
        workouts: [
            {
                name: 'Supino Inclinado Halter',
                gif: 'supino-inclinado-halter',
                weight: 14,
                note: ''
            },
            {
                name: 'Crossover Inferior',
                gif: 'crossover-inferior',
                weight: 5,
                note: ''
            },
            {
                name: 'Supino Máquina',
                gif: 'supino-máquina',
                weight: 35,
                note: 'Banco altura 5'
            },
            {
                name: 'Peckdeck',
                gif: 'peckdeck',
                weight: 27.5,
                note: 'Banco altura 6'
            },
            {
                name: 'Testa Polia',
                gif: 'testa-polia',
                weight: 10,
                note: ''
            },
            {
                name: 'Polia Corda',
                gif: 'polia-corda',
                weight: 7.5,
                note: ''
            },
            {
                name: 'Polia Ombro',
                gif: 'polia-ombro',
                weight: 2.5,
                note: ''
            }
        ]
    },
    {
        workouts: [
            {
                name: 'Cadeira Extensora',
                gif: 'cadeira-extensora',
                weight: 55,
                note: ''
            },
            {
                name: 'Legpress',
                gif: 'legpress',
                weight: 120,
                note: ''
            },
            {
                name: 'Cadeira Adutora',
                gif: 'adutora',
                weight: 90,
                note: ''
            },
            {
                name: 'Mesa Flexora',
                gif: 'mesa-flexora',
                weight: 37.5,
                note: ''
            },
            {
                name: 'Agachamento Smith',
                gif: 'agachamento-smith',
                weight: 25,
                note: ''
            }
        ],
    },
    {
        workouts: [
            {
                name: 'Puxada Aberta',
                gif: 'puxada-aberta',
                weight: 35,
                note: ''
            },
            {
                name: 'Puxada Triangulo',
                gif: 'puxada-triangulo',
                weight: 40,
                note: ''
            },
            {
                name: 'Remada',
                gif: 'remada',
                weight: 40,
                note: ''
            },
            {
                name: 'Máquina Lombar',
                gif: 'maquina-lombar',
                weight: 47.5,
                note: ''
            },
            {
                name: 'Peckdeck Reverso',
                gif: 'peckdeck-reverso',
                weight: 20,
                note: ''
            },
            {
                name: 'Barra W',
                gif: 'barra-w',
                weight: 15,
                note: ''
            },
            {
                name: 'Bíceps Martelo',
                gif: 'biceps-martelo',
                weight: 7,
                note: ''
            },
        ],
    },
    {
        workouts: [
            {
                name: 'Panturrilha',
                gif: 'panturrilha',
                weight: 30,
                note: ''
            },
            {
                name: 'Abdomem',
                gif: 'abdomem',
                weight: 32.5,
                note: ''
            }
        ]
    }
]
