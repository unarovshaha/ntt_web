
export interface IApplicationProfile {
    id?: number,
    language: string,
    date: string,
    user: {
        email: string,
        phone_extra: string
        phone: string,
        name: string
    },
    request: {
        degree: string,
        language: string,
        shift: string
    },
    passport: {
        born_address: string,
        born_date: string,
        identification_pin: string,
        seria: string,
        sex: string
    }
}

export interface IApplicationProfileSchema extends IApplicationProfile{
    loading: boolean,
    error?: "error"
}