import { useSignal } from '@preact/signals';

const Tooltip = ({ text, children }: { text: string; children: any }) => {
  const showTooltip = useSignal(true);

  const handleMouseEnter = () => {
    showTooltip.value = true;
  };

  const handleMouseLeave = () => {
    showTooltip.value = false;
  };

  return (
    <div
      class='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip.value && (
        <div class='absolute inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-90 tooltip dark:bg-gray-700'>
          {text}
        </div>
      )}
    </div>
  );
};

const Brands = () => {
  return (
    <div
      class='ud-hero-brands-wrapper wow fadeInUp flex flex-row justify-center items-center gap-6 pb-6'
      data-wow-delay='.3s'
    >
      {/* <Tooltip text='API powered by Deno'>
        <img class='max-h-16' src='/images/hero/deno.svg' alt='deno' />
      </Tooltip> */}

      <img class='max-h-16' src='/images/hero/deno.svg' alt='deno' />
      <img class='max-h-10' src='/images/hero/fresh.svg' alt='fresh' />
      <img class='max-h-10' src='/images/hero/tailwind.svg' alt='tailwind' />
    </div>
  );
};

export default Brands;
