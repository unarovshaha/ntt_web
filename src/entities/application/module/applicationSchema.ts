
export interface IApplication {
    name: string,
    id: number,
    date: string,
    degree: string,
    field: string,
    language: [{
        id: number,
        name: string
    }],
    phone: string,
    shift: [{
        id: number,
        name: string
    }]
    region: string
    price: string
}

export interface IApplicationSchema {
    data: IApplication[],
    types: IApplication[],
    loading: boolean
    error?: "error"
}