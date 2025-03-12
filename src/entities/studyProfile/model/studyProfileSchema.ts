
export interface IStudyProfile {
    id?: number,
    desc?: string,
    education_language?: string,
    price?: number,
    shift?: string,
    region?: string,
}

export interface IStudyProfileSchema extends IStudyProfile{
    loading: boolean,
    error?: "error"
}
