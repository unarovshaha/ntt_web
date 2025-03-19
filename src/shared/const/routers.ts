
export const getEntranceRoute = () => `personal`
export const getMttFilterRoute = () => `mttFilter`
export const getOtmFilterRoute = () => `otmFilter`
export const getLoginRoute = () => `login`
export const getOnboardingRoute = () => `onboard`
export const getRegisterRoute = () => `register`
export const getIdentificationRoute = () => `identification`
export const getIdentifyRoute = () => `identify`
export const getSchoolPageRoute = () => `schoolPage/*`
export const getMttPageRoute = () => `mttPage/*`
export const getApplicationPageRoute = () => `application`
export const getApplicationProfilePageRoute = (id:string) => `perApplication/profile/${id}`
export const getProfilePageRoute = () => `personal/profile`
export const getUserEducationPageRoute = () => `personal/education`
export const getUserApplicationsPageRoute = () => `personal/userApplications`
export const getUserNotificationsPageRoute = () => `personal/userNotifications`
export const getNotificationPageRoute = (id?: number) => `personal/userNotifications/notification`
export const getStudyPageRoute = (id?: string) => `study/${id}`
export const getStudyProfilePageRoute = (id?: string) => `study/:id/profile/${id}`
export const getPersonalApplicationPageRoute = () => `perApplication`
export const getNotificationListPageRoute = () => `notification/*`