import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

let TeamContent = [
 
  {
    images: 'mosbah',
    title: 'DVM. Amine Mosbah',
    designation: 'CEO MVAI| Senior biomedical & Data science researcher',
    description: 'Dr. Mosbah is a machine learning engineer with a passion for developing intelligent systems and innovative solutions to complex problems.',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: 'https://www.linkedin.com/in/amine-m-b435a83a/',
      },
      {
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/amine-m-b435a83a/',
      },
    ],
  }, {
    images: 'aymen',
    title: 'Dr.Eng Aymen Yahyaoui',
    designation: 'CTO MVAI | Senior AI&ML Researcher',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: 'https://www.linkedin.com/in/aymen-yahyaoui-40a124a/',
      },
      {
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/aymen-yahyaoui-40a124a/',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: 'wassimm',
    title: 'Eng. Wassim Sliti',
    designation: ' Tech Lead | AI&ML Engineer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: 'https://www.linkedin.com/in/wassim-sliti-72b080187/',
      },
      {
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/wassim-sliti-72b080187/',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: 'maher',
    title: 'Eng. Maher Boughdiri',
    designation: 'Product Lead MVAI | IoT&Blockchain Specialist | PhD Student',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: 'https://www.linkedin.com/in/maherboughdiri/',
      },
      {
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/maherboughdiri/',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: 'iheb',
    title: 'Eng. Iheb Chhaibi',
    designation: 'Data Scientist | Digital Twins Specialist',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: 'https://www.linkedin.com/in/iheb-chhaibi/',
      },
      {
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/iheb-chhaibi/',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: 'rahmaa',
    title: ' Rahma Mghirbi',
    designation: ' Sales Manager ',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: 'https://www.linkedin.com/in/rahma-mghirbi-a31b06271/',
      },
      {
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/in/rahma-mghirbi-a31b06271/',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: 'rayen',
    title: 'Med Rayen Taamallah',
    designation: 'Marketing Manager',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
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
