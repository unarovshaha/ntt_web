export interface IUserProfile {
    id: string,
    name: string,
    surname: string,
    passport_seria: string,
    sex: string,
    born_date: string,
    born_address: string,
    indefikatsiya_pin: string,
    phone_extra: string,
    email: string,
    student_id: number
}

export interface IUserProfileSchema {
    data: IUserProfile,
    loading: boolean,
    error: undefined
}