import { TeamOutlined } from "@ant-design/icons";

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
        path: `/`,
        title: "Users",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navConfig = [...usersNavtree];

export default navConfig;
