import NavbarItem from './NavbarItem';

const MobileMenu = () => {
  return (
    <nav>
      <h1 className='text-gray-300 m-10 text-center text-3xl'>RagData</h1>
      <div className='flex flex-col items-center mt-20 gap-10'>
        <NavbarItem title='Item' />
        <NavbarItem title='Monster' />
        <NavbarItem title='Map' />
      </div>
    </nav>
  );
};

export default MobileMenu;
