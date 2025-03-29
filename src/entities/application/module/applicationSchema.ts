
export interface IApplication {
    name: string,
    id: number,
    date: string,
    degree: string,
    field: string,
    language: string,
    phone: string,
    shift: string
    region: string
    price: string
}

export interface IApplicationSchema {
    data: IApplication[],
    types: IApplication[],
    loading: boolean
    error?: "error"
}