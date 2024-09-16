import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter,FaResearchgate } from "react-icons/fa";

let TeamContent = [
 
  {
    images: 'amin',
    title: 'Dr. Amine Mosbah (DMV, PhD) ',
    designation: 'CEO MVAI | Senior biomedical & Data science researcher | Business Development Manager (Africa)',
    description: 'Dr. Mosbah is a machine learning engineer with a passion for developing intelligent systems and innovative solutions to complex problems.',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/amine-m-b435a83a/',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Amine-Mosbah',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: 'https://www.linkedin.com/in/amine-m-b435a83a/',
      },
    ],
    
  }, {
    images: 'aymen',
    title: 'Dr.Eng Aymen Yahyaoui',
    designation: 'CTO MVAI | Senior AI&ML Researcher| Business Development Manager (Europe)',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/aymen-yahyaoui-40a124a/',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Aymen-Yahyaoui',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: 'https://www.linkedin.com/in/aymen-yahyaoui-40a124a/',
      },
    ],
    
  },
  {
    images: 'wassimm',
    title: 'Eng. Wassim Sliti',
    designation: ' Tech Lead MVAI | Computer Vision  Engineer',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/wassim-sliti-72b080187/',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Sliti-Wassim',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  {
    images: 'maher',
    title: 'Eng. Maher Boughdiri',
    designation: 'Product Lead MVAI | IoT & Blockchain Specialist | PhD Student ',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/maherboughdiri/',
      },
      {
        icon: <FaResearchgate className="fa-researchgate" />,
        url: 'https://www.researchgate.net/profile/Boughdiri-Maher',
      },
      {
        icon: <FaTwitter className="fa-twitter" />,
        url: '#',
      },
    ],
  },
  {
    images: 'iheb',
    title: 'Eng. Iheb Chhaibi',
    designation: 'GenAI & ML Engineer |Edge AI Developer',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '',
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
  },
  {
    images: 'syrine',
    title: 'Dr. Syrine Ben  Gorbel (DMV)',
    designation: '   Partner MVAI (USA)',
    socialNetwork: [
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: '',
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
  },
  {
    images: 'rahmaa',
    title: ' Eng. Rahma Mghirbi',
    designation: '  Computer Science  Engineer | Mobile Developer',
    socialNetwork: [
      {
        icon: <FaFacebookF className="fa-linkedin"/>,
        url: 'https://www.linkedin.com/in/rahma-mghirbi-a31b06271/',
      },
      {
        icon: <FaLinkedinIn className="fa-linkedin" />,
        url: 'https://www.linkedin.com/in/rahma-mghirbi-a31b06271/',
      },
      {
        icon: <FaTwitter className="fa-twitter"  />,
        url: '#',
      },
    ],
  },
  {
    images: 'hamdi',
    title: 'Eng. Iheb Hamdi ',
    designation: ' Web developer & Digital Twins Specialist ',
    socialNetwork: [
      {
        icon: <FaFacebookF className="fa-linkedin"/>,
        url: '#',
      },
      {
        icon: <FaLinkedinIn className="fa-linkedin"/>,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter"  />,
        url: '#',
      },
    ],
  }
  
  ,
  {
    images: 'nidhal',
    title: 'Eng. Nidhal Jaafri ',
    designation: ' Computer Science  Engineer | Robotics Specialist ',
    socialNetwork: [
      {
        icon: <FaFacebookF className="fa-linkedin"/>,
        url: '#',
      },
      {
        icon: <FaLinkedinIn className="fa-linkedin"/>,
        url: '#',
      },
      {
        icon: <FaTwitter className="fa-twitter"  />,
        url: '#',
      },
    ],
  }
];

class Team extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {TeamContent.map((value, i) => (
          <div className={`${column}`} key={i}>
            <div className='team'>
              <img
                src={`/assets/images/team/${value.images}.jpeg`}
                alt={value.title}
              />
              <h3>{value.title}</h3>
              <p>{value.designation}</p>
              <div className='social'>
                {value.socialNetwork.map((network, index) => (
                  <a href={network.url} key={index}>
                    {network.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Team;
