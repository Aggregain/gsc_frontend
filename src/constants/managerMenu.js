import { markRaw } from "vue";
import UserIcon from "@/components/icons/UserIcon";
import DocumentIcon from "@/components/icons/DocumentIcon";

export const managerMenuItems = [
    { id: "1", label: "Мой профиль", link: "/manager", icon: markRaw(UserIcon) },
    { id: "4", label: "Мои заявки", link: "/manager/applications", icon: markRaw(DocumentIcon) },
];
