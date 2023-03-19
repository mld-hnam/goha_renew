import React, { useMemo } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { Scrollbars } from "react-custom-scrollbars-2";
import navConfig from "@/configs/navConfig";
import Icon from "@/components/icon";
import { useAuth } from "@/hooks/useAuth";

const { Sider } = Layout;

const setDefaultOpen = (key) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};

const MenuItem = ({ title, icon, path, roles }) => {
  return (
    <>
      {icon && <Icon type={icon} />}
      <span>{title}</span>
      {path && <Link to={path} />}
    </>
  );
};

const getSideNavMenuItem = (navItem, role) => {
  return navItem.map((nav) => {
    if (nav.roles && !nav.roles.includes(role)) return false;
    return {
      key: nav.key,
      label: (
        <MenuItem
          roles={nav.roles || []}
          title={nav.title}
          {...(nav.isGroupTitle ? {} : { path: nav.path, icon: nav.icon })}
        />
      ),
      ...(nav.isGroupTitle ? { type: "group" } : {}),
      ...(nav.submenu.length > 0
        ? { children: getSideNavMenuItem(nav.submenu, role) }
        : {}),
    };
  });
};

const SideNavContent = (props) => {
  const { routeInfo, hideGroupTitle } = props;
  const { profile } = useAuth();
  const menuItems = useMemo(
    () => getSideNavMenuItem(navConfig, profile.role),
    [profile]
  );

  return (
    <Menu
      mode="inline"
      theme={"light"}
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
    <Sider width={250} className={`side-nav`}>
      <Scrollbars>
        <SideNavContent {...props} />
      </Scrollbars>
    </Sider>
  );
};

export default SideNav;
