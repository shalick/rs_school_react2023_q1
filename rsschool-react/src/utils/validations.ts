export const validateTitle = (value: string) =>
    /^[a-z '-]+$/i.test(value) && value.length >= 2

export const validateDate = (value: string) => new Date(value) > new Date()

export const validateCategory = (value: string) => value !== ''

export const validateWatched = (value: boolean) => value

export const validateStreaming = (value: string | null) => !!value

export const validatePoster = (value: FileList | null) =>
    value !== null && value[0] && value[0].size <= 2 * 1024 * 1024
