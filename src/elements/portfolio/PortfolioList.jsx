import React, { Component } from "react";

import { FaFacebookF, FaLinkedinIn, FaTwitter ,FaResearchgate } from "react-icons/fa";


let TeamContent = [
  
  {
    images: 'raouf',
    title: 'Pr. Dhaoudi raouf (DMV)',
    designation: 'President of the National School of Veterinary Medicine of Sidi Thabet, Tunisia',
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
    images: 'wadii',
    title: 'Dr. Wadii Boulila ',
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
    images: 'malouk',
    title: 'Pr. Aymen Mamlouk (DMV)',
    designation: 'Professor of Microbiology, National School of Veterinary Medicine of Sidi Thabet, Tunisia.' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/aymen-mamlouk-9ba7603b/',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.linkedin.com/in/aymen-mamlouk-9ba7603b/',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  }
  ,
  {
    images: 'khaled',
    title: 'Pr. Khaled KABOUDI (DMV)',
    designation: ' Professor, Department of Poultry Management and Pathology, National School of Veterinary Medicine Medicine of Sidi Thabet, Tunisia.' ,
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/kaboudi-khaled-b5776475/',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.linkedin.com/in/kaboudi-khaled-b5776475/',
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
    title: 'Dr. Mohamed Jemaà (PhD) ',
    designation: 'Associate Professor & Senior research leader at Faculty of Medicine of Tunis, Tunisia' ,
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
    title: 'Dr. Mohamed Fethi Diouani (DMV, PhD)',
    designation: ' Senior research leader at  Pasteur Institute of Tunis, Tunisia',
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
    images: 'man',
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