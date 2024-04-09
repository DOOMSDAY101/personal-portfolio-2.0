import React, { useState, useRef, useEffect } from 'react'
import './Contact.css'
import MessageIcon from 'remixicon-react/MailFillIcon'
import PhonenIcon from 'remixicon-react/PhoneFillIcon'
import ExternalLinkIcon from 'remixicon-react/ExternalLinkFillIcon'
import { motion } from 'framer-motion'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import emailjs from '@emailjs/browser'

import ContactPageImg from '../../images/Contactimg.png'
import SEO from './SEO'

function Contact() {
    const [emailSent, setEmailSent] = useState(false)
    const [mailerName, setMailerName] = useState("");
    const [mailerEmail, setMailerEmail] = useState("")
    const [mailerMessage, setMailerMessage] = useState("")
    const [disabledButton, setDisabledButton] = useState(false)
    const PUBLIC_KEY = "SxZz-_J1rTofPuyYl";

    useEffect(() => {
        emailjs.init(PUBLIC_KEY)
    }, [])
    const [date] = useState(new Date())
    const form = useRef();
    const codeRef = useRef(null);


    useEffect(() => {
        hljs.highlightAll()
    }, [])

    useEffect(() => {
        if (codeRef.current.dataset.highlighted) {
            codeRef.current.dataset.highlighted = "";
            let block = document.querySelector('#send-mail-code')
            hljs.highlightBlock(block)
            codeRef.current.dataset.highlighted = true;
        }
    }, [mailerName, mailerEmail, mailerMessage, date])


    const animationVariants = {
        hidden: {
            x: -100,
        },
        visible: {
            x: 0
        }
    }
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
    const codeSnippetVariants = {
        hidden: {
            x: 200
        },
        visible: {
            x: 0,

            transition: {
                duration: 0.7
            }
        }
    }
    const MessageSnippetVariants = {
        hidden: {
            y: 200
        },
        visible: {
            y: 0,

            transition: {
                duration: 0.7
            }
        }
    }
    function handleNewMessage() {
        setEmailSent(!emailSent)
        setMailerName("");
        setMailerEmail("")
        setMailerMessage("")
    }
    function handleSubmitEvent(e) {
        e.preventDefault();
        const SERVICE_ID = "service_oqozyyh";
        const TEMPLATE_ID = "template_awdylki";
        setDisabledButton(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
            .then(() => {
                setEmailSent(!emailSent)
            }, (err) => {
                console.log(err)
                alert('An error occured, try again later')
            }).finally(() => {
                setDisabledButton(false)
            })

    }
    const sendMessageSnippet = `1   import emailjs from '@emailjs/browser';
2
3   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
4    
5       name: "${mailerName}",
6       email: "${mailerEmail}",
7       message: "${mailerMessage}",
8       date: "${date.toDateString()}"
9
10   }).then(() => {
11        console.log("Email sent successfully");
12    }, (err) => {
13        console.log("Message Not sent", err);
14   });
    `

    return (
        <div>
            <SEO title="IFEOLUWA | Contact page" image={ContactPageImg} description="Ready to collaborate? Connect with me today! Whether you have questions, project inquiries, or just want to say hello, I'm here to help. Fill out the contact form to get in touch, and I'll get back to you promptly. Let's discuss your web development needs and turn your ideas into reality." />
            <div className='desktop-view-contact'>
                <div className='contacts-header'>
                    <h1 className='contacts-header-text'>contacts</h1>
                </div>
                <section className='contact-side-section'>
                    <div className='details-summary'>
                        <motion.h1 variants={animationVariants} initial="hidden" animate="visible" className='contact-header'>contacts</motion.h1>
                    </div>

                    <div className='contact-details'>
                        <div className='contact-mail-session'>
                            <motion.div variants={animationVariantsChildren} initial="hidden" animate="visible" className='visible'>
                                <MessageIcon className='contacts-session-icon' /><a href='mailto:ifeoluwasulaiman30@gmail.com' target='_blank' rel='noreferrer' className='contact-session-link'>ifeoluwasulaiman30@gmail.com</a>
                            </motion.div>
                        </div>
                        <div className='contact-mail-session'>
                            <motion.div variants={animationVariantsChildren} initial="hidden" animate="visible" className='visible'>
                                <PhonenIcon className='contacts-session-icon' /><a href='tel:+2348088890349' target='_blank' rel='noreferrer' className='contact-session-link'>+2348088890349</a>
                            </motion.div>
                        </div>
                    </div>

                    <div className='details-summary'>
                        <motion.h1 variants={animationVariants} initial="hidden" animate="visible" className='contact-header'>find-me-also-on</motion.h1>
                    </div>

                    <div className='contact-details'>
                        <div className='contact-mail-session'>
                            <motion.div variants={animationVariantsChildren} initial="hidden" animate="visible" className='visible'>
                                <ExternalLinkIcon className='contacts-session-icon' /><a href='https://discord.com/sulaiman_ifeouwa' target='_blank' rel='noreferrer' className='contact-session-link'>Discord profile</a>
                            </motion.div>
                        </div>
                        <div className='contact-mail-session'>
                            <motion.div variants={animationVariantsChildren} initial="hidden" animate="visible" className='visible'>
                                <ExternalLinkIcon className='contacts-session-icon' /><a href='https://instagram.com/ifeoluwasulaiman30' target='_blank' rel='noreferrer' className='contact-session-link'>Instagram account</a>
                            </motion.div>
                        </div>
                        <div className='contact-mail-session'>
                            <motion.div variants={animationVariantsChildren} initial="hidden" animate="visible" className='visible'>
                                <ExternalLinkIcon className='contacts-session-icon' /><a href='https://wa.me/+2348088890349' target='_blank' rel='noreferrer' className='contact-session-link'>Whatsapp</a>
                            </motion.div>
                        </div>
                        <div className='contact-mail-session'>
                            <motion.div variants={animationVariantsChildren} initial="hidden" animate="visible" className='visible'>
                                <ExternalLinkIcon className='contacts-session-icon' /><a href='https://www.frontendmentor.io/profile/DOOMSDAY101' target='_blank' rel='noreferrer' className='contact-session-link'>Frontendmentor</a>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <div className='send-mail-session'>
                    <div className='send-me-a-mail'>
                        <motion.div variants={MessageSnippetVariants} initial="hidden" animate="visible" >
                            {emailSent ?
                                (

                                    <div className='message-sent'>
                                        {/** TO BE DISPLAYED WHEN THE EMAIL HAS BEEN SENT */}
                                        <h1 className='thank-you'>Thank You! &#x1F918;</h1>
                                        <p className='thank-you-message'>Your message has been accepted. <br />You will recieve answer really soon!</p>
                                        <button onClick={handleNewMessage} className='submit-btn submit-btn-1'>send-new-message</button>
                                    </div>

                                )
                                : (
                                    <div>
                                        {/** TO BE DISPLAYED WHEN THE EMAIL HAS NOT BEEN SENT YET */}
                                        <form ref={form} className='form-input' onSubmit={handleSubmitEvent} method='post'>
                                            <div className='field'>
                                                <label for="name" className='label-name'>_name:</label>
                                                <input type='text' required autoFocus id='name' spellCheck="false" name='from_name' className='input-text' value={mailerName} onChange={(e) => setMailerName(e.target.value)} />
                                            </div>
                                            <div className='field'>
                                                <label for="email" className='label-name'>_email:</label>
                                                <input type='email' required id='email' name='from_email' autoComplete='off' spellCheck="false" className='input-text' value={mailerEmail} onChange={(e) => setMailerEmail(e.target.value)} />
                                            </div>
                                            <div className='field'>
                                                <label for="message" className='label-name'>_message:</label>
                                                <textarea className='input-text-area' required spellCheck="false" name='message' id='message' value={mailerMessage} onChange={(e) => setMailerMessage(e.target.value)} />
                                            </div>
                                            <input type='submit' className='submit-btn' value="submit-message" disabled={disabledButton} />
                                        </form>
                                    </div>
                                )
                            }
                        </motion.div>
                    </div>
                    <div className='send-mail-code-snippet'>
                        <motion.div variants={codeSnippetVariants} initial="hidden" animate="visible" className='send-mail-code-div'>
                            <pre className='break-word'><code id='send-mail-code' className='language-javascript' ref={codeRef}>{sendMessageSnippet}</code></pre>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='mobile-view-contact'>
                <div className='mobile-header-contact'>
                    _contact-me
                </div>
                <details>
                    <summary>contacts</summary>
                    <div className='mobile-contact-details'>
                        <div className='visible'>
                            <MessageIcon className='contacts-session-icon' /><a href='mailto:ifeoluwasulaiman30@gmail.com' target='_blank' rel='noreferrer' className='contact-session-link'>ifeoluwasulaiman30@gmail.com</a>
                        </div>
                        <div className='visible'>
                            <PhonenIcon className='contacts-session-icon' /><a href='tel:+2348088890349' target='_blank' rel='noreferrer' className='contact-session-link'>+2348088890349</a>
                        </div>
                    </div>
                </details>
                <details>
                    <summary>find-me-also-on</summary>
                    <div className='mobile-contact-details'>
                        <div className='visible'>
                            <ExternalLinkIcon className='contacts-session-icon' /><a href='https://discord.com/sulaiman_ifeouwa' target='_blank' rel='noreferrer' className='contact-session-link'>Discord profile</a>
                        </div>
                        <div className='visible'>
                            <ExternalLinkIcon className='contacts-session-icon' /><a href='https://instagram.com/ifeoluwasulaiman30' target='_blank' rel='noreferrer' className='contact-session-link'>Instagram account</a>
                        </div>
                        <div className='visible'>
                            <ExternalLinkIcon className='contacts-session-icon' /><a href='https://wa.me/+2348088890349' target='_blank' rel='noreferrer' className='contact-session-link'>Whatsapp</a>
                        </div>
                        <div className='visible'>
                            <ExternalLinkIcon className='contacts-session-icon' /><a href='https://www.frontendmentor.io/profile/DOOMSDAY101' target='_blank' rel='noreferrer' className='contact-session-link'>Frontendmentor</a>
                        </div>
                    </div>
                </details>
                <div className="mobile-contact-form" >
                    {emailSent ?
                        (

                            <div className='message-sent'>
                                {/** TO BE DISPLAYED WHEN THE EMAIL HAS BEEN SENT */}
                                <h1 className='thank-you'>Thank You! &#x1F918;</h1>
                                <p className='thank-you-message'>Your message has been accepted. <br />You will recieve answer really soon!</p>
                                <button onClick={handleNewMessage} className='submit-btn submit-btn-1'>send-new-message</button>
                            </div>

                        )
                        : (
                            <div>
                                {/** TO BE DISPLAYED WHEN THE EMAIL HAS NOT BEEN SENT YET */}
                                <form ref={form} className='form-input' onSubmit={handleSubmitEvent} method='post'>
                                    <div className='field'>
                                        <label for="name" className='label-name'>_name:</label>
                                        <input type='text' required autoFocus id='name' spellCheck="false" name='from_name' className='input-text' value={mailerName} onChange={(e) => setMailerName(e.target.value)} />
                                    </div>
                                    <div className='field'>
                                        <label for="email" className='label-name'>_email:</label>
                                        <input type='email' required id='email' name='from_email' autoComplete='off' spellCheck="false" className='input-text' value={mailerEmail} onChange={(e) => setMailerEmail(e.target.value)} />
                                    </div>
                                    <div className='field'>
                                        <label for="message" className='label-name'>_message:</label>
                                        <textarea className='input-text-area' required spellCheck="false" name='message' id='message' value={mailerMessage} onChange={(e) => setMailerMessage(e.target.value)} />
                                    </div>
                                    <input type='submit' className='submit-btn' value="submit-message" disabled={disabledButton} />
                                </form>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact
