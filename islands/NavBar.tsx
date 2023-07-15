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
      <div class='container'>
        <div class='row'>
          <div class='col-lg-12'>
            <nav class='navbar navbar-expand-lg'>
              <Logo />
              <div class={`navbar-collapse ${isCollapsed.value ? '' : 'show'}`}>
                <ul id='nav' class='navbar-nav mx-auto'>
                  {headerNavItems.map(i => (
                    <NavItem {...i} onClick={toggleOffMenu} />
                  ))}
                </ul>
              </div>
              <button
                class={`navbar-toggler ${isActive.value ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <span class='toggler-icon'> </span>
                <span class='toggler-icon'> </span>
                <span class='toggler-icon'> </span>
              </button>

              {props.session ? (
                <div>session - {props.session}</div>
              ) : (
                <div class='navbar-btn d-none d-sm-inline-block'>
                  <a class='ud-main-btn ud-white-btn' href='/account'>
                    Ingresar
                  </a>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
