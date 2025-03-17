export interface IHomeNews {
    id: number,
    desc_json: { text: string },
    name: string,
    views_display: string,
    date: string,
    img: string,
    shared: {
        instagram: string,
        facebook: string,
        telegram: string,
    }
}

export interface IProfileItem {
    id: number,
    name: string,
    language: string,
    shift: string,
    requirements: string,
    pay_sum: string,
    about: string,
    price: string,
    desc: string
}

export interface IProfileItemSchema {
    landing: IProfileItem[],
    desc_json: { text: string }
}

export interface IHomeNewsSchema {
    loading: boolean,
    error: boolean,
    data: IHomeNews[],
    profileItem: { landing: IProfileItem[], desc_json: { text: string } }
}