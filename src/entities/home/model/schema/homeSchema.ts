
export interface IHome {
    name: string,
    region: string,
    desc: string,
    direction: string
}

export interface IHomeSchema {
    data: IHome[],
    loading: boolean,
    error: boolean
}