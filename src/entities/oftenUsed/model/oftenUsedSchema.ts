
export interface IList {
    id: number,
    name: string,
}

export interface IYearList extends IList{
    date: string
}



export interface IOftenUsedSchema {
    directions: IList[],
    locations: IList[],
    studyTypes: IList[],
    languages: IList[],
    organizationTypes: IList[],
    academicYear: IYearList[],
    currentYear?: number,
    loading: boolean,
    error?: "error"
}