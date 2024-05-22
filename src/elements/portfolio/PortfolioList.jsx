import React, { Component } from "react";

import {  FaLinkedinIn } from "react-icons/fa";

let TeamContent = [
  {
    images: 'fethi',
    title: 'DVM Mohamed Fethi Diouani',
    designation: 'Major Veterinary Health Physician at the Pasteur Institute in Tunis',
    socialNetwork: [
    
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
    ],
  },
  {
    images: 'raouf',
    title: 'DVM Raouf Dhaouadi',
    designation: 'Associate Professor of Hospital and University at ENMV',
    socialNetwork: [
     
      {
        icon: <FaLinkedinIn />,
        url: '#',
      }
    ],
  },
  {
    images: 'sami',
    title: 'Sami Ameur',
    designation: 'Associate Professor | Biosensors & Microelectronics Expert at School of Agriculture Tunisia',
    socialNetwork: [
     
      {
        icon: <FaLinkedinIn />,
        url: '#',
      }
    ],
  },
  {
    images: 'boutheina',
    title: 'DVM Boutheina Mardassi ',
    designation: 'Doctor of Veterinary Medicine, Ph.D at PASTEURTN | Vaccinology and Biotechnology Expert',
    socialNetwork: [
     
      {
        icon: <FaLinkedinIn />,
        url: '#',
      }
    ],
  }
  ,
  {
    images: 'wadii',
    title: 'Dr W adii Boulila ',
    designation: 'Associate Professor of Computer Science & Senior Researcher, Prince Sultan University, Saudi Arabia',
    socialNetwork: [
     
      {
        icon: <FaLinkedinIn />,
        url: '#',
      }
    ],
  }
  

];


class PortfolioList extends Component{
    render(){
        const {column} = this.props;
        return (
          <React.Fragment>
            {TeamContent.map((value, i) => (
              <div className={`${column}`} key={i}>
                <div className='team'>
                  <div className='thumbnail'>
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