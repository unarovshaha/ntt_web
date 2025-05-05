
export interface IHomeNews {
    id: number,
    title: string,
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

export interface IBlockItem {
    id: number,
    desc_json: {
        text: string,
    },
    img_url: string,
    news: number,
    type_block: string
}
export interface IProfileItemSchema {
    blocks: IBlockItem[],
    landing: IProfileItem[],
    desc_json: { text: string }
    title: string,
    img: string,
    date: string,
    views_display: string,
}


export interface IHomeNewsSchema {
    loading: boolean,
    error: boolean,
    data: IHomeNews[],
    profileItem: { blocks: IBlockItem[], landing: IProfileItem[], desc_json: { text: string }, title: string, img: string, date: string, views_display: string },
}
