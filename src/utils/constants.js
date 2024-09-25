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
import SpaIcon from '@mui/icons-material/Spa'; // New icon for relaxation
import LandscapeIcon from '@mui/icons-material/Landscape'; // Optional icon for scenic landscapes
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MovieIcon from '@mui/icons-material/Movie';
import ComputerIcon from '@mui/icons-material/Computer';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import ParkIcon from '@mui/icons-material/Park';


export const logo = 'https://i.imgur.com/vyfknVf.png';

export const categories = [
  //{ name: 'Home', tag: 'PTI', icon: <HomeIcon />, },
  /*{ name: 'Home',
    tag: 'PTI',
    icon: <HomeIcon />,
    subcategories: [
      { name: 'World News', tag: 'World News' },
      { name: 'US News', tag: 'US News' },
      { name: 'Abdul Qadir', tag: 'Abdul Qadir ARY' },
      { name: 'Imran Khan', tag: 'Imran Khan' },
      { name: 'PTI', tag: 'PTI' },
    ],},*/
  { name: 'Home', tag: 'Relaxation', icon: <HomeIcon />, subcategories: [
    { name: 'Scenic Landscapes', tag: 'Scenic Landscapes' },
    { name: 'Ocean & Waterfalls', tag: 'Ocean and Waterfall Sounds' },
    { name: 'Forest & Mountains', tag: 'Forest & Mountains' },
    { name: 'Rain Sounds', tag: 'Rain Sounds' },
    { name: 'Bird Sounds', tag: 'Bird Sounds' },
    { name: 'Fireplace & Campfire', tag: 'Fireplace & Campfire' },
    { name: 'Sunrise & Sunset', tag: 'Scenic Sunrise/Sunset videos' },
  ],},

  { name: 'Sports', tag: 'Sports', icon: <SportsTennisIcon />, subcategories: [
      { name: 'Tennis', tag: 'ATP Tennis' },
      { name: 'Cricket', tag: 'Mens Cricket' },
      { name: 'Soccer', tag: 'Mens Soccer' },
      { name: 'Golf', tag: 'Mens Golf' },
      { name: 'Basketball', tag: 'Mens Basketball' },
      { name: 'Baseball', tag: 'Mens Baseball' },
      { name: 'Snooker', tag: 'Mens Snooker' },
      { name: 'Chess', tag: 'Professional Chess' },
      { name: 'Table Tennis', tag: 'Mens Table Tennis' },
  ],},
  { name: 'Gaming', tag: 'Gaming', icon: <SportsEsportsIcon />, subcategories: [
      { name: 'Upcoming Games', tag: 'Upcoming Games' },
      { name: 'Sports Games', tag: 'Sports Games' },
      { name: 'Multiplayer', tag: 'Multiplayer Games' },
      { name: 'Indie Games', tag: 'Indie Video Games' },
      { name: 'Game Development', tag: 'Game Development' },
      { name: 'Strategy', tag: 'Strategy Games' },
      { name: 'Simulation', tag: 'Simulation Video Games' },
      { name: 'Action', tag: 'Action Games' },
      { name: 'RPG', tag: 'RPG Video Games' },
  ],},
  { name: 'Movies & TV', tag: 'Movies & TV', icon: <MovieIcon />, subcategories: [
      { name: 'Upcoming Movies', tag: 'Upcoming Animated Movies' },
      { name: 'Trailers', tag: 'Animated Movie Trailers' },
      { name: 'Behind the Scenes', tag: 'Animated Behind the Scenes' },
      { name: 'Disney', tag: 'Disney' },
      { name: 'Dreamworks', tag: 'Dreamworks' },
      { name: 'Universal Studios', tag: 'Universal Studios' },
      { name: 'Movie Reviews', tag: 'Animated Movie Reviews' },
      { name: 'TV Show Clips', tag: 'Animated TV Show Clips' },
      { name: 'Film Criticism', tag: 'Animated Film Criticism' },
      { name: 'Comedy', tag: 'Animated Comedy Movies' },
      { name: 'Action', tag: 'Animated Action Movies' },
      { name: 'Kids', tag: 'Kids Videos' },
  ],},
  { name: 'Technology', tag: 'Technology', icon: <ComputerIcon />, subcategories: [
      { name: 'AI & Robotics', tag: 'AI & Robotics' },
      { name: 'Robotics', tag: 'Robotics' },
      { name: 'Tech News', tag: 'Tech News' },
      { name: 'Future Tech', tag: 'Future Tech' },
      { name: 'Smartphones', tag: 'Smartphones' },
      { name: 'Software Tutorials', tag: 'Software Tutorials' },
      { name: 'Coding', tag: 'Coding' },
      { name: 'Gadget Reviews', tag: 'Gadget Reviews' },
  ],},
  { name: 'Education', tag: 'Education', icon: <SchoolIcon />, subcategories: [
      { name: 'Science', tag: 'Science' },
      { name: 'Mathematics', tag: 'Mathematics' },
      { name: 'History', tag: 'Medieval History' },
      { name: 'Language Learning', tag: 'Language Learning' },
      { name: 'Computer Science', tag: 'Computer Science' },
      { name: 'App Development', tag: 'App Development' },
      { name: 'Life Skills', tag: 'Life Skills' },
      { name: 'College Lectures', tag: 'College Lectures' },
      { name: 'Personal Development', tag: 'Personal Development' },
  ],},
  { name: 'News & Politics', tag: 'News & Politics', icon: <NewspaperIcon />, subcategories: [
      { name: 'World News', tag: 'World News' },
      { name: 'US News', tag: 'US News' },
      { name: 'Political Analysis', tag: 'Political Analysis' },
      { name: 'Interviews', tag: 'News Interviews' },
      { name: 'Documentaries', tag: 'News Documentaries' },
  ],},
  { name: 'Comedy', tag: 'Comedy', icon: <EmojiEmotionsIcon />, subcategories: [
      { name: 'Sketch Comedy', tag: 'PG Sketch Comedy' },
      { name: 'Stand-Up', tag: 'PG Stand-Up Comedy' },
      { name: 'Memes', tag: 'PG Memes' },
      { name: 'Parodies', tag: 'PG Parodies' },
      { name: 'Satire', tag: 'PG Satire' },
      { name: 'Comedy Challenges', tag: 'PG Comedy Challenges' },
  ],},
  { name: 'Science & Nature', tag: 'Science & Nature', icon: <ParkIcon />, subcategories: [
      { name: 'Space Exploration', tag: 'Space Exploration' },
      { name: 'Biology', tag: 'Biology' },
      { name: 'Animals', tag: 'Animal Documentaries' },
      { name: 'Environmental Science', tag: 'Environmental Science' },
      { name: 'Physics & Chemistry', tag: 'Physics & Chemistry' },
      { name: 'Earth Sciences', tag: 'Earth Sciences' },
      { name: 'Nature Documentaries', tag: 'Nature Documentaries' },
      { name: 'Travel', tag: 'Travel' },
  ],},



  /*{ name: 'Home',
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
    icon: <SportsTennisIcon />,
    subcategories: [
      { name: 'ATP', tag: 'ATP' },
      { name: 'Top Tennis Training', tag: 'Top Tennis Training' },
      { name: 'Karue Sell', tag: 'Karue Sell' },
      { name: 'Federer', tag: 'Federer' },
    ],},
  //{ name: 'News', tag: 'Imran Riaz Khan', icon: <NewspaperIcon />, },
  //{ name: 'Sports', tag: 'ATP', icon: <SportsTennisIcon />, subcategories: [],},
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
    { name: 'Islam',
      tag: 'Qari Mishary (iRecite)',
      icon: <Brightness3Icon />,
      subcategories: [
        { name: 'Quran', tag: 'Qari Mishary (iRecite)' },
        { name: 'Dr. Israr Ahmed', tag: 'Dr. Israr Ahmed' },
        { name: 'Javed Ahmed Ghamidi', tag: 'Javed Ahmed Ghamidi' },
      ],},
  { name: 'Science',
    tag: 'Game Development',
    icon: <CodeIcon />,
    subcategories: [
      { name: 'Game Development', tag: 'Game Development' },
      { name: 'Robotics', tag: 'Robotics' },
    ],},*/
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