import { markRaw } from "vue";
import UserIcon from "@/components/icons/UserIcon";
import NoteSearchIcon from "@/components/icons/NoteSearchIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import DocumentIcon from "@/components/icons/DocumentIcon";
// import SuitcaseIcon from "@/components/icons/SuitcaseIcon";
// import NoteEditIcon from "@/components/icons/NoteEditIcon";

export const userMenuItems = [
    { id: "1", label: "Мой профиль", link: "/cabinet", icon: markRaw(UserIcon) },
    { id: "2", label: "Программы", link: "/cabinet/programs", icon: markRaw(NoteSearchIcon) },
    { id: "3", label: "Мои избранные", link: "/cabinet/wishlist", icon: markRaw(HeartIcon) },
    { id: "4", label: "Мои заявки", link: "/cabinet/applications", icon: markRaw(DocumentIcon) },
    // { id: "5", label: "Мои оплаты", link: "/cabinet", icon: markRaw(SuitcaseIcon) },
    // { id: "6", label: "Таски", link: "/cabinet", icon: markRaw(NoteEditIcon) },
];
