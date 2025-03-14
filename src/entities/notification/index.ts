export {NotificationList} from "./ui/notificationList/notificationList";
export {NotificationItem} from "./ui/notificationItem/notificationItem";

export {notificationReducer, notificationActions} from "./module/notificationSlice";
export type {INotificationSchema, INotification} from "./module/notificationSchema";
export {fetchNotificationData} from "./module/notificationThunk";
export {
    getNotificationData,
    getNotificationLoading,
    getNotificationError
} from "./module/notificationSelector";
