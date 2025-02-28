export interface IRegister {
    phone_number: number,
    password: number
}

export interface IRegisterSchema {
    data: IRegister[],
    loading: boolean,
    error?: "error"
}