

export interface INotification {
    id: number,
    name: string,
    grand_text: string,
}
export interface INotificationProfile {
    id: number,
    description: string,
    created_at: string,
}
export interface INotificationSchema {
    data: INotification[],
    profileItem: INotificationProfile[],
    loading: boolean,
    error?: "error"
}
