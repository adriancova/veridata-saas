const Hero = () => {
  return (
    <section class='ud-hero' id='home'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='ud-hero-content wow fadeInUp' data-wow-delay='.2s'>
              <h1 class='ud-hero-title'>
                Validacion de datos confiable, rapida y economica
              </h1>
              <p class='ud-hero-desc'>
                Veridata ofrece una serie de APIs para validacion de datos de
                identidad mas comunes en lationamerica, por ejemplo INE (MEX) o
                Registraudria (COL).
              </p>
              <ul class='ud-hero-buttons'>
                <li>
                  <a
                    href='/account'
                    rel='nofollow noopener'
                    target='_blank'
                    class='ud-main-btn ud-white-btn'
                  >
                    Pruebalo ahora
                  </a>
                </li>
                <li>
                  <a
                    href='/docs'
                    rel='nofollow noopener'
                    target='_blank'
                    class='ud-main-btn ud-link-btn'
                  >
                    Documentacion
                  </a>
                </li>
              </ul>
            </div>
            <div
              class='ud-hero-brands-wrapper wow fadeInUp'
              data-wow-delay='.3s'
            >
              <img class='mx-auto' src='/images/hero/brand.svg' alt='brand' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
