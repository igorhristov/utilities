import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
 
  {
    id: 3,
    url: '/react',
    text: 'React',
    icon: <FaFolderOpen />,
  },

  {
    id: 5,
    url: '/htmlcss',
    text: 'Html/Css',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    url: '/',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },

  {
    id: 2,
    url: '/',
    text: 'team',
    icon: <FaUserFriends />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
