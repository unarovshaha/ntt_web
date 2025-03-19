
export interface IApplication {
    name: string,
    id: number,
    date: string,
    degree: string,
    field: string,
    language: string,
    phone: string,
    shift: string
}

export interface IApplicationSchema {
    data: IApplication[],
    types: IApplication[],
    loading: boolean
    error?: "error"
}