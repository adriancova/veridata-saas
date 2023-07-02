import IconBrandGithub from '@tabler_icons/tsx/brand-github.tsx';
import IconGift from '@tabler_icons/tsx/gift.tsx';
import IconArrowsMove from '@tabler_icons/tsx/arrows-move.tsx';
import IconSourceCode from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/source-code.tsx';
import IconLayersSubtract from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/layers-subtract.tsx';

<IconBrandGithub class='w-6 h-6' />;
const About = () => {
  return (
    <section id='about' class='ud-features'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='ud-section-title'>
              <span>Veridata</span>
              <h2>Acerca de</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.1s'>
              <div class='ud-feature-icon'>
                <IconGift class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>Free and Open-Source</h3>
                <p class='ud-feature-desc'>
                  Lorem Ipsum is simply dummy text of the printing and industry.
                </p>
                <a href='javascript:void(0)' class='ud-feature-link'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.15s'>
              <div class='ud-feature-icon'>
                <IconArrowsMove class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>Multipurpose Template</h3>
                <p class='ud-feature-desc'>
                  Lorem Ipsum is simply dummy text of the printing and industry.
                </p>
                <a href='javascript:void(0)' class='ud-feature-link'>
                  Learn More
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
                <h3 class='ud-feature-title'>High-quality Design</h3>
                <p class='ud-feature-desc'>
                  Lorem Ipsum is simply dummy text of the printing and industry.
                </p>
                <a href='javascript:void(0)' class='ud-feature-link'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class='col-xl-3 col-lg-3 col-sm-6'>
            <div class='ud-single-feature wow fadeInUp' data-wow-delay='.25s'>
              <div class='ud-feature-icon'>
                <IconLayersSubtract class='w-8 h-8' />
              </div>
              <div class='ud-feature-content'>
                <h3 class='ud-feature-title'>All Essential Elements</h3>
                <p class='ud-feature-desc'>
                  Lorem Ipsum is simply dummy text of the printing and industry.
                </p>
                <a href='javascript:void(0)' class='ud-feature-link'>
                  Learn More
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
