import React from "react";
import { Layout } from "antd";
import { Scrollbars } from "react-custom-scrollbars-2";

const { Sider } = Layout;

const SideNavContent = (props) => {
  const { routeInfo, hideGroupTitle } = props;

  const sideNavTheme = useSelector((state) => state.theme.sideNavTheme);
  const menuItems = useMemo(() => getSideNavMenuItem(navigationConfig), []);

  return (
    <Menu
      mode="inline"
      theme={sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark"}
      style={{ height: "100%", borderRight: 0 }}
      defaultSelectedKeys={[routeInfo?.key]}
      defaultOpenKeys={setDefaultOpen(routeInfo?.key)}
      className={hideGroupTitle ? "hide-group-title" : ""}
      items={menuItems}
    />
  );
};

export const SideNav = ({ props }) => {
  return (
    <Sider className={`side-nav`}>
      <Scrollbars autoHide>
        <SideNavContent {...props} />
      </Scrollbars>
    </Sider>
  );
};

export default SideNav;
