import React ,{ Component }from "react";
import { FiDroplet} from 'react-icons/fi';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import BugReportIcon from '@mui/icons-material/BugReport';
import { FaFish } from 'react-icons/fa'
import Badge from '@mui/material/Badge';

const ServiceList = [
  
  {
    icon: <BugReportIcon sx={{ fontSize: 50 }} />,
    title: 'Tick Scan ',
    description:
      'Ectoparasite identification',
    url: '',
  },
  {
    icon: <LunchDiningOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Food Scan',
    description:
      'Food safety assessments',
  },
  // {
  //   icon: <VaccinesOutlinedIcon sx={{ fontSize: 50 }} />,
  //   title: 'AviCRISPRTwins',
  //   description:
  //     'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  // },
  
];

const ServiceListReady = [
   
  {
    icon: <FiDroplet />,
    title: 'AVI-Twins',
    description:
      'AI-Empowered Digital Twins for a sustainable aviculture ',
    url: 'https://youtu.be/15r8wVRVaOc',
  },
  {
    icon: <FaFish />,
    title: 'Aqua Twins',
    description:
      'AI-Empowered Digital Twins for a sustainable Aquaculture',
      url: 'https://youtu.be/nv8XWsW74Qg?si=yKNt5_LfAZ_4-I1q',
  },
  {
    icon: <VaccinesOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'ATB Scan',
    description:
      'AI-Empowered Antibiotic susceptibility test interpretation',
    url: 'https://youtu.be/peOUB_D_UQ8',
  },
   {
     icon: <MedicationOutlinedIcon sx={{ fontSize: 50 }} />,
     title: 'Blood Scan',
     description:
       'AI-based solution  for blood scan analysis',
     url:'https://youtu.be/nzyE6I6iDjg',
   },
];




class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        
        return (
          <React.Fragment>
            <div className='row'>
              {ServiceListReady.map((val, i) => (
                <div className={`${column}`} key={i}>
                  <a href={val.url}>
                    <div className='service service__style--2'>
                      <Badge badgeContent={0} color='warning'>
                        <div className='icon'>{val.icon}</div>
                        <div className='content'>
                          <h3 className='title'> &nbsp;{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </Badge>{' '}
                    </div>
                  </a>
                </div>
              ))}
              {ServiceList.map((val, i) => (
                <div className={`${column}`} key={i}>
                  {' '}
                  <div className='service service__style--2'>
                    {' '}
                    <Badge badgeContent={'Under construction'} color='warning'>
                      <div className='icon'>{val.icon}</div>
                      <div className='content'>
                        <h3 className='title'>{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </Badge>{' '}
                  </div>{' '}
                </div>
              ))}
            </div>
          </React.Fragment>
        );
    }
}
export default ServiceThree;
