// Data arrays
const skills = [
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Ruby', icon: 'fas fa-gem' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'GO', icon: 'fa-brands fa-golang' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Rails', icon: 'fas fa-gem' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Kubernetes', icon: 'fas fa-cubes' },
  { name: 'GraphQL', icon: 'fas fa-project-diagram' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'CI/CD', icon: 'fas fa-code-branch' },
  { name: 'Azure', icon: 'fas fa-cloud' },
  { name: 'Serverless', icon: 'fas fa-bolt' },
  { name: 'Microservices', icon: 'fas fa-network-wired' },
  { name: 'REST APIs', icon: 'fas fa-server' }
];

const experiences = [
  {
    title: 'Senior Backend Engineer',
    company: 'Quidax',
    period: '2023 - Present',
    url: 'https://www.quidax.io/',
    description: 'Led a team of 5 engineers to develop a scalable microservices architecture. Improved system performance by 40% through optimization techniques. Implemented Ditributed data processing pipelines reducing server workload time by 70%.',
    skills: ['Ruby on Rails', 'AWS', 'MySQL', 'React', 'Redis', 'AMQP', 'Pusher', 'GraphQL', 'GO']
  },
  {
    title: 'Backend Engineer',
    company: 'Quidax',
    period: '2022 - 2023',
    url: 'https://www.quidax.io/',
    description: 'Developed and maintained enterprise applications using Ruby on Rails. Designed and implemented RESTful APIs serving millions of requests daily. Mentored junior developers and conducted code reviews.',
    skills: ['Ruby on Rails', 'AWS', 'MySQL', 'React', 'Redis', 'AMQP', 'Pusher', 'REST API', 'Docker']
  },
  {
    title: 'Software Engineer',
    company: 'Appzone',
    period: '2019 -  2022',
    url: 'https://appzonegroup.com/',
    description: 'Built and maintained web applications using C#, MVC.NET and ASP.NET. Collaborated with business analysts to implement responsive UIs and banking solutions. Automated Loan disbursement processing increasing efficiency by 80%.',
    skills: ['C#', 'Javascript', 'MSSQL', 'Ext.js', 'SOAP', 'REST API', 'Azure', 'Entity Framework']
  }
];

const projects = [
  {
    title: 'Maze Runner',
    description: 'An interactive Python application that dynamically generates and solves mazes using depth-first search algorithms, featuring real-time visualization of both the maze creation and solving processes.',
    technologies: ['Python', 'TKinter', 'UnitTest'],
    image: 'https://res.cloudinary.com/dj7y9zirl/image/upload/v1750252756/maze_runner_havp2o.gif',
    link: 'https://github.com/see-why/Maze-Runner'
  },
  {
    title: 'UDP Network stack',
    description: 'A low-level network packet analyzer that demonstrates raw socket programming by capturing and parsing UDP packets at the Ethernet frame level, providing deep visibility into network traffic.',
    technologies: ['Ruby', 'Docker', 'UDP', 'Bash', 'Python'],
    image: 'https://res.cloudinary.com/dj7y9zirl/image/upload/v1750254417/udp_packet_parser.png',
    link: 'https://github.com/see-why/UDP_Packet_Parser'
  },
  {
    title: 'JWT Auth',
    description: 'A lightweight, modular Ruby on Rails authentication service that leverages JSON Web Tokens (JWT) to provide secure, stateless user authentication and authorization.',
    technologies: ['Rails', 'JWT', 'Docker', 'CI/CD', 'PostgresQL'],
    image: 'https://res.cloudinary.com/dj7y9zirl/image/upload/v1750255826/jwt.jpg',
    link: 'https://github.com/see-why/chill_jwt'
  }
]; 