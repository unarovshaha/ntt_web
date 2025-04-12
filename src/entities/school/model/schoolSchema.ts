export interface ISchoolItem {
    id: number,
    location: string,
    price: {
        from: number,
        to: number
    },
    date: {
        from: string,
        to: string
    }
}

export interface ISchoolSchema {
    schools: ISchoolItem[],
    loading: boolean,
    error?: "error"
}
