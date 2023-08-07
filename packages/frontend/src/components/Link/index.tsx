import clsx from "clsx";
import * as React from "react";
import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

type NextComposedProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  NextLinkProps;

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  (props, ref) => {
    const { as, href, replace, scroll, passHref, shallow, prefetch, ...other } =
      props;

    return (
      <NextLink
        as={as}
        href={href}
        scroll={scroll}
        replace={replace}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
      >
        <a ref={ref} {...other} />
      </NextLink>
    );
  }
);

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type LinkProps = LinkPropsBase &
  NextComposedProps &
  Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link_(props: LinkProps) {
  const {
    href,
    naked,
    innerRef,
    className: classNameProps,
    activeClassName = "active",
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return (
      <NextComposed
        href={href}
        ref={innerRef}
        className={className}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      ref={innerRef}
      href={href as string}
      className={className}
      component={NextComposed}
      {...other}
    />
  );
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link_ {...props} innerRef={ref} />
);
