import {
  TeamOutlined,
  UserSwitchOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";

const usersNavtree = [
  {
    key: "users",
    path: `/users`,
    title: "User Management",
    icon: TeamOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    roles:['admin','user'],
    submenu: [
      {
        key: "users",
        path: `/users`,
        title: "Users",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
        roles:['admin'],
      },
      {
        key: "agency",
        path: `/users/agency`,
        title: "Agency",
        icon: UserSwitchOutlined,
        breadcrumb: true,
        submenu: [],
        roles:['admin','user'],
      },
    ],
  },
];

const ordersNavtree = [
  {
    key: "orders",
    path: `/orders`,
    title: "Order Management",
    icon: CodeSandboxOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "orders",
        path: `/orders`,
        title: "Orders",
        icon: CodeSandboxOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const customerNavtree = [
  {
    key: "customer",
    path: `/customers`,
    title: "Customer Management",
    icon: CodeSandboxOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "customers",
        path: `/customers`,
        title: "Customers",
        icon: CodeSandboxOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const flightNavtree = [
  {
    key: "flight",
    path: `/flights`,
    title: "Flights Management",
    icon: CodeSandboxOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "flights",
        path: `/flights`,
        title: "Flights",
        icon: CodeSandboxOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const trackingNavtree = [
  {
    key: "tracking",
    path: `/trackings`,
    title: "Tracking Management",
    icon: CodeSandboxOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "tracking",
        path: `/trackings`,
        title: "Tracking",
        icon: CodeSandboxOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];


const navConfig = [
  ...ordersNavtree,
  ...customerNavtree,
  ...flightNavtree,
  ...trackingNavtree,
  ...usersNavtree,
];

export default navConfig;
