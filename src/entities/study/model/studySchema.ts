import {IComment} from "entities/home/model/schema/homeSchema";

export interface IMttList {
    id:number,
    name: string
}

export interface IOrganization {
    id: number,
    rating: number,
    name: string,
    start_date: string,
    expire_date: string,
    landing: {
        price_max: number,
        price_min: number,
        id: number,
        grant: boolean,
        language: [],
        shift: []
    },
    locations: string,
    img: string,
    desc?: string,
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
    error?: "error",

}