export interface IMttItem {
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

export interface IMttSchema {
    mtt: IMttItem[],
    loading: boolean,
    error?: "error"
}
