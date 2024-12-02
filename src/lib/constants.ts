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
    'Welcome to Yudhy Site, a portfolio and blog for developers.',
  AUTHOR: 'Yudhy Prayitno',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Work Page
export const CERTIF: Page = {
  TITLE: 'Certifications',
  DESCRIPTION: 'Professional certifications and courses I have completed.',
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

export const CERTIFICATIONS =[
  {
    company: 'DeepLearning.AI',
    position: 'Custom and Distributed Training with TensorFlow',
    start: 'Nov 29, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/V2GIBUTY8RDO',
    end: '',
    tasks: [
      'Distribution Strategies, GradientTape for Optimization, Custom Training Loops, Basic Tensor Functionality.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Custom Models, Layers, and Loss Functions with TensorFlow',
    start: 'Nov 28, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/JFM61AFG2FDO',
    end: '',
    tasks: [
      'Functional API, Custom and Exotic Models with Functional API, Custom Loss Functions, Custom Layers.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Browser-based Models with TensorFlow.js',
    start: 'Nov 17, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/K8FYBI3B203S',
    end: '',
    tasks: [
      'Train and run inference in a browser, Handle data in a browser, Build an object classification and recognition model using a webcam.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Data Pipelines with TensorFlow Data Services',
    start: 'Nov 17, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/4XD05ZSLBJNY',
    end: '',
    tasks: [
      'Perform efficient ETL tasks using Tensorflow Data Services APIs.',
      'Use different modules and functions of the TFDS API to prepare your data for training pipelines.',
      'Construct train/validation/test splits of any dataset - either custom or present in TensorFlow Hub Dataset library - using Splits API.',
      'Identify bottlenecks in your input pipelines and increase your workflow efficiency by input parallelization.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Device-based Models with TensorFlow Lite',
    start: 'Nov 17, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/4KJYLXT29567',
    end: '',
    tasks: [
      'Prepare models for battery-operated devices.',
      'Deploy models on embedded systems like Raspberry Pi and microcontrollers.',
      'Execute models on Android and iOS platforms.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Sequences, Time Series and Prediction',
    start: 'Nov 9, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/BFQNGOMRWGY4',
    end: '',
    tasks: [
      'Solve time series and forecasting problems in TensorFlow.',
      'Prepare data for time series learning using best practices.',
      'Explore how RNNs and ConvNets can be used for predictions.',
      'Build a sunspot prediction model using real-world data.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Structuring Machine Learning Projects',
    start: 'Nov 9, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/0B618XDAIVMV',
    end: '',
    tasks: [
      'Decision-Making, Machine Learning, Deep Learning, Inductive Transfer, Multi-Task Learning',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Natural Language Processing in TensorFlow',
    start: 'Nov 6, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/P4ZE73VPHU5V',
    end: '',
    tasks: [
      'Build natural language processing systems using TensorFlow.',
      'Apply RNNs, GRUs, and LSTMs in TensorFlow.',
      'Process text, including tokenization and representing sentences as vectors.',
      'Train LSTMs on existing text to create original poetry and more.',
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Convolutional Neural Networks in TensorFlow',
    start: 'Oct 28, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/82RCKDTV6OPX',
    end: '',
    tasks: [
      'Explore strategies to prevent overfitting, including augmentation and dropout.',
      "Learn transfer learning and how learned features can be extracted from models.",
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Advanced Learning Algorithms',
    start: 'Oct 22, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/IOOELUOX3KZF',
    end: '',
    tasks: [
      'Built and trained neural networks with TensorFlow to perform multi-class classification. ',
      "Applied best practices for machine learning development to ensure models generalize to data and tasks in the real world. ",
      "Built and utilized decision trees and tree ensemble methods, including random forests and boosted trees.",
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Linear Algebra for Machine Learning and Data Science',
    start: 'Oct 9, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/U70B4C8NNCEB',
    end: '',
    tasks: [
      'Represented data as vectors and matrices and identified their properties using concepts of singularity, rank, and linear independence.',
      "Applied common vector and matrix algebra operations including dot product, inverse, and determinants. ",
      "Expressed matrix operations as linear transformations, and applied concepts of eigenvalues and eigenvectors to machine learning problems.",
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Supervised Machine Learning: Regression and Classification',
    start: 'Oct 14, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/ZVDWFY07DLIH',
    end: '',
    tasks: [
      'Built machine learning models in Python using popular machine learning libraries NumPy & scikit-learn.',
      "Built and trained supervised machine learning models for prediction & binary classification tasks, including linear regression & logistic regression. ",
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    start: 'Oct 22, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/H4B7OYRNOCR3',
    end: '',
    tasks: [
      'Used unsupervised learning techniques including clustering and anomaly detection.',
      "Built recommender systems using collaborative filtering approach and content-based deep learning methods.",
      "Built deep reinforcement learning models.",
    ],
  },
  {
    company: 'DeepLearning.AI',
    position: 'Machine Learning Specialization',
    start: 'Oct 22, 2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/YANAP934DFRL',
    end: '',
    tasks: [
      'Built ML models with NumPy & scikit-learn, built & trained supervised models for prediction & binary classification tasks (linear, logistic regression).',
      "Built & trained neural networks with TensorFlow to perform multi-class classification, & built & used decision trees & tree ensemble methods.",
      "Applied best practices for ML development & used unsupervised learning techniques including clustering & anomaly detection.",
      "Built recommender systems using collaborative filtering approach & content-based deep learning methods, & developed deep reinforcement learning models.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Learn Data Analysis with Python',
    start: 'Oct 5, 2024',
    link: 'https://www.dicoding.com/certificates/JMZV4N58JXN9',
    end: 'Oct 5, 2027',
    tasks: [
      'Mastered various fundamental concepts of data analysis and its stages.',
      "Applied basic concepts of descriptive statistics and their implementation in data analysis processes.",
      "Identified critical aspects to consider when processing data.",
      "Applied various EDA (Exploratory Data Analysis) techniques to gain comprehensive insights from analyzed data.",
      "Utilized effective data visualization techniques to enhance data analysis presentation.",
      "Developed interactive dashboards using Streamlit for presenting data analysis results.",
    ],
  },
  {
    company: 'Google',
    position: 'Crash Course on Python',
    start: 'Sep 18, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/E1TFIQBZYJZG',
    end: '',
    tasks: [
      'Mastered Python fundamentals and its applications in automation.',
      "Developed short Python scripts to perform automated actions.",
      "Demonstrated proficiency in using basic Python structures: strings, lists, and dictionaries.",
    ],
  },
  {
    company: 'Google',
    position: 'Using Python to Interact with the Operating System',
    start: 'Sep 28, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/X4581JCNMPVH',
    end: '',
    tasks: [
      'Set up, configured, and utilized Python developer environments.',
      "Manipulated files and processes running on Operating Systems using Python.",
      "Mastered and implemented regular expressions (regex) for efficient text file processing.",
      "Demonstrated proficiency in both Bash and Python scripting, creating automation scripts using both languages.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Fundamentals of Git with GitHub',
    start: 'Sep 14, 2024',
    link: 'https://www.dicoding.com/certificates/6RPN1EQY8X2M',
    end: 'Sep 14, 2027',
    tasks: [
      'Mastered Git fundamentals including repository creation, file management, git commit, and git checkout operations.',
      "Demonstrated proficiency in Git branching concepts, merging operations, and conflict resolution.",
      "Applied collaborative development practices including repository forking, squashing changes, and conducting code reviews.",
      "Enhanced team collaboration skills through creating new repositories, repository cloning, and managing pull requests in active GitHub repositories.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Fundamentals of Programming for Aspiring Software Developers',
    start: 'Sep 13, 2024',
    link: 'https://www.dicoding.com/certificates/JLX178EWJX72',
    end: 'Sep 13, 2027',
    tasks: [
      'Implemented skills through case studies in developing user requirements and technical specifications for applications.',
      "Created comprehensive application requirements, system workflows, and flowcharts through practical case studies.",
      "Mastered programming fundamentals including syntax theory, variables, data types, computer logic, and JavaScript ES6.",
      "Applied software documentation best practices including code archiving, standardized code styling, code commenting, and technical documentation development.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Introductory Programming Logic (Programming Logic 101)',
    start: 'Sep 13, 2024',
    link: 'https://www.dicoding.com/certificates/4EXGQD21EZRL',
    end: 'Sep 13, 2027',
    tasks: [
      'Mastered various types of logic gates including AND, OR, NOT, NAND, NOR, XOR, and XNOR gates.',
      "Applied computational thinking methods for problem-solving, encompassing decomposition, pattern recognition, abstraction, algorithm development, and evaluation.",
      "Demonstrated practical application of programming logic concepts through real-world case studies.",
    ],
  },
  {
    company: 'Digital Talent Scholarship',
    position: 'Artificial Intelligence for Junior Developer',
    start: 'Aug 31, 2024',
    link: 'https://digitalent.kominfo.go.id/cek-sertifikat#19584701060-9/FGA/BLSDM%20KOMINFO/2024',
    end: '',
    tasks: [
      'Gained comprehensive understanding of Huawei Ascend AI system development and evolution.',
      "Mastered Full-stack all-Scenario AI Strategy concepts and implementations.",
      "Demonstrated proficiency in Traditional Machine Learning and Deep Learning algorithms.",
      "Designed and implemented Neural Networks using TensorFlow and MindSpore frameworks.",
      "Developed competencies in AI technology applications across various roles including sales, marketing, product management, project management, and technical support.",
    ],
  },
  {
    company: 'Google',
    position: 'Foundations of Business Intelligence',
    start: 'Jun 4, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/6TJ7XX73R3HL',
    end: '',
    tasks: [
      'Demonstrated understanding of common careers and industries utilizing Business Intelligence.',
      "Investigated the impact of data on business decision-making processes.",
      "Gained expertise in explaining the crucial role of BI professionals in business environments.",
      "Developed and implemented BI project plans through practical coursework.",
    ],
  },
  {
    company: 'Great Learning',
    position: 'Introduction to Swift',
    start: 'Jun 2, 2024',
    link: 'https://www.mygreatlearning.com/certificate/KOOJPFCQ',
    end: '',
    tasks: [
      'Mastered Swift Programming Language fundamentals, including object-oriented programming concepts, data types, control flow, and iOS app development basics through hands-on projects and practical implementations.',
      "Developed strong foundation in Swift Programming Language, encompassing core syntax, functions, collections, and essential iOS development principles while creating functional applications.",
    ],
  },
  {
    company: 'INSEAD',
    position: 'Blockchain Opportunity Analysis',
    start: 'Apr 24, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/CURAJLZH7HGC',
    end: '',
    tasks: [
      'Identified new opportunities and innovative applications for blockchain technology within targeted industry sectors.',
      "Developed strategic positioning for blockchain initiatives, focusing on creating enhanced customer value propositions.",
      "Analyzed critical business model components and feasibility assessments for blockchain implementation.",
      "Evaluated organizational transformation requirements and operational changes needed for successful blockchain integration.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Learning Machine Learning for Beginners',
    start: 'Feb 3, 2024',
    link: 'https://www.dicoding.com/certificates/6RPNVGK19Z2M',
    end: 'Feb 3, 2027',
    tasks: [
      'Mastered classification concepts in supervised learning, including implementation of common algorithms such as KNN and Decision Trees.',
      "Applied clustering methods for unlabeled data analysis, utilizing K-Means algorithms and performance evaluation techniques.",
      "Implemented effective hyperparameter tuning strategies to optimize model accuracy and performance.",
      "Developed and deployed machine learning models using both supervised and unsupervised learning methods for real-world applications.",
    ],
  },
  {
    company: 'Mereka',
    position: 'Microsoft Azure AI Fundamentals',
    start: 'Feb 9, 2024',
    link: 'https://talentaid.biji-biji.com/storage/certificates/Certificate_40017_37_492in.pdf?sv=2019-07-07&sr=b&sig=fJLI0ATVqc7zq02eVjlmNNLMSBi5r9KE3crPy1L%2BSWs%3D&se=2024-10-22T22%3A55%3A40Z&sp=r',
    end: '',
    tasks: [
      'Developed comprehensive understanding of Azure AI services, including cognitive services, machine learning capabilities, and natural language processing tools while implementing practical solutions on the Azure cloud platform.',
      "Mastered core Azure AI concepts and services, gaining hands-on experience in deploying AI solutions, working with computer vision, and implementing conversational AI using Azure's cognitive services.",
      "Applied Azure AI fundamentals through practical implementation of cloud-based machine learning solutions, including data processing, model training, and deployment of AI services in real-world scenarios.",
    ],
  },
  {
    company: 'Mereka',
    position: ' Microsoft Azure Data Fundamentals',
    start: 'Feb 3, 2024',
    link: 'https://talentaid.biji-biji.com/storage/certificates/Certificate_40028_57_dd8tu.pdf?sv=2019-07-07&sr=b&sig=OvJSCz9J1ZT6Tq5RJPZoe6ixdUjAP6jpmN87RQ6TiXA%3D&se=2024-10-22T23%3A09%3A11Z&sp=r',
    end: '',
    tasks: [
      'Gained practical expertise in Azure data services, including data storage solutions, database management, and data analytics tools while implementing real-world data processing scenarios.',
      "Mastered core Azure data concepts, including hands-on experience with relational and non-relational databases, data warehousing, and analytics solutions using Azure's comprehensive data platform.",
      "Developed strong foundation in Azure data management, encompassing data storage, processing, and analytics capabilities while implementing enterprise-level data solutions and best practices.",
    ],
  },
  {
    company: 'INSEAD',
    position: 'Web3 and Blockchain Fundamentals',
    start: 'Feb 5, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/3APNMLYZ9HQ5',
    end: '',
    tasks: [
      'Demonstrated comprehensive understanding of key blockchain concepts including Web3, tokens, smart contracts, DAOs (Decentralized Autonomous Organizations), and blockchain trilemma.',
      "Analyzed and applied seven core design principles of blockchain-based systems while addressing key implementation challenges in real-world scenarios.",
      "Developed expertise in evaluating blockchain suitability for various business cases through systematic assessment frameworks.",
      "Examined and evaluated real-world blockchain implementations across different industries, studying successful business model integrations.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Getting Started with Python Programming',
    start: 'Nov 4, 2023',
    link: 'https://www.dicoding.com/certificates/GRX52RKEYX0M',
    end: 'Nov 4, 2026',
    tasks: [
      'Demonstrated proficiency in handling diverse data types using Python, encompassing fundamental concepts through advanced data operations.',
      "Mastered Object-Oriented Programming (OOP) principles in Python, including implementation of classes, methods, attributes, and inheritance concepts.",
      "Applied extensive knowledge of Python's popular libraries for text processing, mathematical computations, data manipulation, file management, web scraping, machine learning, and web development applications.",
    ],
  },
  {
    company: 'Dicoding',
    position: 'Learning Data Visualization Basics',
    start: 'Oct 14, 2023',
    link: 'https://www.dicoding.com/certificates/N9ZO50MM6PG5',
    end: 'Oct 14, 2026',
    tasks: [
      'Mastered fundamental concepts of data visualization, including various visualization media, tools, and contextual data analysis for effective communication.',
      "Developed advanced proficiency in spreadsheet applications using Google Sheets, implementing complex functions and formulas for comprehensive data processing.",
      "Applied professional data visualization techniques, incorporating Gestalt principles, Preattentive Attributes, and design theory while creating effective data stories and avoiding common visualization pitfalls.",
    ],
  },
]