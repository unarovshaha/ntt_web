
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
    data: any,
    announcements: any[],
    gallery: any[],
    degree: any[],
    userData: any,
    userDataImage: any,
    loading: boolean,
    error?: "error"
}
