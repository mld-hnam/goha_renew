import { TeamOutlined } from "@ant-design/icons";

const usersNavtree = [
  {
    key: "users",
    path: `/users`,
    title: "Users",
    icon: <TeamOutlined />,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "users",
        path: `/`,
        title: "User Management",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...usersNavtree];

export default navigationConfig;
