
export interface IList {
    id: number,
    name: string,
}



export interface IOftenUsedSchema {
    directions: IList[],
    locations: IList[],
    studyTypes: IList[],
    languages: IList[],
    organizationTypes: IList[],
    loading: boolean,
    error?: "error"
}