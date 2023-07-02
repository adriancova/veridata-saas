import type { JSX, ComponentChild } from 'preact';
import { SITE_WIDTH_STYLES } from '@/utils/constants.ts';
import Logo from './Logo.tsx';

interface NavProps extends JSX.HTMLAttributes<HTMLElement> {
  active?: string;
  items: (JSX.HTMLAttributes<HTMLAnchorElement> & { inner: ComponentChild })[];
}

function Nav(props: NavProps) {
  return (
    <nav>
      <ul
        class={`flex gap-x-8 gap-y-2 items-center justify-between h-full ${
          props.class ?? ''
        }`}
      >
        {props.items.map(item => (
          <li>
            <a class='text-white' href={item.href}>
              {item.inner}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
  const footerNavItems = [
    {
      inner: 'Docs',
      href: '/docs',
    },
    {
      href: '/rapidapi',
      inner: 'Rapidapi',
    },
    {
      href: 'https://github.com/adriancova/veridata-saas',
      inner: 'Source code',
    },
    {
      href: 'https://fresh.deno.dev',
      inner: (
        <img
          width='197'
          height='37'
          src='https://fresh.deno.dev/fresh-badge.svg'
          alt='Made with Fresh'
        />
      ),
    },
  ];
  return (
    <footer
      {...props}
      class={`flex bg-blue-600 text-white flex-col md:flex-row p-4 justify-between gap-y-4 ${SITE_WIDTH_STYLES} ${
        props.class ?? ''
      } `}
    >
      <Logo />
      <Nav items={footerNavItems} />
    </footer>
  );
}
export default Footer;
