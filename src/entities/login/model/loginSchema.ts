export interface ILogin {
    phone: number,
    password: string
}

export interface ILoginSchema {
    data: ILogin[],
    loading: boolean,
    error?: "error"
}