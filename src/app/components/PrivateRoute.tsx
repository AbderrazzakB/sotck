import React from "react";
import {
  Redirect,
  Route,
  RouteChildrenProps,
  RouteProps,
} from "react-router-dom";
import { useTokenStore } from "../utils/useTokenStore";

interface Props extends RouteProps {
  children:
    | React.ReactNode
    | ((
        props: RouteChildrenProps<
          {
            [x: string]: string | undefined;
          },
          unknown
        >
      ) => React.ReactNode);
}

export function PrivateRoute({ children, ...rest }: Props) {
  const hasTokens = useTokenStore((s) => !!s.accessToken);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasTokens ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
