export {HomeHeader} from "./ui/homeHeader/homeHeader"
export {HomePage} from "./ui/homePage/homePage"
export {HomeNewsList} from "./ui/homeNews/homeNews"
export {HomeNewsProfile} from "./ui/homeNewsProfile/homeNewsProfile"
export {OnlineTestEnter} from "./ui/onlineTest/onlineTestEnter/onlineTestEnter"
export {TechnicalSchool } from './ui/technicalSchool/technicalSchool'
export {HomeFooter} from "./ui/homeFooter/homeFooter";


export {homeNewsReducer, homeNewsActions} from "./model/slice/homeNewsSlice";
export {homeReducer, homeActions} from "./model/slice/homeSlice";

export type {IHomeSchema, IHome} from "./model/schema/homeSchema";
export type {IHomeNewsSchema,  IProfileItem} from "./model/schema/homeNewsSchema";
