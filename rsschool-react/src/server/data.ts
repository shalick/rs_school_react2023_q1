export interface CardState {
    id: number
    name: string
    status: string
    image: string
    species: string
    gender?: string
    location?: {
        name?: string
    }
    episode?: string[]
    created: string
}

export const species: string[] = [
    'Value',
    'Human',
    'Alien',
    'Humanoid',
    'unknown',
    'Poopybutthole',
    'Mythological Creature',
    'Animal',
    'Robot',
    'Cronenberg',
    'Disease',
]

export const data: CardState[] = [
    {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: 'Citadel of Ricks',
        },
        episode: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
        ],
        created: '04/11/2017',
    },
    {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: 'Citadel of Ricks',
        },
        episode: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
        ],
        created: '04/11/2017',
    },
    {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        species: 'Human',
        gender: 'Female',
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        episode: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
        ],
        created: '04/11/2017',
    },
    {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        species: 'Human',
        gender: 'Female',
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        episode: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
        ],
        created: '04/11/2017',
    },
    {
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        episode: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
        ],
        created: '04/11/2017',
    },
    {
        id: 6,
        name: 'Abadango Cluster Princess',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
        species: 'Alien',
        gender: 'Male',
        location: {
            name: 'Abadango',
        },
        episode: ['27'],
        created: '04/11/2017',
    },
    {
        id: 7,
        name: 'Abradolf Lincler',
        status: 'unknown',
        image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: 'Testicle Monster Dimension',
        },
        episode: ['10', '11'],
        created: '04/11/2017',
    },
    {
        id: 8,
        name: 'Adjudicator Rick',
        status: 'Dead',
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: 'Citadel of Ricks',
        },
        episode: ['28'],
        created: '04/11/2017',
    },
    {
        id: 9,
        name: 'Agency Director',
        status: 'Dead',
        image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: 'Earth (Replacement Dimension)',
        },
        episode: ['24'],
        created: '04/11/2017',
    },
    {
        id: 10,
        name: 'Alan Rails',
        status: 'Dead',
        image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
        species: 'Human',
        gender: 'Male',
        location: {
            name: `Worldender's lair`,
        },
        episode: ['25'],
        created: '04/11/2017',
    },
]
