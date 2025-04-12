export interface IRegister {
    phone: number,
    password: string
}

export interface IRegisterSchema {
    data: IRegister[],
    loading: boolean,
    error?: "error"
}