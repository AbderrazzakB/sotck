import React from "react";
import ProLayout from "@ant-design/pro-layout";
import { Link, useLocation } from "react-router-dom";
import _defaultProps from "./_defaultProps";
import Routes from "./Routes";
import { useTokenStore } from "./utils/useTokenStore";

const Layout = () => {
  const { pathname } = useLocation();
  const isAuth = !!useTokenStore().accessToken;

  return (
    <div className="h-screen">
      <ProLayout
        {..._defaultProps}
        location={{ pathname }}
        title="MA STOCK"
        logo="/favicon.ico"
        navTheme="light"
        rightContentRender={() => <div>Me</div>}
        menuItemRender={(item, dom) => {
          return <Link to={item.path || "/"}>{dom}</Link>;
        }}
        fixSiderbar
        {...(!isAuth ? { menuRender: false } : {})}
      >
        <Routes />
      </ProLayout>
    </div>
  );
};

export default Layout;
