import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";

import SideNav from "components/layout-components/SideNav";
import Footer from "@/components/footer";
import navigationConfig from "configs/NavigationConfig";

import getRouteInfo from "@/utils/getRouteInfo";
import PageHeader from "@/components/pageHeader";
import HeaderNav from "@/components/headerNav";
import Loading from "@/components/loading";

const { Content } = Layout;

export const AppLayout = ({ children }) => {
  const location = useLocation();

  const currentRouteInfo = getRouteInfo(navigationConfig, location.pathname);

  return (
    <Layout>
      <HeaderNav />
      <Layout className="app-container">
        <SideNav routeInfo={currentRouteInfo} />
        <Layout className="app-layout">
          <div className={`app-content`}>
            <PageHeader
              display={currentRouteInfo?.breadcrumb}
              title={currentRouteInfo?.title}
            />
            <Content>
              <Suspense fallback={<Loading cover="content" />}>
                {children}
              </Suspense>
            </Content>
          </div>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default React.memo(AppLayout);
