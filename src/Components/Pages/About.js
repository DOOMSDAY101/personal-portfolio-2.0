import React, { useEffect, useState } from 'react'
import './About.css'
import FolderIcon from 'remixicon-react/Folder3FillIcon'
import MessageIcon from 'remixicon-react/MailFillIcon'
import PhonenIcon from 'remixicon-react/PhoneFillIcon'
import DetailsIcon from 'remixicon-react/QuestionFillIcon'
import ExitIcon from 'remixicon-react/CloseFillIcon'

import ProfilePic from '../../images/profile.jpg'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import SEO from './SEO'

import AboutPageImg from '../../images/Aboutimg.png'

function SelectAboutOptions({ setDisplayContent, setBioheader }) {
    const contentOptions = {
        "_about-me": `
          /** 
           * 🧑 About me 
           * 
           * 👋 Hello there! I'm Ifeoluwa Sulaiman,
           * a dedicated & passionate full-stack web developer 
           * with over two years of hands-on experience in 
           * crafting websites with stunning UI and responsive
           * design, coupled with robust backend development 
           * skills.
           * 
           * 🛠️ My solid foundation in web development principles
           * equips me with the ability to tackle diverse
           * challenges encountered in my day-to-day life as a 
           * developer.  Each problem presents a learning 
           * opportunity, and I'm constantly expanding my 
           * knowledge base to stay ahead in this ever-evolving
           * field.
           * 
           * 💼 Currently, I'm freelancing and actively 
           * contributing to various open-source projects, always 
           * on the lookout for exciting challenges to tackle. I'm 
           * open to new opportunities and eager to take on 
           * projects and gigs that push my boundaries.
           * 
           * 🚀 I'm on a journey to transition into a full-time 
           * web developer, fueled by my passion for crafting 
           * exceptional digital experiences and making a 
           * meaningful impact in the tech industry.
           * 
           * 📧 Feel free to reach out to me at 
           * ifeoluwasulaiman30@gmail.com - let's connect 
           * and explore how we can collaborate to bring 
           * your ideas to life!
           */
        `,
        "_tech-stack": `
          /** 
           * 👨‍💻 Tech Stack
           * 
           * Here's a breakdown of my tech stack:
           * 
           * Frontend:
           * Languages: HTML5, CSS3, JavaScript (ES6+) 🌐
           * Frameworks/Libraries: React.js 🚀
           * State Management: Redux 🔑
           * 
           * Backend:
           * Languages: Node.js (JavaScript) 🚀
           * Frameworks: Express.js 🛠️
           * Databases: Firebase Firestore, SQL 📦
           * Authentication/Authorization: JWT, OAuth2, 
           * Firebase Authentication 🔒
           * 
           * Version Control:
           * Tools: Git, GitHub 🛂
           * 
           * Others:
           * Deployment: Heroku, Netlify, Vercel, Render 🚀
           * Package Managers: npm 📦
           * CI/CD: GitHub Actions ⚙️
           * API: Postman
           * Containerizarion: Docker
           * 
           * Soft Skills:
           * Communication 🗣
           * Collaboration 🤝
           * Time management ⏳
           * Continous Learning 📚
           */
        `,
        "_interest": `
          /** 
           * 🤸‍♂️ Hobbies/Interests
           * 
           * I enjoy doing a variety of things in my free time.
           *  Here are some of my favorite activities:
           * 
           * 📚 Learning New Things:
           * I have a strong curiosity for learning and enjoy 
           * exploring different subjects. Whether it's picking 
           * up a new skill like coding or delving into topics 
           * like history or psychology, I'm always eager to 
           * expand my knowledge and challenge myself 
           * intellectually.
           * 
           * 📖 Reading:
           * Reading is a cherished hobby of mine,  I 
           * particularly enjoy diving into books about 
           * technology, science fiction, and self-improvement,
           * where I can gain new insights.
           * 
           * 🎬 Watching Movies:
           * Watching movies is another passion of mine, 
           * especially sci-fi films that transport me to 
           * distant galaxies and futuristic worlds.
           * I love getting lost in captivating stories, 
           * exploring new concepts, and experiencing the 
           * creativity of filmmakers.
           * 
           * 🎮 Playing Games:
           * Playing games is a favorite way for me to relax 
           * and have fun. I enjoy both video games and board
           * games, as they provide a chance to strategize, 
           * problem-solve, and immerse myself in engaging 
           * worlds and stories.
           */
        `,
        "_education": `
        /**
         * 🏫 Education
         * 
         * - ALX School of Software Engineering May 2022 - Nov 
         * 2023:
         * 
         * At ALX School of Software Engineering 🖥️, I underwent 
         * a transformative educational experience that equipped 
         * me with a diverse range of skills and knowledge 
         * essential for success in the tech industry.
         * 
         * 💡 Problem-Solving and Critical Thinking:
         * ALX fostered a culture of problem-solving and 
         * critical  thinking, challenging me to tackle complex 
         * coding  challenges and find innovative solutions.  
         * Through hands-on projects and coding exercises, 
         * I honed my ability to  analyze problems, identify 
         * patterns, and devise  effective strategies for 
         * resolution.
         * 🤝 Teamwork and Collaboration:
         * Collaboration is at the heart of software
         * engineering,and at ALX, I had the opportunity
         * to collaborate with peers on various projects
         * and assignments.
         * 🚀 Growth Mindset and Continuous Learning:
         * One of the most valuable lessons I learned at ALX
         * is the importance of a growth mindset and the 
         * commitment to continuous learning. 
         * ALX instilled in me a passion for lifelong learning, 
         * encouraging me to seek out new opportunities for 
         * growth and development.
         * 📚 Soft Skills and Professional Development:
         * In addition to technical skills, ALX also emphasized
         * the importance of soft skills such as communication, 
         * time management, and problem-solving. 
         * 🌟 Technical Skills:
         * During my time at ALX, I gained proficiency in a wide 
         * array of technical areas, including:
         * Full-Stack Development: Integrating frontend and  
         * backend technologies to create seamless and   
         * responsive web applications.
         */
        `
    };


    useEffect(() => {
        setDisplayContent(contentOptions['_about-me']);
        setBioheader('_about-me');
        // eslint-disable-next-line
    }, []);


    function handleDisplayContent(option) {
        setDisplayContent(contentOptions[option]);
        setBioheader(option)
    }
    return (
        <div className='bio-details-summary'>
            <details className='bio-details'>
                <summary className='bio-sumary'><div className='bio-summary-tag'><FolderIcon className='bio-icon' />bio</div></summary>
                <div className='bio-content'>
                    <ul>
                        <li onClick={() => handleDisplayContent('_about-me')}>_about-me/bio</li>
                        <li onClick={() => handleDisplayContent('_tech-stack')}>_tech-stack/skills</li>
                        <li onClick={() => handleDisplayContent('_interest')}>_hobbies/interest</li>
                    </ul>
                </div>
            </details>
            <details className='bio-details'>
                <summary className='bio-sumary'><div className='bio-summary-tag'><FolderIcon className='bio-icon' color='#3A49A4' />education</div></summary>
                <div className='bio-content'>
                    <ul>
                        <li onClick={() => handleDisplayContent('_education')}>_education/training</li>
                    </ul>
                </div>
            </details>


        </div >
    )
}

function OtherContacts() {

    return (
        <div className='mobile-contact-details desktop-details'>
            <div className='contact-mail-session'>
                <div className='visible'>
                    <MessageIcon className='contacts-session-icon' /><a href='mailto:ifeoluwasulaiman30@gmail.com' target='_blank' rel='noreferrer' className='contact-session-link'>ifeoluwasulaiman30@gmail.com</a>
                </div>
            </div>
            <div className='contact-mail-session'>
                <div className='visible'>
                    <PhonenIcon className='contacts-session-icon' /><a href='https://wa.me/+2348088890349' target='_blank' rel='noreferrer' className='contact-session-link'>+2348088890349</a>
                </div>
            </div>
        </div>
    )
}

function CodeSnippet() {
    const [openItem, setOpenItem] = useState(null)
    const codeSnippet = [
        {
            id: 1,
            snippet: `const scrollContainerRef = useRef(null);

const scrollLeft = () => {
scrollContainerRef.current.scrollBy({ left: -1100, behavior:
'smooth'});
    };
        
const scrollRight = () => {
scrollContainerRef.current.scrollBy({ left: 1100, 
behavior: 'smooth' });
        }   `,
            details: 'Here\'s a code i implemented when developing one of my project.This code enables smooth horizontal scrolling within the project\'s interface. It utilizes React\'s useRef hook to reference the scrollable container and provides functions scrollLeft and scrollRight for left and right scrolling, enhancing the user experience during navigation.'
        },
        {
            id: 2,
            snippet: `useEffect(() => {
const storedLinks = localStorage.getItem('shorLink');
const storedNewLinks = localStorage.getItem('newLinks');
            
if (storedLinks && storedNewLinks) {
setStorageData(JSON.parse(storedLinks));
setNewLinks(JSON.parse(storedNewLinks));
        }
}, [])`,
            details: 'This code checks if both "shorLink"(the privously stored shortened links) and "newLinks"(newly stored shortened links) are present in the local storage. If found, it parses the stored JSON data and updates the component state variables storageData and newLinks accordingly, ensuring that the component displays the previously stored data upon reload.'
        },
        {
            id: 3,
            snippet: `const { getDatabase } = require('firebase-admin/database');
const admin = require('../config/firebase-config');
            
const db = admin.database();
const ref = db.ref('Products');
const dbData = await ref.once('value', (snapshot) => {
    if (!snapshot.val()) {
        console.log('Error reading database')
    } else {
        console.log(snapshot.val)
    }
})`,
            details: 'This Nodejs code fetches data from a Firebase Realtime Database using the Firebase Admin SDK in a Node.js environment. It accesses the database reference, retrieves the data once, and logs it if available, otherwise logs an error message.'
        },
        {
            id: 4,
            snippet: `const map = L.map('map').setView([0, 0], 1);
var marker = L.marker([0, 0]).addTo(map);
            
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
            
    map.setView([latitude,longitude], 8);
    marker.setLatLng([latitude, longitude]);
    marker.bindTooltip("Your current Location").openTooltip();
            
    navigator.geolocation.clearWatch;
}`,
            details: "This JavaScript code, I developed when building my IP address tracker app, utilizes Leaflet to initialize a map with a marker. The showPosition function updates the map with the user's current location, adjusting the view and moving the marker accordingly. Additionally, it displays a tooltip indicating the user's location.The clearWatch method is called on the geolocation navigator, likely intended for clearing any active watch position functionality."
        }
    ];

    function handleCancel(ind) {
        setOpenItem(null)

    }
    function handleDetails(ind) {
        setOpenItem(ind)
    }
    return (
        <>
            <p className='snippet-code-div-text'>&#47;&#47; Code snippet showcase:</p>

            {codeSnippet.map((val, ind) => (
                <div key={val.id} className='snippet-code-div-outer-box'>
                    <div className='snippet-code-div-info'>
                        <div className='snippet-code-div-user-info'>
                            <img src={ProfilePic} alt='pofile pic imag' className='snippet-code-div-img' />
                            <a href='https://github.com/DOOMSDAY101' target='_blank' rel='noreferrer' className='snippet-code-div-link'>@doomsday101</a>
                        </div>
                        <div className='snippet-code-div-details'>
                            <DetailsIcon className='details-icon' />
                            <p onClick={() => handleDetails(ind)} title='details of the code'>details</p>
                        </div>
                    </div>
                    <div className='code-snippet-code'><pre><code className='language-javascript' id='remove-bgc-code-snippet'>{val.snippet}</code></pre></div>
                    {openItem === ind && (
                        <div className='code-snippet-details'>
                            <p className='code-snippet-details-text'>{val.details}</p>
                            <ExitIcon className='details-exit-icon' onClick={() => handleCancel(ind)} />
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}
function About() {
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    const [displayContent, setDisplayContent] = useState("");
    const [bioHeader, setBioheader] = useState('');

    return (
        <div>
            <SEO title="IFEOLUWA | About me" image={AboutPageImg} description="Get to know the web developer behind the code! With a deep-rooted passion for crafting digital experiences, I bring creativity, expertise, and dedication to every project. Discover my journey, skills, and philosophy as I share insights into my career, achievements, and aspirations in the world of web development. I thrive on turning ideas into beautifully functional websites. Explore my about me page to learn more about who I am, what I do, and how I can help bring your web projects to life." />
            <div id='no-display'>
                <div className='contacts-header'>
                    <h1 className='contacts-header-text'>{bioHeader}</h1>
                </div>
                <section className='contact-side-section'>
                    <div className='details-summary'>
                        <h1 className='contact-header'>personal-info</h1>
                    </div>
                    <SelectAboutOptions setDisplayContent={setDisplayContent} setBioheader={setBioheader} />

                    <div className='details-summary'>
                        <h1 className='contact-header'>find-me-also-on</h1>
                    </div>
                    <OtherContacts />
                </section>
                <div className="content-disp" >
                    <div className='content-disp-div'>
                        <p>{displayContent}</p>
                    </div>
                    <div className='snippet-code-div'>
                        <CodeSnippet />
                    </div>
                </div>
            </div>
            <div className='mobile-display'>
                <div className='mobile-header-contact'>_projects</div>
                <details>
                    <summary>personal-info</summary>
                    <div className='mobile-contact-details'>
                        <SelectAboutOptions setDisplayContent={setDisplayContent} setBioheader={setBioheader} />
                    </div>
                </details>
                <details>
                    <summary>find-me-also-on</summary>
                    <OtherContacts />
                </details>
                <div className='mobile-display-bio'>
                    <p className='mobile_contacts-header-text' style={{ padding: 0, marginBottom: 15 }}>&#47;&#47; projects <span className='mobile-head-span'>/ bio</span></p>
                    <div className='mobile-bio-display'>
                        {displayContent}
                    </div>
                    <div className='mobile-snippet-code-div'>
                        <CodeSnippet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
