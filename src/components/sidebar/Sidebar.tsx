import SidebarItem from "./SidebarItem";
const navigation = [
  { name: "By Contract", href: "/contract" },
  { name: "By Wallet", href: "/wallet" },
];

const Sidebar = () => {
  return (
    <div className="page-sidebar">
      <div className="page-sidebar-inside">
        <ul className="menu-list">
          {navigation.map((page) => (
            <SidebarItem {...page} key={page.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
