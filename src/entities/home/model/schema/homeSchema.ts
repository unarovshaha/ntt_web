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

interface Education {
    id: number;
    name: string;
    type: string;
    education_language: string;
    start_date: string;
    expire_date: string;
    grand: string;
    location: string | null;
    price: number;
    region: string;
    shift: string;
}
export interface IHomeSchema {
    headerItem: HeaderItem[]
    data: IHome[],
    technical: IHomeTechnical[],
    description: Description[];
    advantages: any[];
    gallery: GalleryItem[];
    degree: any[];
    landing: Education[];
    loading: boolean,
    error: boolean
}