interface NavbarItemProps {
  title: string;
}
const NavbarItem: React.FC<NavbarItemProps> = ({ title }) => {
  return <div className="text-white text-2xl hover:text-gray-300 hover:scale-110 transition delay-50 cursor-pointer">{title}</div>;
};

export default NavbarItem;
