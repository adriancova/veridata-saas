import { NAV_STYLES, SITE_BAR_STYLES } from '@/utils/constants.ts';
import Logo from './Logo.tsx';

function Footer() {
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
  ];
  return (
    <footer
      class={`${SITE_BAR_STYLES} flex-col sm:flex-row mt-8 flex bg-blue-600 text-white`}
    >
      <Logo />

      <div class='flex flex-col sm:flex-row items-center justify-center'>
        <nav class={NAV_STYLES}>
          {footerNavItems.map(i => (
            <a href={i.href} class='text-white'>
              {i.inner}
            </a>
          ))}
        </nav>
        <a href='https://fresh.deno.dev' class='sm:ml-4'>
          <img
            width='197'
            height='37'
            src='https://fresh.deno.dev/fresh-badge.svg'
            alt='Made with Fresh'
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
