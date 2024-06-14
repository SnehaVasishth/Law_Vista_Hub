import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "My Status",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscVm",
  },
  {
    id: 3,
    name: "Register Yourself",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 4,
    name: "Booked Appointment",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 5,
    name: "Pending Appointment",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 6,
    name: "Schedule Date",
    path: "/dashboard/schedule",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },

];
