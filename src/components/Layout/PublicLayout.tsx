import { NavLink, NavLinkProps, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <h1>Public Layout</h1>
      <NavLinkItem to="/" title="Home" />
      <NavLinkItem to="/products" title="Products" />
      <NavLinkItem to="/products/create" title="create" />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

type NavLinkItemProps = NavLinkProps & {
  title: string;
};

function NavLinkItem({ title, ...rest }: NavLinkItemProps) {
  return (
    <NavLink
      {...rest}
      className={({ isActive }) => (isActive ? " text-red-600" : "")}
    >
      {title}
    </NavLink>
  );
}