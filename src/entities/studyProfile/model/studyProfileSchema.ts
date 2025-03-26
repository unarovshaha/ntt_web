
export interface IStudyProfile {
    id?: number,
    grand?: string,
    education_language?: string,
    price?: number,
    shift?: string,
    region?: string,
    name?: string
}

export interface IStudyProfileSchema extends IStudyProfile{
    loading: boolean,
    error?: "error"
}
