import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Laoode',
  linkedin: 'https://www.linkedin.com/in/la-ode-muhammad-yudhy-prayitno/',
  mail: 'mailto:yudhyprayitno567@gmail.com',
  instagram: 'https://www.instagram.com/yudhyprayitno',
  medium: 'https://medium.com/@yudhyprayitno',
  discord: 'https://discordapp.com/users/763172619196825611',
}

// Global
export const SITE: Site = {
  TITLE: 'Yudhy Prayitno',
  DESCRIPTION:
    'Welcome to Yudhy Site, a portfolio and blog for designers and developers.',
  AUTHOR: 'Yudhy Prayitno',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Halu Oleo University',
    link: 'https://uho.ac.id/en/',
    date: '2022 - 2026',
  },
  {
    title: '...',
    institution: 'Dicoding',
    link: 'https://www.dicoding.com/',
    date: '2022 - 2024',
  },
  {
    title: '...',
    institution: 'Coursera',
    link: 'https://www.coursera.org/',
    date: '2023 - 2050',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@aureusyp',
    date: '2018 - 3000',
  },
  {
    title: 'The Student',
    institution: 'Akademi Crypto',
    link: 'http://akademicrypto.com/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Bangkit Academy',
    location: 'remote',
    position: 'Machine Learning',
    start: 'Sep 2024',
    link: 'https://dashboard.bangkit.academy/',
    end: 'Current',
    tasks: [
      'Developed a bike-sharing analysis dashboard using Python and Streamlit, incorporating business questions and exploratory data analysis. ',
      "Completed Bangkit Academy's Machine Learning track, gaining hands-on experience in supervised learning, regression, and classification techniques. ",
      "Proficient in Python programming, with a strong foundation in linear algebra, principal component analysis, and logistic regression for data science applications.",
    ],
  },
  {
    company: 'ID/X Partners x Rakamin Academy',
    location: 'Remote',
    position: 'Data Science',
    link: 'https://www.rakamin.com/virtual-internship-experience/id-x-partners-data-scientist',
    start: 'Jan 2024',
    end: 'Feb 2024',
    tasks: [
      'Modeling credit risk prediction with K-Nearest Neighbors (KNN) and get 89% acuration. ',
      'Proficient in and capable of applying a range of skills and tools including Big Data Fundamentals, Statistics & Data Analytics, SQL Querying, R Programming, Python Programming, and Machine Learning. ',
      'Executing end-to-end Machine Learning modeling to develop data science solutions for clients.',
    ],
  },
]
