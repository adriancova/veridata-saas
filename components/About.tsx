import IconBrandGithub from '@tabler_icons/tsx/brand-github.tsx';
import IconGift from '@tabler_icons/tsx/gift.tsx';
import IconArrowsMove from '@tabler_icons/tsx/arrows-move.tsx';
import IconSourceCode from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/source-code.tsx';
import IconLayersSubtract from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/layers-subtract.tsx';

<IconBrandGithub class='w-6 h-6' />;
const About = () => {
  return (
    <section id='about' class='ud-features'>
      <div class='container mx-auto max-w-6xl'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='ud-section-title'>
              <span>Veridata</span>
              <h2>Acerca de</h2>
              <p>
                El objetivo de veridata es ofrecer servicios api de primera para
                latinoamerica, cumpliendo con las 3B: bueno, bonito y barato.
              </p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.25s'>
              <div class='ud-feature-icon'>
                <IconLayersSubtract class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>Bueno, Bonito y Barato</h3>
                <p class='ud-feature-desc'>
                  Contamos con los precios mas competitivos del mercado, alta
                  disponibilidad en el servicio e integraciones faciles
                  siguiendo el estandar OpenAPI.
                </p>
              </div>
            </div>
          </div>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.15s'>
              <div class='ud-feature-icon'>
                <IconSourceCode class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>Calidad y confianza</h3>
                <p class='ud-feature-desc'>
                  Veridata hace uso de tecnologias edge para garantizar una alta
                  disponibilidad y tiempos de respuesta minimos sin importar
                  desde donde se haga la llamada en el mundo.
                </p>
                <a href='/account' class='ud-feature-link'>
                  Pruebalo tu mismo
                </a>
              </div>
            </div>
          </div>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.2s'>
              <div class='ud-feature-icon'>
                <IconSourceCode class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>
                  Planes a la medida, cobros seguros
                </h3>
                <p class='ud-feature-desc'>
                  Tenemos una serie de planes pensados para cubrir las
                  necesidades de todo tipo de clientes. Sientete con la
                  confianza de que veridata no te pedira ni almacenara nunca tu
                  informacion de pago, ya que usamos stripe para la
                  administracion de suscripciones
                </p>
                <p>
                  O si lo prefieres tambien se encuentra nuestra api en
                  <a href='/rapidapi' class='ud-feature-link'>
                    RapidApi
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.1s'>
              <div class='ud-feature-icon'>
                <IconGift class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>Pruebalo gratis</h3>
                <p class='ud-feature-desc'>
                  Sin necesidad de pagar una suscripcion puedes solo hacer tu
                  cuenta y obtendras un apiKey con un numero pequeño de
                  validaciones para que pruebes los servicios que te interesan.
                </p>
                <a href='/account' class='ud-feature-link'>
                  Crear una cuenta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
