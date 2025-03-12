
export interface IMttList {
    id:number,
    name: string
}

export interface IOrganization {
    name: string,
    landing: {
        price: number,
        start_date: string,
        id: number,
    },
    region: string,
}

export interface IStudySchema {
    mttList: IMttList[],
    otmList: [],
    schoolList: IOrganization[],
    directionList: [],
    gallery: [],
    grant?: {},
    advantages?: {},
    loading: boolean,
    error?: "error"
}