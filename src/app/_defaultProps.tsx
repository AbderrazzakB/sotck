import { FileSearchOutlined, ProjectOutlined } from "@ant-design/icons";

const defaultProps = {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "Dashboard",

        icon: <ProjectOutlined />,
      },
      {
        path: "/user/all",
        name: "Users",
        icon: <FileSearchOutlined />,
      },
      {
        path: "/material/all",
        name: "Material",
        icon: <FileSearchOutlined />,
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default defaultProps;
