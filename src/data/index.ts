const data = {
  name: 'Ayoub Jridi',
  image: '/avatar2.jpeg',
  username: 'AyoubJridi0161',
  keywords:
    'Ayoub, Jridi, Ayoub Jridi, web dev, Student',
  profession: 'IoT Student',
  intro:
    'Looking to get an end-of-study internship in web or embedded systems, I love to learn new things and share my knowledge with others. I teach others by creating content!',
  about:
    "I am a proactive and curious individual with a passion for learning and tackling meaningful challenges. I am currently exploring advanced topics such as cloud security and IoT systems, driven by my ambition to develop innovative solutions. One of my current projects involves creating a Smart Battery Degradation Mitigation System using Arduino, which reflects my interest in integrating technology to solve real-world problems. I am resourceful, adaptable, and committed to expanding my skills to contribute effectively in dynamic and evolving fields.",
  website: '/',
  projects: [
    {
      name: 'proload',
      image: '/projects/proload.png',
      about:
        "cloud-based Software as a Service (SaaS) solution designed to revolutionize the weightlifting ecosystem. This full-stack web application serves as a centralized hub for lifters to meticulously log workouts, track progress, and analyze performance trends, while simultaneously enabling coaches to remotely monitor and guide their clients'training regimens.",
      tech: [ 'Next.js', 'ShadcnUI', 'Typescript', 'PostgreSQL','Auth.js'],
      links: {
        Github: 'https://github.com/ayoubjridi0161/proload-t3/',
        Live: 'https://proload.me/',
        
      },
      role: 'Fullstack',
    },
    {
      name: 'WeTravel',
      image: '/projects/weTravel.png',
      about:
        'web application tailored for smalltravel agencies to streamline their hotelreservation processes. Itintegrates seamlesslywith multiple hotel property management systems (PMS) viaRESTfulAPIs, enabling real-time room availability checks and instant booking confirmations.',
      tech: ['React.js', 'Material UI', 'NodeJS',"expressJS",'MongoDB'],
      links: {
        GitHub: 'https://github.com/ayoubjridi0161/reservationagency',
        Live: '#',
      },
      role: 'Front-end developer',
    },
  ],
  links: [
    {
      name: 'GitHub',
      icon: 'github.svg',
      link: 'https://github.com/ayoubjridi0161',
    },
    {
      name: 'Twitter',
      icon: 'twitter.svg',
      link: 'https://twitter.com/',
    },
    
    {
      name: 'Mail me',
      icon: 'mail.svg',
      link: 'mailto:jridiayoub@isitc.u-sousse.tn',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin.svg',
      link: 'https://www.linkedin.com/in/ayoub-jridi-34a4942a2',
    },
  ],
};

export default data;
