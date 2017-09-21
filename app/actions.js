export const WORK_INFO = 'WORK_INFO';
export const PROJECT_INFO = 'PROJECT_INFO';

export const fetch_works = () => {
  var data = [
    {
      title: 'AppDirect',
      link: 'https://www.appdirect.com/',
      subtitle: [
        'May 2017 - Aug 2017',
        'Montreal',
        'Backend Developer'
      ],
      details: [
        'Developed and maintained "Orchard", a highly efficient and fast environment provisioner for AppDirect engineers to develop on.',
        'Updated UI and implemented features from Kubernetes 1.5 to 1.7 update to allow better debugging, smoother and quicker updates.',
	      'Created frontend/backend for Duct, a secrets and microservice configuration tool (platform team’s open source project), MERN stack.',
        'Implemented Chatops for 5+ platform tools. This eliminates the need for admin UI dashboards, allowing platform admins to receive, review, and solve support tickets via Slack.'
      ],
      skills: [
        'React', 'GraphQL', 'Angular', 'AWS EC2', 'Kubernetes', 'Jenkins', 'Mongo/Express/Node'
      ]
    },
    {
      title: 'Genesys',
      link: 'http://www.genesys.com/',
      subtitle: [
        'Sept 2016 - Dec 2016',
        'Toronto',
        'Software Analyst'
      ],
      details: [
        'Automated monitoring of server health for platform and production servers. Directly fixed daily issues on 7 of these servers.',
        'Used Docker to solve incompatibility issues for many scripts, reducing the need for 20+ versions of every script, to just one.',
        'Used Selenium and Python to implement testing, logging, and analytics. '
      ],
      skills: [
        'Python, Selenium, Docker, Bash, Zabbix'
      ]
    },
  ]

  return (dispatch) => dispatch({ type: WORK_INFO, payload: data });
}

export const fetch_projects = () =>  {
  var data = [
    {
      title: 'Stylezure',
      link: 'https://github.com/ZhengRaymond/Stylezure',
      subtitle: [
        'September 2017',
        'Hack The North'
      ],
      details: [
        'Chatbot that scrapes for pictures online, and takes photos of users, then identifies items of clothing in the images',
        'Gives dressing advice based on comparison, and suggests fitting alternatives on Amazon'
      ],
      skills: [
        'Azure Bot/LUIS/Text Analytics, Google Vision, IBM Watson Vision, Amazon Product Ad API'
      ]
    },
    {
      title: 'Blip',
      link: 'https://github.com/ZhengRaymond/Blip',
      subtitle: [
        'September 2017',
        'PennApps XVI'
      ],
      details: [
        'Scrapes tweets from Twitter, and uses a soft hierarchical clustering model to find important localized news like car accidents, floods, weather alerts, etc.'
      ],
      skills: [
        'React', 'Redux', 'D3.js', 'Twitter API'
      ]
    },
    {
      title: 'Pianote',
      link: 'https://github.com/ZhengRaymond/pianoFlip',
      subtitle: [
        'March 2016',
        'StartHacks'
      ],
      details: [
        'Web application that tracks a musician’s sound in order to automatically display the correct sheet music in accordance to his location in the song.'
      ],
      skills: [
        'Angular', 'Node.js'
      ]
    },
    {
      title: 'Tetris Bot',
      link: 'https://github.com/ZhengRaymond/Machine-Learning-Tetris',
      subtitle: [
        'January 2016',
        'EngHack'
      ],
      details: [
        'Uses a neural network to teach a computer how to play Tetris indefinitely.'
      ],
      skills: [
        'Node.js', 'C++', 'Logistic Regression'
      ]
    }
  ]

  return (dispatch) => dispatch({ type: PROJECT_INFO, payload: data });
}
