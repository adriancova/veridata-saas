import IconMailbox from '@tabler_icons/tsx/mailbox.tsx';
import IconFileDollar from '@tabler_icons/tsx/file-dollar.tsx';

const Contact = () => {
  return (
    <section id='contact' class='ud-contact'>
      <div class='container'>
        <div class='row align-items-center'>
          <div class='col-xl-8 col-lg-7'>
            <div class='ud-contact-content-wrapper'>
              <div class='ud-contact-title'>
                <span>CONTACT US</span>
                <h2>
                  Let’s talk about <br />
                  Love to hear from you!
                </h2>
              </div>
              <div class='ud-contact-info-wrapper'>
                <div class='ud-single-info'>
                  <div class='ud-info-icon'>
                    <IconFileDollar class='w-8 h-8' />
                  </div>
                  <div class='ud-info-meta'>
                    <h5>Issues with payments?</h5>
                    <p>
                      Payments are processed by stripe or by rapidapi if you
                      prefer that option, please raise a ticket if you're having
                      an issue
                    </p>
                  </div>
                </div>
                <div class='ud-single-info'>
                  <div class='ud-info-icon'>
                    <IconMailbox class='w-8 h-8' />
                  </div>
                  <div class='ud-info-meta'>
                    <h5>Puedes mandar un correo a</h5>
                    <p>contact@veridata.lat</p>
                    <p>admin@veridata.lat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-xl-4 col-lg-5'>
            <div
              class='ud-contact-form-wrapper wow fadeInUp'
              data-wow-delay='.2s'
            >
              <h3 class='ud-contact-form-title'>Send us a Message</h3>
              <form class='ud-contact-form'>
                <div class='ud-form-group'>
                  <label for='fullName'>Full Name*</label>
                  <input
                    type='text'
                    name='fullName'
                    placeholder='Adam Gelius'
                  />
                </div>
                <div class='ud-form-group'>
                  <label for='email'>Email*</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='example@yourmail.com'
                  />
                </div>
                <div class='ud-form-group'>
                  <label for='phone'>Phone*</label>
                  <input
                    type='text'
                    name='phone'
                    placeholder='+885 1254 5211 552'
                  />
                </div>
                <div class='ud-form-group'>
                  <label for='message'>Message*</label>
                  <textarea
                    name='message'
                    rows={1}
                    placeholder='type your message here'
                  ></textarea>
                </div>
                <div class='ud-form-group mb-0'>
                  <button type='submit' class='ud-main-btn'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
