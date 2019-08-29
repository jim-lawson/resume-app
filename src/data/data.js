export const pageData = {
  pages: [
    {
      headerSize: 'large',
      hasTimeline: false,
      hasSkills: false,
      main: {
        article: {
          experience: [
            {
              id: 'maana',
              title: 'Senior UI Engineer',
              company: 'Maana',
              location: 'Bellevue',
              startDate: new Date(2015, 9),
              endDate: new Date(),
              sections: [
                {
                  heading: null,
                  body: [
                    `After 10 years at Microsoft, I was ready for a new challenge. Joining Maana marked a sea change in my 
                    career as I learned a whole new technology stack and new processes for developing and shipping software. 
                    Instead of using Microsoft technologies, we use Mac and Unix, and open-source libraries such as React. 
                    I learned Scala and was introduced to the concept of functional programming. In place of monolithic
                    software solutions, I was introduced to containers, microservices, and continuous delivery.`
                  ]
                },
                {
                  heading: 'Maana V2',
                  body: [
                    `For V2 we started with a clean slate, fully embracing more-modern, widely-supported technologies using 
                    React with Apollo (client and server) to leverage GraphQL for queries and data mutations, while the 
                    backend was broken out into microservices running in containers. As with V1, I focused on 
                    creating UI components including a new graph which included the ability to perform full CRUD operations in 
                    the graph itself, including "in-node editing" whereby users could edit the schemas backing the various nodes
                    directly in the graph. I created several other components including a search UI, a panel for exploring
                    different elements within the application, and several data visualizations.`
                  ]
                },
                {
                  heading: 'Maana V1',
                  body: [
                    `Version 1 of our SPA UI was created using ScalaJS and was under development when I joined Maana. 
                    The idea behind this language choice was that any developer in the company could work on the UI layer 
                    since the backend language of choice was Scala. In working on V1, I created our graph 
                    component using Cytoscape and produced several different custom layout routines needed to display 
                    graphs in various formats. I also implemented other visulizations using libraries such as D3. While I like 
                    Scala's elegance and many of its constructs, I decided this was a poor choice for coding UI as SclaJS not 
                    well-supported and working with libraries such as React was downright painful.`
                  ]
                }
              ]
            },
            {
              id: 'microsoft',
              title: 'Software Development Engineer',
              company: 'Microsoft',
              location: 'Bellevue',
              startDate: new Date(2005, 9),
              endDate: new Date(2015, 8),
              sections: [
                {
                  heading: 'Bing Carousel Framework (2013 - 2015)',
                  body: [
                    `I designed a new "2-dimensional" carousel consisting of images that when clicked expanded in place to 
                    reveal a list of related items. I designed a common set of view models and templates to interface with existing 
                    carousel data models, ensuring that I accounted for all existing needs while incorporating feature 
                    needs for upcoming carousels. I led a cross-team collaboration to migrate all existing carousels to the 
                    new framework. I also created visual parity tests to protect against regressions during migration.`
                  ]
                },
                {
                  heading: 'Bing Video Results Page (2012 - 2013)',
                  body: [
                    `I led the effort to implement a visual refresh of the VRP, which involved completely overhauling the layout 
                    and adding new visual components. I identified discrete pieces of the visual refresh project that could be assigned to individual developers, 
                    and coordinated the effort to write design specs for each component, identified work items, and established a 
                    schedule for the deliverables.`
                  ]
                },
                {
                  heading: 'Bing AutoSuggest (2009- 2012)',
                  body: [
                    `I created the first auto-suggest implementation for Bing (which is still in use today). I created a “Direct-Nav” 
                    feature which surfaced suggestions that took the user directly to well-known external websites for 
                    queries with navigational intent, and other “rich suggestions” that contained images for well-known
                    entities, extra metadata, etc. and “quick answers”. I created the "horizontal auto-suggest" feature 
                    to help users quickly add words to their query as they typed. I led cross-team collaboration to implement Bing's
                    AutoSuggest on MSN.com.`
                  ]
                },
                {
                  heading: 'Bing Client Script Infrastructure (2009 - 2012)',
                  body: [
                    `Bing continued to grow rapidly as Microsoft invested heavily in search. As more UI engineers were brought 
                    on board, we started to have duplicated script throughout our code base. I took inventory of all existing script functionality on Bing, identified areas in which we had duplicated 
                    code, boiled-down code into reusable classes/functions resulting in a library that could be shared by all 
                    UI engineers. Wrote a check-in test that analyzed script changes for non-compliance with the new script 
                    framework. I maintained the new script framework and added new functionality as needed.`
                  ]
                },
                {
                  heading: 'Bing Homepage (2009, 2010)',
                  body: [
                    `The Bing homepage is well-known for it rich-image background, which is rotated daily. I helped create this 
                    experience as part of a “hack-day” project. Implemented “Homepage Hotspots”, which are the small boxes that 
                    appear as you move your cursor  which then expand to show additional information about the image. I created 
                    the image viewer which allows users to view previous days' homepage images.`
                  ]
                },
                {
                  heading: 'MSN Search/Windows Live Search (2005 - 2009)',
                  body: [
                    `MSN Search and Windows Live Search were predecessors of Bing.com. I updated and maintained current UX 
                    production code while also prototyping and building components for what would eventually become features on 
                    Bing, running each through usability studies/testing, then as experiments on small segments of production 
                    traffic.`
                  ]
                }
              ]
            }
          ]
        },
        sidebar: {
          sections: [
            {
              title: 'About Me',
              icon: 'aboutMe',
              body: [
                `I love writing code. I especially love writing code to create rich, compelling, user interfaces.`,
                `There are few things I enjoy more than a challenging UI problem - whether it's a web site, a single-page
                 application, a mobile app, a game, a Photoshop document, or even a 3D model.`,
                `For nearly twenty five years, I have built up a solid portfolio and skill set as a UI engineer. Including my 
                years in television/video production, and in design/layout in print media, I have enjoyed working 
                in visual communications my entire adult life.`,
                `I am a creative individual with the technical acumen and organizational and communication skills to take 
                on challenging projects and see them through to completion with rewarding results.`
              ]
            },
            {
              title: 'Social',
              icon: 'social',
              images: [
                {
                  image: 'linkedIn',
                  label: 'Jim Lawson',
                  href: 'http://www.linkedin.com/in/jim-lawson-55bb7924/',
                  alt: 'LinkedIn',
                  width: 20,
                  height: 20
                },
                {
                  image: 'twitter',
                  label: '@JimLawson_dev',
                  href: 'http://twitter.com/JimLawson_dev',
                  alt: 'Twitter',
                  width: 20,
                  height: 20
                },
                {
                  image: 'facebook',
                  label: 'Jim Lawson',
                  href: 'https://www.facebook.com/james.b.lawson',
                  alt: 'Facebook',
                  width: 20,
                  height: 20
                }
              ]
            },
            {
              title: 'Interests',
              icon: 'interests',
              body: [
                `For the past 15 years I have enjoyed the most important and rewarding job I've ever had; I am
                the father of three wonderful children - triplets, in fact.`,
                `Raising my daughter and two boys has helped me to grow into the hardworking, responsible person that I am - only bested 
                by the love and support of my incredible wife to whom I have been married for 19 years.`,
                `When I'm not attending my son's soccer matches, the kids' band and orchestra concerts, or vacationing with my
                family, I'm typically working on my house, shooting and editing video, playing XBOX, and oftentimes
                writing code - either just for fun, or to learn new technologies - which I love to do.`
              ]
            },
            {
              title: 'Resume Code',
              icon: 'code',
              intro: ['This resume was built as a React app.'],
              images: [
                {
                  image: 'github',
                  label: 'Source Code',
                  href: 'https://github.com/jim-lawson/resume-app',
                  alt: 'GitHub',
                  width: 20,
                  height: 20
                },
                {
                  image: 'docker',
                  label: 'React App Image',
                  href: 'https://hub.docker.com/r/jimlawson/resume-app',
                  alt: 'Docker',
                  width: 20,
                  height: 20
                }
              ]
            }
          ]
        }
      }
    },
    {
      headerSize: 'small',
      hasTimeline: true,
      hasSkills: true,
      main: {
        article: {
          experience: [
            {
              id: 'alki',
              title: 'Founder, UI Engineer',
              company: 'Alki Technology',
              location: 'Seattle',
              startDate: new Date(1999, 7),
              endDate: new Date(2005, 9),
              sections: [
                {
                  heading: '',
                  body: [
                    `In 1999 I joined forces with two partners with whom I had worked previously in my contract roles at 
                    Microsoft to form "Alki Technology". This was a software company that specialized in creating custom
                    websites and single-page applications. Originally based in West Seattle, the company moved to a new office
                    in the Fremont neighborhood of Seattle in 2002 as we increased our customer base and added employees.`,
                    `My duties as partner included designing and developing user interfaces for all projects, managing our QA
                    team, and financial accounting duties which included managing accounts-payable/receivable, keeping our books
                    and meeting with our CPA on a 
                    querterly basis.`,
                    `Customers included the University of Washington Housing and Food Services (UW HFS), Expedia, Ads.com, 
                    Storm King Art Center, Parfumerie Nasreen, Computer Stop, and others. Major projects included custom 
                    content management systems for UW HFS and Ads.com, as well as the public-facing Ads.com website.`
                  ]
                }
              ]
            },
            {
              id: 'expedia',
              title: 'Web Development Engineer',
              company: 'Expedia',
              location: 'Redmond',
              startDate: new Date(1998, 0),
              endDate: new Date(1999, 5),
              sections: [
                {
                  heading: '',
                  body: [
                    `After 2 years with MSN I found a new contracting oppourtunity at Microsoft's new travel website, Expedia.
                    As with my contracts at MSN, I worked with designers and editorial staff memebers to create articles for the
                    public facing website. Further, I created browser-based tools that were used interally by our team to automate
                    tasks including an application that allowed team members to copy site resources between environments.`,
                    `By this time, I had learned CSS and JavaScript, both relatively new technologies at the time. Internet Explorer
                    4 had been released roughly a year prior which, along with Netscape, gave birth to DHTML which I fully
                    embraced with excitment as I could see the potential for creating dynamic user interfaces with relative ease, 
                    especially after having learned to create Java Applets with its clunky AWT toolkit.`
                  ]
                }
              ]
            },
            {
              id: 'msn',
              title: 'Web Development Engineer',
              company: 'MSN',
              location: 'Redmond',
              startDate: new Date(1996, 1),
              endDate: new Date(1998, 0),
              sections: [
                {
                  heading: '',
                  body: [
                    `My career in software development began in 1996 working on a contract basis for Microsoft's MSN
                    network, specifically Music Central - a website that served as a companion for their CD-ROM
                    product of the same name. I produced web pages by hand from comps delivered by the design
                    team, with content delivered from the editorial team and we published updates to the 
                    public-facing website on a monthly basis.`,
                    `In 1997, the product grew to included music-related content from third-party providers to 
                    supplement the orignal content produced by our team. It was at this time that I was learning Perl
                    because I wanted to learn how to write CGI scripts to receive and process data submitted via HTML
                    forms. I quickly realized the text-processing power of Perl and wrote scripts that took plain text
                    and RTF documents delivered from our third-party contributors to produce HTML pages which were published
                    to the site - a process that used to be done by hand.`
                  ]
                }
              ]
            }
          ]
        },
        sidebar: {
          sections: [
            {
              title: `What's Cookin'`,
              icon: 'whatsCookin',
              intro: [
                `Hot out of the oven this summer is a React Native phone app I created for solving puzzles 
                for the most-popular, crossword-style games.`
              ],
              images: [
                {
                  image: 'whatsCookin',
                  alt: 'Word Cheater - React Native iPhone App',
                  width: 125,
                  height: 248,
                  roundedCorners: true,
                  verticalMargins: true
                }
              ],
              body: [
                `As mentioned before, I love learning new technologies. I had built up my React skills over the past
                couple of years, but I had yet to explore the world of React Native.`,
                `What started as a fun coding exercise - a Node.js script that parses a dictionary
                to find words that contain the letters in a puzzle - soon became the driver for learning how to create
                a phone app using React Native.`,
                `While I'm not the first one to create such an app, I am currently working to submit it to app stores
                just to experience the full process of shipping a mobile app.`
              ]
            }
          ]
        }
      }
    }
  ]
}

export const timelineData = pageData.pages
  .map(page => {
    return page.main.article.experience.map(exp => {
      const { company, startDate, endDate } = exp
      const data = {
        label: company,
        startDate,
        endDate
      }

      return data
    })
  })
  .flat()
  .reverse()

export const skillsData = [
  {
    name: 'HTML/CSS',
    percentage: '95'
  },
  {
    name: 'JS/ES6',
    percentage: '95'
  },
  {
    name: 'TypeScript',
    percentage: '80'
  },
  {
    name: 'Node.js',
    percentage: '70'
  },
  {
    name: 'React',
    percentage: '80'
  },
  {
    name: 'React Native',
    percentage: '75'
  },
  {
    name: 'GraphQL',
    percentage: '75'
  },
  {
    name: 'Apollo Client',
    percentage: '75'
  },
  {
    name: 'Angular',
    percentage: '55'
  },
  {
    name: 'Firebase',
    percentage: '55'
  },
  {
    name: 'Jest',
    percentage: '65'
  },
  {
    name: 'Puppeteer',
    percentage: '65'
  },
  {
    name: 'C#',
    percentage: '75'
  },
  {
    name: 'Java',
    percentage: '65'
  },
  {
    name: 'Scala',
    percentage: '65'
  }
]
