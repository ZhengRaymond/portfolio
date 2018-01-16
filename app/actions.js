export const WORK_INFO = 'WORK_INFO';
export const PROJECT_INFO = 'PROJECT_INFO';

export const fetch_works = () => {
  var data = [
    {
      title: 'Etsy',
      link: 'etsy.com',
      subtitle: [
        'May 2018 - August 2018',
        'New York',
        'Marketing Services Fullstack'
      ],
      details: [
        '...'
      ],
      skills: [
        '...'
      ]
    },
    {
      title: 'Homer Logistics',
      link: 'https://www.homerlogistics.com',
      subtitle: [
        'Jan 2018 - Present',
        'New York',
        'Operations Research Intern'
      ],
      details: [
        '...'
      ],
      skills: [
        '...'
      ]
    },
    {
      title: 'AppDirect',
      link: 'https://www.appdirect.com/',
      subtitle: [
        'May 2017 - Aug 2017',
        'Montreal',
        'Backend Developer'
      ],
      details: [
        'Developed and maintained "Orchard", a highly efficient and fast environment provisioner for AppDirect engineers to develop on. The UI updates saved at 80% of clicks, monitored using analytics tools like HeapAnalytics integrated through segment.io.',
        'Updated UI and implemented features from Kubernetes 1.5 to 1.7 update to allow better debugging, smoother and quicker updates.',
	      'Created frontend and persistent storage schema for Duct, a secrets and microservice configuration tool, using MongoDB, React, Express, and Node.',
        'Implemented GraphQL for Duct. This will later be very important, as Duct is designed to be used alongside AppDirect\'s existing infrastructure tools, meaning it will be processing huge amounts of information. Due to Duct\'s very interwoven/coupled data, this will make data fetching far easier and efficient.',
        'Implemented Chatops server for platform tools, as well as integrations for 3 of these tools. This eliminates the need for admin UI dashboards, allowing platform admins to receive, review, and solve support tickets via Slack. This is extremely helpful, as the context switching forced by the support tickets heavily impacts productivity. In fact, a 4th of the platform team is always boggled down as "support week engineer" to solely handle these support tickets.'
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
        'Used Selenium and Python to implement testing, logging, and analytics. Eliminated repetitive work previously done by HR or other developers.'
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
      title: 'Total Control Rent',
      link: 'https://github.com/ZhengRaymond/nearest-housing-by-transit',
      subtitle: [
        'December 2017 - Present'
      ],
      details: [
        'Scrapes various housing websites like Craigslist, Airbnb, Streeteasy, etc. for housing, analyzes, and presents data',
        'Visualizes housing options with data on Crime rate, commute time, local amenities, local cuisine, etc.'
      ],
      skills: [
        'Node.js, Cheerio, React, Leaflet, Google Maps, Route360'
      ]
    },
    {
      title: 'Stylezure',
      link: 'https://github.com/ZhengRaymond/Stylezure',
      subtitle: [
        'September 2017',
        'Hack The North'
      ],
      details: [
        'Chatbot that scrapes for pictures online, and takes photos of users, then identifies items of clothing in the images. It then gives style advice by comparing what it found as trendy and what the user is wearing, and suggests improved alternatives on Amazon.',
        'Built in a team of 4. Work was split between working with Azure, Watson, and GCP. I was responsible for Azure Bot/NLP, but the work turned out to relatively straightforward, as well as having really long build times. Hence, I later worked on integrating the vision APIs into our Azure bot.'
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
        'Scrapes tweets from Twitter, and uses a soft hierarchical clustering model to find important localized news like car accidents, floods, weather alerts, etc.',
        'I created the frontend and helped trained the data with a k-means clustering model. Within the frontend, I used D3 map projections but split down into more reusable React Components.'
      ],
      skills: [
        'React', 'Redux', 'D3.js', 'Twitter API', 'Tensorflow'
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
        'Web application that tracks a musician’s sound in order to automatically display the correct sheet music in accordance to his location in the song.',
        'Worked with a UI designer in a team of 2. I was responsible for the piano functionality as well as the algorithm behind tracking the musician\'s playing.'
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
        'Uses a neural network to teach a computer how to play Tetris indefinitely. The program is good enough to last millions of lines until a specific sequence of blocks causes (mathematically impossible) a inevitable loss.',
        'Worked in a team of 2. Responsible for the logistic regression algorithm, as well as the web application demonstration.'
      ],
      skills: [
        'Node.js', 'C++', 'Logistic Regression'
      ]
    }
  ]

  return (dispatch) => dispatch({ type: PROJECT_INFO, payload: data });
}
