import React, { Component } from "react";

import { FaFacebookF, FaLinkedinIn, FaTwitter ,FaResearchgate } from "react-icons/fa";


let TeamContent = [
  
  {
    images: 'boutheina',
    title: 'DVM Boutheina Mardassi ',
    designation: 'Doctor of Veterinary Medicine, Ph.D at PASTEURTN | Vaccinology and Biotechnology Expert',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '#',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'wadii',
    title: 'Dr Wadii Boulila ',
    designation: 'Associate Professor of Computer Science & Senior Researcher, Prince Sultan University, Saudi Arabia',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '#',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'saadi',
    title: 'DMV Ismail Saadi ',
    designation: 'Member of Board of Directors SM; Survey Officer IFS Food, BRCGS Food and FSSC 22000; Market Director ProCert Maghreb; Lead Auditor & Lead Tutor ' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Ichrak-Bannour',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
,
  {
    images: 'jem',
    title: 'Dr Mohamed Jemaà ',
    designation: 'Assistant Professor & Scientist and Cancer Researcher FMT - FST Tunis, Tunisia' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/mohamed-jemaa-24437480/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=tn',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://scholar.google.fr/citations?user=vRpqf60AAAAJ&hl=fr',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  {
    images: 'fethi',
    title: 'DVM Mohamed Fethi Diouani',
    designation: 'Major Veterinary Health Physician at the Pasteur Institute in Tunis',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '#',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  {
    images: 'raouf',
    title: 'DVM Raouf Dhaouadi',
    designation: 'President of ENMV & Doctor of Veterinary Medicine',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '#',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  {
    images: 'samii',
    title: 'Dr. Sami Ameur',
    designation: 'Associate Professor | Biosensors & Microelectronics Expert at School of Agriculture Tunisia',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '#',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  {
    images: 'farah',
    title: 'Dr Farah Azouzi ',
    designation: 'Assistant Professor in Medical Microbiology,  Ibn El Jazzar Medical Faculty of Sousse' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/azouzi-farah-68a76581/?locale=en_US',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Farah-Azouzi-2',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'bench',
    title: 'Dr Mohamed Hedi Ben Cheikh ',
    designation: 'Pharmacist & Analytical Chemist' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/mohamed-hedi-ben-cheikh-b39a0228/?originalSubdomain=tn',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'mahjoub',
    title: 'Dr Marouane Mahjoub  ',
    designation: 'Associate Professor in cardiology at University Hospital Monastir Tunisia' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/marouane-mahjoub-6777014/?originalSubdomain=tn',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: '',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'ines',
    title: 'Dr Ines Bartegi ',
    designation: 'Doctor of Medicine - Infectious diseases at Hopital Fattouma bourguiba, Monastir-Tunisia' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/ines-bartegi-b7b838208/?originalSubdomain=tn',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.endocrine-abstracts.org/ea/0090/ea0090p645',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'ich',
    title: 'Dr Ichrak Bannour ',
    designation: 'Assistant Professor of  Immunology-  University of Monastir | UTM · Department of Biology ' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Ichrak-Bannour',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  
];


class PortfolioList extends Component{
    render(){
        const {column} = this.props;
        return (
          <React.Fragment>
            {TeamContent.map((value, i) => (
              <div className={`${column}`} key={i}>
                <div className='expert'> 
                <div className='team'>
                    <img
                      src={`/assets/images/team/${value.images}.jpeg`}
                      alt='Blog Images'
                    />
                  </div>
                  <div className='content'>
                    <h4 className='title'>{value.title}</h4>
                    <p className='designation'>{value.designation}</p>
                  </div>
                  <ul className='social-icon'>
                    {value.socialNetwork.map((social, index) => (
                      <li key={index}>
                        <a href={`${social.url}`}>{social.icon}</a>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
            ))}
          </React.Fragment>
        );
    }
}
export default PortfolioList;