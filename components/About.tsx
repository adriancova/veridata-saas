import IconBrandGithub from '@tabler_icons/tsx/brand-github.tsx';
import IconGift from '@tabler_icons/tsx/gift.tsx';
import IconArrowsMove from '@tabler_icons/tsx/arrows-move.tsx';
import IconSourceCode from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/source-code.tsx';
import IconLayersSubtract from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/layers-subtract.tsx';

<IconBrandGithub class='w-6 h-6' />;

interface AboutCardProps {
  title: string;
  description: string;
  Icon: any;
  linkText?: string;
  linkHref?: string;
}

const AboutCard = ({
  title,
  description,
  Icon,
  linkText,
  linkHref,
}: AboutCardProps) => {
  return (
    <div class='w-full sm:w-1/2 lg:w-1/4'>
      <div class='ud-single-feature wow fadeInUp' data-wow-delay='.25s'>
        <div class='ud-feature-icon'>
          <Icon class='w-8 h-8' />
        </div>
        <div class='ud-feature-content'>
          <h3 class='ud-feature-title'>{title}</h3>
          <p class='ud-feature-desc w-2/3'>{description}</p>
          {linkText && linkHref && (
            <a href={linkHref} class='ud-feature-link'>
              {linkHref}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const aboutData = [
    {
      title: 'Bueno, Bonito y Barato',
      description: `Contamos con los precios mas competitivos del mercado, alta
    disponibilidad en el servicio e integraciones faciles
    siguiendo el estandar OpenAPI.`,
      Icon: IconLayersSubtract,
    },
    {
      title: 'Calidad y confianza',
      description: `Veridata hace uso de tecnologias edge para garantizar una alta
      disponibilidad y tiempos de respuesta minimos sin importar
      desde donde se haga la llamada en el mundo.`,
      Icon: IconSourceCode,
    },
    {
      title: 'Planes a la medida, cobros seguros',
      description: `Tenemos una serie de planes pensados para cubrir las
      necesidades de todo tipo de clientes. Sientete con la
      confianza de que veridata no te pedira ni almacenara nunca tu
      informacion de pago, ya que usamos stripe para la
      administracion de suscripciones`,
      Icon: IconArrowsMove,
    },
    {
      title: 'Pruebalo gratis',
      description: `Sin necesidad de pagar una suscripcion puedes solo hacer tu
      cuenta y obtendras un apiKey con un numero pequeño de
      validaciones para que pruebes los servicios que te interesan.`,
      Icon: IconGift,
    },
  ];
  return (
    <section id='about' class='ud-features'>
      <div class='container mx-auto max-w-6xl'>
        <div class='ud-section-title'>
          <span>Veridata</span>
          <h2>Acerca de</h2>
          <p>
            El objetivo de veridata es ofrecer servicios api de primera para
            latinoamerica, cumpliendo con las 3B: bueno, bonito y barato.
          </p>
        </div>
        <div class='flex flex-wrap flex-row flex-auto'>
          {aboutData.map(a => {
            return <AboutCard {...a} />;
          })}
          <div class='w-full sm:w-1/2 lg:w-1/4'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.1s'>
              <div class='ud-feature-icon'>
                <IconGift class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'></h3>
                <p class='ud-feature-desc w-2/3 text-justify'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
