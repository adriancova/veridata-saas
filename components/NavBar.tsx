import Logo from './Logo.tsx';

interface NavItemProps {
  label: string;
  href: string;
  class?: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <li class={`nav-item ${props.class ?? ''}`}>
      <a class='ud-menu-scroll' href={props.href}>
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
      label: 'Home',
      class: 'active',
    },
    {
      href: '/#about',
      label: 'About',
    },
    {
      href: '/#pricing',
      label: 'Pricing',
    },
    {
      href: '/#contact',
      label: 'Contact',
    },
  ];
  return (
    <header class='ud-header'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-12'>
            <nav class='navbar navbar-expand-lg'>
              <Logo />
              <button class='navbar-toggler'>
                <span class='toggler-icon'> </span>
                <span class='toggler-icon'> </span>
                <span class='toggler-icon'> </span>
              </button>

              <div class='navbar-collapse'>
                <ul id='nav' class='navbar-nav mx-auto'>
                  {headerNavItems.map(i => (
                    <NavItem {...i} />
                  ))}
                </ul>
              </div>

              {props.session ? (
                <div>session - {props.session}</div>
              ) : (
                <div class='navbar-btn d-none d-sm-inline-block'>
                  <a class='ud-main-btn ud-white-btn' href='/account'>
                    Sign In
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
