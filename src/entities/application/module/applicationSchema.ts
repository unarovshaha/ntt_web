
export interface IApplication {
    id: number,
    name: string
}

export interface IApplicationSchema {
    data: IApplication[],
    loading: boolean
    error?: "error"
}