import {
    validateTitle,
    validateDate,
    validateCategory,
    validateStreaming,
    validateWatched,
    validatePoster,
} from './validations'

export const formFields = {
    title: {
        name: 'title',
        label: 'Movie title',
        register: {
            validate: (value: string) =>
                validateTitle(value) || 'Incorrect title',
        },
    },

    date: {
        name: 'date',
        label: 'Release date',
        register: {
            validate: (value: string) =>
                validateDate(value) || 'Incorrect date',
        },
    },

    category: {
        name: 'category',
        label: 'Category',
        options: [
            '',
            'Action',
            'Drama',
            'Romance',
            'Animation',
            'Comedy',
            'Crime',
            'Thriller',
        ],
        register: {
            validate: (value: string) =>
                validateCategory(value) || 'You should choose category',
        },
    },

    streaming: {
        name: 'streaming',
        options: ['Yes', 'No'],
        register: {
            validate: (value: string | null) =>
                validateStreaming(value) || 'Please indicate streaming',
        },
    },

    watched: {
        name: 'watched',
        label: 'I have watched this movie',
        register: {
            validate: (value: boolean) =>
                validateWatched(value) || 'Check if you watched this movie',
        },
    },

    poster: {
        name: 'poster',
        label: 'Upload poster',
        register: {
            validate: (value: FileList | null) =>
                validatePoster(value) || 'Download file with 2 MB size limit',
        },
    },
}
