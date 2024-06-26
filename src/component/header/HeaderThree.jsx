import React, { Component } from "react";
// import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'
import { Link } from 'react-router-dom';

const SocialShare = [
    // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    // {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class HeaderThree extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-IA.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }
        
        return (
          <header
            className={`header-area header-style-two header--fixed ${color}`}
          >
            <div className='header-wrapper'>
              <div className='header-left d-flex align-items-center'>
                <div className='logo'>
                  <a href={this.props.homeLink}>{logoUrl}</a>
                </div>
                <nav className='mainmenunav d-lg-block ml--50'>
                  <Scrollspy
                    className='mainmenu'
                    items={[
                      'home',
                      'intervention',
                      'models',
                      'research',
                      // 'team',
                      'experts-panel',
                      'partners',
                      'ressources',
                      'about',
                      'contact',
                    ]}
                    currentClassName='is-current'
                    offset={-200}
                  >
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/#home`}>Home</a>
                    </li>
                
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/models`}>Our Products</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/#research`}>
                        Research
                      </a>
                    </li>
                    { <li>
                      <a href={`${process.env.PUBLIC_URL}/#team`}>Team</a>
                    </li> }
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/#experts-panel`}>
                        Experts Panel
                      </a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/#partners`}>
                        Partners
                      </a>
                    </li>
                    <li className='has-droupdown'>
                      <Link>Ressources</Link>
                      <ul className='submenu'>
                        {/* <li>
                          <Link to='/Blog'>Blog</Link>
                        </li> */}
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/events`}>
                            Events{' '}
                          </Link>
                        </li>
                        <li>
                          <Link to='/news'>News</Link>
                        </li>
                        <li>
                          <Link to='/docs'>Models Documentation</Link>
                        </li>
                        {/* <li>
                          <Link to='/Tools'>Tools</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/#about`}>About</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/#contact`}>Contact</a>
                    </li>
                  </Scrollspy>
                </nav>
              </div>
              <div className='header-right'>
                <div className='social-share-inner'>
                  <ul className='social-share social-style--2 color-black d-flex justify-content-start liststyle'>
                    {SocialShare.map((val, i) => (
                      <li key={i}>
                        <a href={`${val.link}`}>{val.Social}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className='header-btn'>
                  <a className='rn-btn' href='https://bloodscan.tn'>
                    <span>Blood Scan</span>
                  </a>
                </div> */}
                {/* Start Humberger Menu  */}
                <div className='humberger-menu d-block d-lg-none pl--20'>
                  <span
                    onClick={this.menuTrigger}
                    className='menutrigger text-white'
                  >
                    <FiMenu />
                  </span>
                </div>
                {/* End Humberger Menu  */}
                <div className='close-menu d-block d-lg-none'>
                  <span
                    onClick={this.CLoseMenuTrigger}
                    className='closeTrigger'
                  >
                    <FiX />
                  </span>
                </div>
              </div>
            </div>
          </header>
        );
    }
}
export default HeaderThree;