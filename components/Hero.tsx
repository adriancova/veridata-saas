const Hero = () => {
  return (
    <section class='ud-hero' id='about'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='ud-hero-content wow fadeInUp' data-wow-delay='.2s'>
              <h1 class='ud-hero-title'>
                Validacion de datos KYC de manera rapida y confiable
              </h1>
              <p class='ud-hero-desc'>
                Multidisciplinary Web Template Built with Your Favourite
                Technology - HTML Bootstrap, Tailwind and React NextJS.
              </p>
              <ul class='ud-hero-buttons'>
                <li>
                  <a
                    href='https://links.uideck.com/play-bootstrap-download'
                    rel='nofollow noopener'
                    target='_blank'
                    class='ud-main-btn ud-white-btn'
                  >
                    Pruebalo ahora
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/uideck/play-bootstrap'
                    rel='nofollow noopener'
                    target='_blank'
                    class='ud-main-btn ud-link-btn'
                  >
                    Learn More <i class='lni lni-arrow-right'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class='ud-hero-brands-wrapper wow fadeInUp'
              data-wow-delay='.3s'
            >
              <img
                class='mx-auto'
                src='assets/images/hero/brand.svg'
                alt='brand'
              />
            </div>
            {/* <div class='ud-hero-image wow fadeInUp' data-wow-delay='.25s'>
              <img src='assets/images/hero/hero-image.svg' alt='hero-image' />
              <img
                src='assets/images/hero/dotted-shape.svg'
                alt='shape'
                class='shape shape-1'
              />
              <img
                src='assets/images/hero/dotted-shape.svg'
                alt='shape'
                class='shape shape-2'
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
