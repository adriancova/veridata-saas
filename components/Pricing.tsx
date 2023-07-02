interface PricingCardProps {
  name: string;
  price: number;
  calls: number;
  classes?: string;
  popular?: boolean;
}
const PricingCard = (props: PricingCardProps) => {
  return (
    <div class='col-lg-4 col-md-6 col-sm-10'>
      <div
        class={`ud-single-pricing  wow fadeInUp ${props.classes}`}
        data-wow-delay='.15s'
      >
        {props.popular && <span class='ud-popular-tag'>POPULAR</span>}
        <div class='ud-pricing-header'>
          <h3>{props.name}</h3>
          <h4>$ {props.price}/mes (mxn)</h4>
        </div>
        <div class='ud-pricing-body'>
          <ul>
            <li>Incluye un total de {props.calls} api requests</li>
            <li>Costo por request de ${props.calls / props.price} centavos</li>
            <li>Puedes cancelar en cualquier momento</li>
          </ul>
        </div>
        <div class='ud-pricing-footer'>
          <a href='/account/manage' class='ud-main-btn ud-border-btn'>
            Suscribirse
          </a>
        </div>
      </div>
    </div>
  );
};

const pricing_plans = [
  { name: 'Desarrollador', price: 200, classes: 'first-item', calls: 1000 },
  {
    name: 'Startup',
    price: 1000,
    classes: 'active',
    calls: 6000,
  },
  { name: 'Business', price: 10000, classes: 'last-item', calls: 100000 },
];

const Pricing = () => {
  return (
    <section id='pricing' class='ud-pricing'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='ud-section-title mx-auto text-center'>
              <span>Precios</span>
              <h2>Nuestras suscripciones</h2>
              <p>
                Ofrecemos suscripciones a la medida administradas mediante
                stripe para mayor facilidad y tranquilidad. Veridata no almacena
                absolutamente ninguna informacion de pago.
              </p>
            </div>
          </div>
        </div>

        <div class='row g-0 align-items-center justify-content-center'>
          {pricing_plans.map(pp => (
            <PricingCard {...pp} />
          ))}
        </div>
        <div class='ud-section-title mx-auto text-center'>
          <span>RapidApi</span>
          <h2>Suscripcion mediante RapidApi</h2>
          <p>
            Si lo prefieres tenemos publicada el api en rapidapi aunque con un
            costo mayor en los planes, pero la plataforma nos permite ofrecer un
            plan base y adicionalmente un cobro por llamada extra que puede ser
            lo ideal en tu caso si ninguno de los planes se ajusta a tus
            necesidades.
          </p>
          <a href='/rapidapi'>Ver los planes en RapidApi</a>
        </div>
        <div class='ud-section-title mx-auto text-center'>
          <span>Enterprise</span>
          <h2>Suscripciones a la medida</h2>
          <p>
            Si requieres de un numero de llamadas mayor a las disponibles en el
            Business plan, porfavor manda un correo a contacto@veridata.lat para
            armar un plan de acuerdo a tus necesidades
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
