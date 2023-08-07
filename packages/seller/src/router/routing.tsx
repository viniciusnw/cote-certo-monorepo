import * as React from "react";
import flowRight from "lodash.flowright";
import { Outlet } from "react-router-dom";
import { Suspensable, SuspensableComponent } from "./Suspensable";

type RoutingOptions<P> = {
  suspense?: boolean;
  middlewares?: Array<
    (component: React.ComponentType<P>) => React.ComponentType<P>
  >;
};

type RoutingProps = {
  path: string;
  caseSensitive?: boolean;
  children?: React.ReactNode;
};

export function routing<P extends RoutingProps>(
  component: SuspensableComponent,
  options?: RoutingOptions<P>
) {
  const Routing: React.FC<P> = (props) => {
    return (
      <Suspensable suspense={options?.suspense} component={component}>
        <Outlet />
      </Suspensable>
    );
  };

  return flowRight(options?.middlewares || [])(Routing);
}
