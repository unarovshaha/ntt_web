
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
    desc_json: { text: string },

    img: string
}

export interface IHomeNewsSchema {
    loading: boolean,
    error: boolean,
    profileItem: IProfileItemSchema
}