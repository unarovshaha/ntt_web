import {IComment} from "entities/home/model/schema/homeSchema";

export interface IMttList {
    id:number,
    name: string
}

export interface IOrganization {
    id: number,
    rating: number,
    name: string,
    landing: {
        price_max: number,
        price_min: number,
        start_date: string,
        id: number,
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