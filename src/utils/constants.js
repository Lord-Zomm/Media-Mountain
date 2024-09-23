import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import TvIcon from '@mui/icons-material/Tv';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export const logo = 'https://i.imgur.com/vyfknVf.png';

export const categories = [
  //{ name: 'Home', tag: 'PTI', icon: <HomeIcon />, },
  { name: 'Home',
    tag: 'PTI',
    icon: <HomeIcon />,
    subcategories: [
      { name: 'Imran Riaz Khan', tag: 'Imran Riaz Khan' },
      { name: 'Shahbaz Gill', tag: 'Shahbaz Gill' },
      { name: 'Abdul Qadir', tag: 'Abdul Qadir ARY' },
      { name: 'Imran Khan', tag: 'Imran Khan' },
      { name: 'PTI', tag: 'PTI' },
    ],},
  { name: 'Sports',
    tag: 'ATP',
    icon: <NewspaperIcon />,
    subcategories: [
      { name: 'ATP', tag: 'ATP' },
      { name: 'Top Tennis Training', tag: 'Top Tennis Training' },
      { name: 'Karue Sell', tag: 'Karue Sell' },
      { name: 'Federer', tag: 'Federer' },
    ],},
  //{ name: 'News', tag: 'Imran Riaz Khan', icon: <NewspaperIcon />, },
  //{ name: 'Sports', tag: 'ATP', icon: <SportsTennisIcon />, subcategories: [],},
  { name: 'Islam',
    tag: 'Qari Mishary (iRecite)',
    icon: <Brightness3Icon />,
    subcategories: [
      { name: 'Quran', tag: 'Qari Mishary (iRecite)' },
      { name: 'Dr. Israr Ahmed', tag: 'Dr. Israr Ahmed' },
      { name: 'Javed Ahmed Ghamidi', tag: 'Javed Ahmed Ghamidi' },
    ],},
  { name: 'History',
    tag: 'Abbasids',
    icon: <FlagIcon />,
    subcategories: [
      { name: 'Abbasids', tag: 'Abbasids' },
      { name: 'Seljuks', tag: 'Seljuks' },
      { name: 'Mamluks', tag: 'Mamluks' },
      { name: 'Ottomans', tag: 'Ottomans' },
      { name: 'Mughals', tag: 'Mughals' },
    ],},
  { name: 'Movies',
    tag: 'Kung Fu Panda',
    icon: <OndemandVideoIcon />,
    subcategories: [
      { name: 'Kung Fu Panda', tag: 'Kung Fu Panda' },
    ],},
  { name: 'Shows',
    tag: 'Kung Fu Panda Legends of Awesomeness Hindi',
    icon: <TvIcon />,
    subcategories: [
      { name: 'Kung Fu Panda Legends of Awesomeness', tag: 'Kung Fu Panda Legends of Awesomeness Hindi' },
      { name: 'Sonic Boom', tag: 'Sonic Boom (Show)' },
    ],},
  { name: 'Games',
    tag: 'Trove',
    icon: <SportsEsportsIcon />,
    subcategories: [
      { name: 'Trove', tag: 'Trove' },
      { name: 'Kingdom Hearts', tag: 'Kingdom Hearts' },
      { name: 'Zelda', tag: 'Zelda: BOTW' },
    ],},
  { name: 'Science',
    tag: 'Game Development',
    icon: <CodeIcon />,
    subcategories: [
      { name: 'Game Development', tag: 'Game Development' },
      { name: 'Robotics', tag: 'Robotics' },
    ],},
  //{ name: 'Science', tag: 'Robotics', icon: <PrecisionManufacturingIcon />, subcategories: [],},


  /*{ name: 'Sports', tag: 'ATP', icon: <SportsTennisIcon />, },
  { name: 'Quran', tag: 'Qari Mishary (iRecite)', icon: <Brightness3Icon />, },
  { name: 'History', tag: 'Abbasids', icon: <FlagIcon />, },
  { name: 'Movies', tag: 'Kung Fu Panda', icon: <OndemandVideoIcon />, },
  { name: 'Shows', tag: 'Kung Fu Panda Legends of Awesomeness Hindi', icon: <TvIcon />, },
  { name: 'Games', tag: 'Trove', icon: <SportsEsportsIcon />, },
  { name: 'Development', tag: 'Game Development', icon: <CodeIcon />, },
  { name: 'Science', tag: 'Robotics', icon: <PrecisionManufacturingIcon />, },*/


  /*{ name: 'PTI', tag: 'PTI', icon: <FlagIcon />, },
  { name: 'Imran Khan', icon: <FlagIcon />, },
  { name: 'Imran Riaz Khan', icon: <NewspaperIcon />, },
  { name: 'Shahbaz Gill', icon: <NewspaperIcon />, },
  { name: 'ATP', icon: <SportsTennisIcon />, },
  { name: 'Federer', icon: <SportsTennisIcon />, },
  { name: 'Top Tennis Training', icon: <SportsTennisIcon />, },
  { name: 'Karue Sell', icon: <SportsTennisIcon />, },
  { name: 'Quran', tag: 'Qari Mishary (iRecite)', icon: <Brightness3Icon />, },
  { name: 'Dr. Israr Ahmed', icon: <Brightness3Icon />, },
  { name: 'Javed Ghamidi', icon: <Brightness3Icon />, },
  { name: 'Abbasids', icon: <FlagIcon />, },
  { name: 'Seljuks', icon: <FlagIcon />, },
  { name: 'Mamluks', icon: <FlagIcon />, },
  { name: 'Ottomans', icon: <FlagIcon />, },
  { name: 'Mughals', icon: <FlagIcon />, },
  { name: 'Kung Fu Panda', icon: <TvIcon />, },
  { name: 'Sonic Boom (Show)', icon: <TvIcon />, },
  { name: 'TMNT 2003', icon: <TvIcon />, },
  { name: 'Kingdom Hearts', icon: <SportsEsportsIcon />, },
  { name: 'Zelda BOTW', icon: <SportsEsportsIcon />, },
  { name: 'Trove', icon: <SportsEsportsIcon />, },
  { name: 'Game Development', icon: <SportsEsportsIcon />, },
  { name: 'Robotics', icon: <PrecisionManufacturingIcon />, },*/
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'