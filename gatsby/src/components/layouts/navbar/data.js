import React from "react"
import { FaGithub, FaIdCard, FaLinkedin } from "react-icons/fa"
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/htmlcss",
    text: "htmlcss",
  },
  {
    id: 3,
    url: "/javascript",
    text: "javascript",
  },
  {
    id: 4,
    url: "/react",
    text: "react",
  },

  // {
  //   id: 5,
  //   url: '/profile',
  //   text: 'profile',
  // },
]

export const social = [
  {
    id: 3,
    url: "https://www.linkedin.com/in/igor-hristov/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/igorhristov",
    icon: <FaGithub />,
  },
  {
    id: 1,
    url: "https://igorportfolio.netlify.app/",
    icon: <FaIdCard />,
  },
]
