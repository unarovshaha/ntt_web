export interface HeaderItem {
    id: number,
    name: string,
    img: string,
    deleted: boolean
}
export interface IHome {
    name: string,
    region: string,
    desc: string,
    direction: string
}

interface Landing {
    id: number;
    price: number;
    requirements: string;
    language: string;
    grant: boolean;
    shift: string
}

interface IHomeTechnical {
    id: number;
    name: string;
    locations: string;
    img: string;
    organization_type: number;
    landing: Landing;
}


interface Description {
    id: number;
    desc: string;
    type: string;
    img: string
}

interface GalleryItem {
    id: number;
    file: string;
}

// interface ProfileInterface {
//     description: Description;
//     advantages: any[];
//     gallery: GalleryItem[];
//     degree: any[];
//     landing: any | null;
// }



export interface Organization {
    id: number;
    name: string;
    locations: string | null;
    desc: string | TrustedHTML | undefined;
    phone: string;
    img: string | null;
    organization_type: {
        id: number;
        name: string;
        img: string | null;
        deleted: boolean;
    };
    region: {
        id: number;
        name: string;
    };
    desc_json: any;
    grand_text: string;
    grand_json: any;
    inn: string | null;
    request_count: number;
}

interface OrganizationHeader{

    id: number
    user: {
        id: number
        file: {
            id: number
            url: string
        }
        name: string
        phone_extra: string
        surname: string
        username: string
    }
}



interface OrganizationLanding {
    id: number;
    name: string;
}

interface Year {
    id: number;
    from_date: string;
    to: string;
    date: string;
    current_year: boolean;
}

interface OrganizationType {
    id: number;
    name: string;
    img: string | null;
    deleted: boolean;
}

interface Degree {
    id: number;
    name: string;
    organization_type: OrganizationType;
    desc: string | null;
}

interface EducationLanguage {
    id: number;
    name: string;
    img: string | null;
}

interface Shift {
    id: number;
    name: string;
    organization_type: number;
}

interface Field {
    id: number;
    name: string;
    desc: string;
    admin_status: boolean;
    deleted: boolean;
    organization_type: OrganizationType;
}

interface JsonContent {
    root: {
        type: string;
        format: string;
        indent: number;
        version: number;
        children: {
            type: string;
            format: string;
            indent: number;
            version: number;
            children: {
                mode: string;
                text: string;
                type: string;
                style: string;
                detail: number;
                format: number;
                version: number;
            }[];
            direction: string;
            textStyle: string;
            textFormat: number;
        }[];
        direction: string;
    };
}

interface EducationRecord {
    id: number;
    organization: OrganizationLanding;
    year: Year;
    desc: string;
    expire_date: string;
    degree: Degree;
    grant: boolean;
    education_language: EducationLanguage;
    price: number;
    requirements: string;
    shift: Shift;
    desc_json: JsonContent;
    requirements_json: JsonContent;
    field: Field;
    start_date: string;
}

interface JsonText {
    mode: string;
    text: string;
    type: string;
    style: string;
    detail: number;
    format: number;
    version: number;
}

interface JsonParagraph {
    type: string;
    format: string;
    indent: number;
    version: number;
    children: JsonText[];
    direction: string;
    textStyle: string;
    textFormat: number;
}

interface JsonRoot {
    type: string;
    format: string;
    indent: number;
    version: number;
    children: JsonParagraph[];
    direction: string;
}

 export interface JsonContents {
    root: JsonRoot;
}

interface IPosterLanding {
    desc_json: JsonContents;
    education_language: string;
    expire_date: string;
    field: Field;
    grant: boolean;
    id: number;
    img: string;
    location: string;
    name: string;
    price: number;
    region: string;
    shift: string;
    start_date: string;
    type: string;
}
interface IPoster {
    landing: IPosterLanding[]
}
export interface IHomeSchema {
    headerItem: HeaderItem[]
    data: IHome[],
    technical: IHomeTechnical[],
    description: Description[];
    advantages: any[];
    gallery: GalleryItem[];
    degree: any[];
    landing: EducationRecord[];
    loading: boolean,
    error: boolean,
    organization_profile: Organization | undefined,
    organization_profile_header: OrganizationHeader | undefined
    degreeList: any[],
    years: any[],
    fields: any[],
    posters: any[],
    searchResult: any[],

}