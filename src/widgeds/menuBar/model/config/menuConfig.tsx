
import testIcon from "shared/assets/icons/test.svg"

export const menuConfig = [
    {
        to: "personal",
        label: `Shaxsiy ma’lumotlar`,
        icon: <i className="fa-solid fa-user-large"/>,
        // roles: [ROLES.admin , ROLES.organization_admin]
    },
    {
        to: "perApplication",
        label: `Mening arizalarim`,
        icon: <i className="fa-solid fa-file-signature"/>,
        // roles: [ROLES.admin , ROLES.organization_admin]
    },
    {
        to: "study/1",
        label: `Tashkilotlar`,
        icon: <i className="fa-solid fa-book-open"/>,
        // roles: [ROLES.admin , ROLES.organization_admin]
    },
    {
        to: "notification",
        label: "Bildirishnomalar",
        icon: <i className="fa-solid fa-envelope"/>,
        // roles: [ROLES.admin , ROLES.organization_admin]
    },
    {
        to: "onlineTest",
        label: "Test topshirish",
        img: testIcon
    }

]
