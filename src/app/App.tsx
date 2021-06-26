import { BrowserRouter } from "react-router-dom";

import enUs from "antd/lib/locale/en_US";

import "@ant-design/pro-form/dist/form.css";
import "@ant-design/pro-table/dist/table.css";
import "@ant-design/pro-layout/dist/layout.css";
import "antd/dist/antd.css";

import React from "react";
import Layout from "./Layout";
import { ConfigProvider } from "antd";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider locale={enUs}>
        <Layout />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
