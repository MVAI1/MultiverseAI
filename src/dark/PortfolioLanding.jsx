import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';
import HeaderThree from '../component/header/HeaderThree';
import FooterTwo from '../component/footer/FooterTwo';
import { useCallback, useState } from 'react';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';
import BlogContent from '../elements/blog/BlogContent';
import Slider from 'react-slick';
import ModalVideo from 'react-modal-video'

// import CounterOne from '../elements/counters/CounterOne';
import Testimonial from '../elements/Testimonial';
import Goals from '../elements/Goals';
import Team from '../elements/Team';

const slideSlick = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  easing: 'fade',
  adaptiveHeight: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 7000,
  pauseOnHover: false,
};

const SlideList = [
  {
    textPosition: 'text-center',
    category: '',
    bgImage: 'bg_image--28',
    title: 'Multiverse AI',
    description:
      'AI-Empowered Digital Transition towards Sustainable Development.',
    buttonText: 'Read more',
    buttonLink: '',
  },
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--33',
    category: '',
    title: 'Better lives through livestock',
    description:
      'We work to improve food security and reduce poverty through research for better and more sustainable use of livestock',
    buttonText: 'Read more',
    buttonLink: '',
  },
  {
    textPosition: 'text-center',
    category: '',
    bgImage: 'bg_image--34',
    title: 'Precision Poultry Farming',
    description:
        "Enhancing poultry farming practices with advanced technology for greater efficiency and better animal welfare.",
    buttonText: 'Read more',
    buttonLink: '',
  },
  
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--35',
    category: '',
    title: 'Precision Aquaculture',
    description:
      'Innovating aquaculture techniques for optimized fish farming and sustainable aquatic resource management.',
    buttonText: 'Read more',
    buttonLink: '',
  }
];

const PortfolioLanding = () => {
  const [isOpen, setOpen] = useState(false)


  const PostList = [BlogContent[6], BlogContent[7], BlogContent[8]];
  return (
    <div>
      <Helmet pageTitle='Multiverse AI' />
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="MCPXN4jVnic" onClose={() => setOpen(false)} />
      <HeaderThree
        homeLink='/'
        headertransparent='header--transparent'
        logo='symbol-dark'
      />
      {/* Start Slider Area   */}
      <div
        className='slider-activation slider-creative-agency with-particles'
        id='home'
      >
        <div className='slider-wrapper'>
          <div className='slider-activation slider-startup'>
            <Slider className='rn-slick-dot dot-light' {...slideSlick}>
              {SlideList.map((value, index) => (
                // Start Single Slider
                <div
                  className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  {' '}
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ''}
                          {value.title ? (
                            <h1 className='title theme-gradient'>
                              {value.title}
                            </h1>
                          ) : (
                            ''
                          )}
                          {value.description ? (
                            <p className='description'>{value.description}</p>
                          ) : (
                            ''
                          )}
                          {value.buttonText ? ( value.bgImage=== 'bg_image--34') ? (  
                          <div onClick={()=> setOpen(true)} className='slide-btn'>
                              <a
                                href='#'
                                className='rn-button-style--2 btn-primary-color'
                              >
                                {value.buttonText}
                              </a>
                            </div>):(
                            <div  className='slide-btn'>
                              <a
                                className='rn-button-style--2 btn-primary-color'
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // End Single Slider
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* End Slider Area   */}

      
      {/* Start About Area */}
      {/* <div className='about-area ptb--120 bg_color--1' id='intervention'>
        <div className='about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='col-lg-5'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src='/assets/images/about/intervention-1.png'
                    alt='About Images'
                  />
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='about-inner inner'>
                  <div className='section-title'>
                    <h2 className='title'>Our latest intervention</h2>
                    <p className='description'>
                      Multiverse intervention to control fish diseases recent
                      outbreak , bloodscan & atbscan toolkits were decisive.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End About Area */}
      <div className='rn-testimonial-area bg_color--1 ptb--120' id='SDG'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
              <a
                href='https://sdgs.un.org/goals'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h2 className='title'>Sustainable Development Goals</h2>
              </a>
            </div>
          </div>
          <Goals />
        </div>
      </div>
      {/* Start Service Area  */}

      {/* End Service Area  */}

      {/* Start Research Area */}
      <div id='research' className='fix'>
        <div className='rn-blog-area ptb--120 bg_color--1 mb-dec--30'>
          <div className='container'>
            <div className='row align-items-end'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='section-title text-center'>
                  <h2>Research</h2>
                  <p>
                    One of most important goals of Multiverse AI is to
                    contribute in the research domain and promote AI and its use
                    to propose innovative and scientific solutions related to
                    Agrihealth and Computational Biology.
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt--60 mt_sm--40'>
              {PostList.map((value, i) => (
                <div className='col-lg-4 col-md-6 col-12' key={i}>
                  <div className='blog blog-style--1'>
                    <div className='thumbnail'>
                      <a
                        href={value.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img
                          className='w-100'
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt='Blog Images'
                        />
                      </a>
                    </div>
                    <div className='content'>
                      <p className='blogtype'>{value.category}</p>
                      <h4 className='title'>
                        <a
                          href={value.url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {value.title}
                        </a>
                      </h4>
                      <div className='blog-btn'>
                        <a className='rn-btn text-white' href={value.url}>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                  <a
                    className='rn-button-style--2 btn-solid'
                    href={`${process.env.PUBLIC_URL}/research`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span>More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Research Area */}

      {/* Start CounterUp Area */}
      {/* <div className='rn-counterup-area pt--140 p pb--110 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center'>
                  <h3 className='fontWeight500'>Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
      {/* End CounterUp Area */}

      {/* Start Team Area  */}
      { <div className='rn-team-area ptb--120 bg_color--5' id='team'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6'>
        <div className='section-title service-style--3 text-left mb--25 mb_sm--0 text-center'>
          <h2 className='title' >Meet the Team</h2>
        </div>
      </div>
    </div>
    <div className='row'>
      {<Team column='col-lg-3 col-md-6 col-sm-6 col-12' />}
    </div>
  </div>
</div>
 }
      {/* End Team Area  */}

      {/* Start expert Panel Area */}
      <div id='experts-panel' className='fix'>
        <div className='portfolio-area ptb--120 bg_color--5'>
          <div className='portfolio-sacousel-inner'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
                    <h2 className='title'>Experts Panel</h2>
                    <p>
                      Our experts bring together expertise in medical sciences,
                      artificial intelligence and different life sciences
                      industries.
                    </p>
                  </div>
                </div>
              </div>
              { <div className='row'>
                <PortfolioList
                  styevariation='text-center mt--40'
                  column='col-lg-4 col-md-6 col-sm-6 col-12'
                  item='6'
                />
              </div> }
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='view-more-btn mt--60 mt_sm--30 text-center'>
                    <a
                      className='rn-button-style--2 btn-solid'
                      href='https://docs.google.com/forms/d/e/1FAIpQLSdOFnBlw_M8cprPTYSEynFh3TKDujLCQOLvHK5J_5WqSv_V9g/viewform'
                    >
                      <span>Join Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End expert Panel Area */}

      {/* Start partners Area */}
      <div className='rn-testimonial-area bg_color--1 ptb--120' id='partners'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
              <h2 className='title'>Our Partners</h2>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
      {/* End partners Area */}

      {/* Start About Area */}
      <div className='about-area ptb--120 bg_color--1' id='about'>
        <div className='about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='col-lg-5'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src='/assets/images/about/about-45.jpg'
                    alt='About Images'
                  />
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='about-inner inner'>
                  <div className='section-title'>
                    <h2 className='title'>About Us</h2>
                    <p className='description'>
                      Multiverse AI is a polyvalent scientific platform
                      dedicated to helping veterinarians and husbandry
                      professionals in optimizing their workflows using AI
                      solutions. It is also a virtual workspace where
                      stakeholders and experts could interact with each other
                      and share experiences while promoting best practices in
                      both AgriHealth and AI ecosystems.
                    </p>
                  </div>
                  {/* <div className='row mt--30'>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>Who we are</h3>
                          <p>
                            There are many vtions of passages of Lorem Ipsum
                            available, but the majority have suffered.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>Who we are</h3>
                          <p>
                            There are many vtions of passages of Lorem Ipsum
                            available, but the majority have suffered.
                          </p>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start Contact Area */}
      <div id='contact' className='fix'>
        <div className='rn-contact-area ptb--120 bg_color--5'>
          <ContactThree
            contactImages='/assets/images/about/about-9.jpg'
            contactTitle='Contact Us'
          />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
