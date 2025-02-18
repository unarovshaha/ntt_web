
export interface IStudyType {
    id: number,
    name: string,
}



export interface IOftenUsedSchema {
    directions: IStudyType[]
    loading: boolean,
    error?: "error"
}