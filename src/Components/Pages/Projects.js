import React, { useEffect, useState } from 'react'
import './Project.css'
import SvgIcon from './SvgIcon';
import GithubIcon from 'remixicon-react/GithubFillIcon'
import { motion } from 'framer-motion'


import Project1Img from '../../images/project1.png'
import Project2Img from '../../images/project2.png'
import Project3Img from '../../images/project3.png'
import Project4Img from '../../images/project4.png'
import Project5Img from '../../images/project5.png'
import Project6Img from '../../images/project6.png'
import Project7Img from '../../images/project7.png'
import Project8Img from '../../images/project8.png'
import Project9Img from '../../images/project9.png'
import Project10Img from '../../images/project10.png'
import Project11Img from '../../images/project11.png'

import ProjectPageImg from '../../images/Projectimg.png'
import SEO from './SEO';

// CHECKBOX COMPONENTS
const LangIcons = {
    React: 'M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z',
    HTML: 'M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z',
    CSS: 'M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z',
    Nodejs: 'M12.8873 1.36173C12.3396 1.03958 11.6604 1.03958 11.1127 1.36173L3.36271 5.92056C2.8282 6.23498 2.5 6.8088 2.5 7.42894V16.571C2.5 17.1912 2.8282 17.765 3.36272 18.0794L5.98596 19.6225C7.31923 20.4068 9 19.4454 9 17.8986V7.74655H7V17.8986L4.5 16.428V7.57193L12 3.16016L19.5 7.57193V16.428L12 20.8398L10.2316 19.7996L9.21757 21.5234L11.1127 22.6382C11.6604 22.9604 12.3396 22.9604 12.8873 22.6382L20.6373 18.0794C21.1718 17.765 21.5 17.1912 21.5 16.571V7.42894C21.5 6.8088 21.1718 6.23498 20.6373 5.92056L12.8873 1.36173ZM13.9999 7.49998C12.6372 7.49998 11.6712 7.85114 11.0504 8.46993C10.4336 9.08484 10.3135 9.80885 10.3135 10.2313C10.3135 10.7862 10.4705 11.289 10.7951 11.7048C11.1076 12.1053 11.5199 12.3537 11.9146 12.5159C12.6341 12.8116 13.5358 12.9086 14.2587 12.9863L14.346 12.9957C15.1774 13.0856 15.7998 13.1627 16.2263 13.3411C16.4189 13.4217 16.4983 13.4954 16.531 13.5379C16.5524 13.5658 16.5934 13.6278 16.5934 13.7977C16.5934 14.0618 16.5027 14.2319 16.2204 14.3926C15.873 14.5904 15.2596 14.7396 14.3368 14.7396C13.4218 14.7396 12.7838 14.5705 12.4192 14.3181C12.1357 14.1218 11.9273 13.821 11.9822 13.1683L9.98923 13.0007C9.88075 14.29 10.3479 15.3167 11.2808 15.9625C12.1325 16.5521 13.2518 16.7396 14.3368 16.7396C15.414 16.7396 16.4289 16.5753 17.2098 16.1307C18.0558 15.6491 18.5934 14.8482 18.5934 13.7977C18.5934 13.2414 18.4381 12.7369 18.1162 12.3184C17.8054 11.9144 17.3942 11.6617 16.9981 11.496C16.2701 11.1915 15.3576 11.0932 14.6296 11.0147H14.6296L14.5609 11.0073C13.7274 10.9172 13.1036 10.8423 12.6748 10.666C12.4808 10.5863 12.4025 10.5137 12.3716 10.4742C12.3528 10.4501 12.3135 10.394 12.3135 10.2313C12.3135 10.1538 12.3363 10.0121 12.4624 9.88637C12.5847 9.76449 12.9618 9.49998 13.9999 9.49998C14.9904 9.49998 15.5674 9.60515 15.897 9.80064C16.1123 9.92838 16.3451 10.1633 16.3761 10.9329L18.3745 10.8524C18.3243 9.60675 17.8694 8.64527 16.9173 8.08051C16.0795 7.58349 15.0094 7.49998 13.9999 7.49998Z',
    Firebase: 'M6.75651 1.50129L4 18.4998L4.00007 18.4998L9.47342 4.81645L7.69485 1.35292C7.47439 0.923595 6.83377 1.02489 6.75651 1.50129ZM11.5638 4.31793L4.00008 18.4998L4.00012 18.4999L13.8396 6.94912L12.4412 4.32699C12.2546 3.9771 11.7558 3.97408 11.5638 4.31793ZM10.94 22.8373L4.00013 18.4999L17.31 5.66535C17.6037 5.39537 18.0834 5.56273 18.1424 5.96076L20 18.4998L13.06 22.8373C12.4115 23.2426 11.5885 23.2426 10.94 22.8373Z',
    Javascript: 'M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z'
}
function ChooseLang({ handleFilterButtonClick }) {
    const animationVariantsChildren = {
        hidden: {
            y: 30
        },
        visible: {
            y: 0,

            transition: {
                delay: 0.2,
                duration: 0.7
            }
        }
    }
    return (
        <>
            {Object.entries(LangIcons).map(([lang, path], ind) => (

                <div key={ind} className='checkbox-label-div'>
                    <motion.label className='checkbox-label' variants={animationVariantsChildren} initial="hidden" animate="visible">
                        <input type='checkbox' className='checkboxes' onChange={() => handleFilterButtonClick(lang)} />
                        <div className='checkbox-icon-container'>
                            <SvgIcon path={path} color="currentColor" className="checkbox-icon" />
                            <p>{lang}</p>
                        </div>
                        <span className='checkmark'></span>
                    </motion.label>
                </div>
            ))}
        </>
    )
}

// DISPLAY PROJECTS FUNCTION
function DisplayProjects({ filteredItems }) {

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 * index,
            },
        }),
    };
    return (
        <>
            {filteredItems.map((project, idx) => (
                <motion.div key={`project-${idx}`} className='project-card' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" custom={idx} viewport={{ once: true }}>
                    <p className='project-id'>{project.title}</p>
                    <div className='project-box'>
                        <div className='project-img'>
                            <motion.img whileHover={{ scale: 0.8, rotate: 5 }} whileTap={{ scale: 0.8, rotate: 5 }} src={project.img} loading='lazy' className='project-img-card' alt={`project-img-${idx}`} />

                            <div className='project-icon'>
                                {
                                    project.tag.length > 0 && (
                                        <SvgIcon path={LangIcons[project.tag[0]]} color="currentColor" className="Project-icons-project" />
                                    )
                                }
                            </div>
                        </div>
                        <div className='project-desc'>
                            <div>
                                <p className='project-desc-text'>{project.desc}</p>
                            </div>
                            <div className='view-project-links'>
                                <a href={project.projectLink} target='_blank' rel="noreferrer" className='project-live-link' title='live site link'>view-project</a>
                                <a href={project.githubLink} target='_blank' rel='noreferrer' className='project-github-icon' title='github project link'><GithubIcon className='project-github-icon-2' /></a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    )
}


function Projects() {
    // eslint-disable-next-line
    const Projects = [
        {
            id: "Project 1",
            title: "_ip-address-tracker",
            img: Project1Img,
            tag: ["Javascript"],
            desc: "A web application to track IP addresses developed using JavaScript.",
            githubLink: "https://github.com/DOOMSDAY101/ip-address-tracker",
            projectLink: "https://ip-address-tracker-five-amber.vercel.app/",
        },
        {
            id: "Project 2",
            title: "_fullstack-ecommerce-site",
            img: Project2Img,
            tag: ["Nodejs", "React", "Firebase"],
            desc: " A full-stack e-Commerce website built with React, Node.js, and Firebase.",
            githubLink: "https://github.com/DOOMSDAY101/fullstack-ecommerce-site",
            projectLink: "https://ifeoluwa-exclusive-e-commerce-site.netlify.app",
        },
        {
            id: "Project 3",
            title: "_url-shortener",
            img: Project3Img,
            tag: ["React"],
            desc: "A URL shortening service developed using React.",
            githubLink: "https://github.com/DOOMSDAY101/Url-shortener2.0",
            projectLink: "https://url-shortener2-0.vercel.app/",
        },
        {
            id: "Project 4",
            title: "_ecommerce-product-page",
            img: Project4Img,
            tag: ["Javascript"],
            desc: "A product page for an eCommerce platform, created with JavaScript.",
            githubLink: "https://github.com/DOOMSDAY101/ecommerce-product-page",
            projectLink: "https://ecommerce-product-page-black-nine.vercel.app/",
        },
        {
            id: "Project 5",
            title: "_javascript-calculator-app",
            img: Project5Img,
            tag: ["Javascript"],
            desc: "A modern calculator application built using JavaScript.",
            githubLink: "https://github.com/DOOMSDAY101/calculator-app",
            projectLink: "https://calculator-app-xi-one.vercel.app",
        },
        {
            id: "Project 6",
            title: "_advice-generator-site",
            img: Project6Img,
            tag: ["Javascript", "HTML", "CSS"],
            desc: "An advice generating site, developed with HTML, CSS, and JavaScript.",
            githubLink: "https://github.com/DOOMSDAY101/Advice-generator",
            projectLink: "https://advice-generator-blue-nu.vercel.app/",
        },
        {
            id: "Project 7",
            title: "_tip-app-calculator",
            img: Project7Img,
            tag: ["Javascript"],
            desc: "A tip calculator application implemented in JavaScript.",
            githubLink: "https://github.com/DOOMSDAY101/Tip-app-calculator",
            projectLink: "https://tipapp-calculator.netlify.app",
        },
        {
            id: "Project 8",
            title: "_personal-portfolio",
            img: Project8Img,
            tag: ["HTML", "CSS"],
            desc: "A personal portfolio website designed with HTML and CSS.",
            githubLink: "https://github.com/DOOMSDAY101/personal-portfolio",
            projectLink: "https://ifeoluwa-sulaiman.netlify.app",
        },
        {
            id: "Project 9",
            title: "_ui-design-nft-preview-card",
            img: Project9Img,
            tag: ["HTML", "CSS"],
            desc: " A UI design project focusing on NFT preview cards, developed with HTML and CSS.",
            githubLink: "https://github.com/DOOMSDAY101/nft-preview-card",
            projectLink: "https://nftreviewcard.netlify.app",
        },
        {
            id: "Project 10",
            title: "_product-review-card",
            img: Project10Img,
            tag: ["HTML", "CSS"],
            desc: " component for displaying product reviews, created with HTML and CSS.",
            githubLink: "https://github.com/DOOMSDAY101/product-review-card-component",
            projectLink: "https://productreview-card-main.netlify.app",
        },
        {
            id: "Project 11",
            title: "_personal-portfolio-2.0",
            img: Project11Img,
            tag: ["React"],
            desc: "An updated version of the personal portfolio website, redesigned with React.",
            githubLink: "https://github.com/DOOMSDAY101/personal-portfolio-2.0",
            projectLink: "https://dev-ife.netlify.app/",
        }
    ];
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(Projects)
    const [displayProjectsName, setDisplayProjectsName] = useState('')

    function handleFilterButtonClick(selectedLang) {
        if (selectedFilters.includes(selectedLang)) {
            let filters = selectedFilters.filter((el) => el !== selectedLang);
            setSelectedFilters(filters);
            setDisplayProjectsName(displayProjectsName.replace(selectedLang + ';', ''));

        } else {
            setSelectedFilters([...selectedFilters, selectedLang])
            setDisplayProjectsName(displayProjectsName + selectedLang + '; ');
        }
    }

    useEffect(() => {
        filterItems();
        // eslint-disable-next-line
    }, [selectedFilters])

    function filterItems() {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedLang) => {
                let temp = Projects.filter((item) => item.tag.includes(selectedLang));
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setDisplayProjectsName('')
            setFilteredItems([...Projects])
        }
    }

    return (
        <div>
            <SEO title="IFEOLUWA | Project Page" image={ProjectPageImg} description="Explore my portfolio of innovative web development projects! Each project showcases my expertise in frontend and backend technologies. Dive into case studies, view project demos, and discover the technologies and techniques behind each creation. Whether you're seeking inspiration, evaluating my skills, or looking for a talented developer for your next project, my project page has something for you. Let's collaborate and bring your vision to life!" />
            <div id='no-display'>
                <div className='contacts-header'>
                    <h1 className='contacts-header-text'>{displayProjectsName.length > 0 ? displayProjectsName : 'All projects'}</h1>
                </div>
                <section className='contact-side-section'>
                    <div className='details-summary'>
                        <h1 className='contact-header'>projects</h1>
                    </div>
                    <ChooseLang handleFilterButtonClick={handleFilterButtonClick} />
                </section>
                <div className='project-disp'>
                    <DisplayProjects filteredItems={filteredItems} />
                </div>
            </div>
            <div className='mobile-display'>
                <div className='mobile-header-contact'>_projects</div>
                <details>
                    <summary>projects</summary>
                    <div className='mobile-contact-details'>
                        <ChooseLang handleFilterButtonClick={handleFilterButtonClick} />
                    </div>
                </details>
                <div className="mobile-disp-projects" >
                    <p className='mobile_contacts-header-text'>&#47;&#47; projects <span className='mobile-head-span'>/ {displayProjectsName.length > 0 ? displayProjectsName : 'all projects'}</span></p>
                    <div className='mobile_disp_projects'>
                        <DisplayProjects filteredItems={filteredItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
