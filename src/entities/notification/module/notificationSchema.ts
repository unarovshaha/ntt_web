

export interface INotification {
    id: number,
    name: string,
    desc: string,
    date: string
}

export interface INotificationSchema {
    data: INotification[],
    loading: boolean,
    error?: "error"
}
