import { TeamOutlined, UserSwitchOutlined } from "@ant-design/icons";

const usersNavtree = [
  {
    key: "users",
    path: `/users`,
    title: "User Management",
    icon: TeamOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "users",
        path: `/users`,
        title: "Users",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "agency",
        path: `/users/agency`,
        title: "Agency",
        icon: UserSwitchOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navConfig = [...usersNavtree];

export default navConfig;
