

export interface INotification {
    id: number,
    name: string,
    descr: string,
}

export interface INotificationSchema {
    data: INotification[],
    loading: boolean,
    error?: "error"
}
