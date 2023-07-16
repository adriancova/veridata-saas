import Logo from '@/components/Logo.tsx';
import { useSignal } from '@preact/signals';

interface NavItemProps {
  label: string;
  href: string;
  class?: string;
  onClick?: () => void;
}

const NavItem = (props: NavItemProps) => {
  return (
    <li class={`nav-item ${props.class ?? ''}`}>
      <a class='ud-menu-scroll' href={props.href} onClick={props.onClick}>
        {props.label}
      </a>
    </li>
  );
};

interface NavBarProps {
  session?: string;
}

const Navbar = (props: NavBarProps) => {
  const headerNavItems = [
    {
      href: '/#',
      label: 'Inicio',
      class: 'active',
    },
    {
      href: '/#about',
      label: 'Acerca de',
    },
    {
      href: '/#pricing',
      label: 'Precios',
    },
    {
      href: '/#contact',
      label: 'Contacto',
    },
  ];

  const isCollapsed = useSignal(true);
  const isActive = useSignal(false);

  const toggleMenu = () => {
    isCollapsed.value = !isCollapsed.value;
    isActive.value = !isActive.value;
  };

  const toggleOffMenu = () => {
    isCollapsed.value = true;
    isActive.value = false;
  };

  return (
    <header class='ud-header'>
      <div class='container mx-auto'>
        <nav class='flex justify-space-between sm:justify-start items-center flex-row flex-wrap relative'>
          <Logo />
          <div
            class={`navbar-collapse flex grow hidden sm:flex ${
              isCollapsed.value ? '' : 'show'
            }`}
          >
            <ul id='nav' class='flex flex-col md:flex-row navbar-nav mx-auto'>
              {headerNavItems.map(i => (
                <NavItem {...i} onClick={toggleOffMenu} />
              ))}
            </ul>
          </div>

          {props.session ? (
            <div>session - {props.session}</div>
          ) : (
            <div class='navbar-btn d-none d-sm-inline-block hidden sm:block ml-auto'>
              <a class='ud-main-btn ud-white-btn' href='/account'>
                Ingresar
              </a>
            </div>
          )}

          <button
            class={`navbar-toggler ml-4 md:hidden ${
              isActive.value ? 'active' : ''
            }`}
            onClick={toggleMenu}
          >
            <span class='toggler-icon'> </span>
            <span class='toggler-icon'> </span>
            <span class='toggler-icon'> </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
