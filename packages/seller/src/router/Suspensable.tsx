import * as React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
    </div>
  );
};

export type SuspensableComponent<C = React.ComponentType<{}>> =
  | C
  | Promise<{ default: C }>;

type SuspensableProps = {
  component: SuspensableComponent;
  suspense?: boolean;
  children: JSX.Element;
};

export function Suspensable({
  children,
  suspense,
  component,
}: SuspensableProps) {
  const Component =
    component instanceof Promise ? React.lazy(() => component) : component;

  if (suspense) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component />
          {children}
        </ErrorBoundary>
      </React.Suspense>
    );
  }

  return (
    <>
      <Component />
      {children}
    </>
  );
}

Suspensable.defaultProps = {
  suspense: true,
};
