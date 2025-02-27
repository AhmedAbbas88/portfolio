"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from '../TabButton/TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Next.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuerry</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>SASS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Faculty of Computer Science & Information System, O6U university</li>
                <li>Bachelor of Computer Science & Information System</li>
                <li>GPA:  2.44</li>
                <li>Gradation project title: Hajj Personal E-guide</li>
                <li>Graduation project grade: Excellent</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Ahmed</li>
                <li>Abbas</li>
                
            </ul>
        )
    }
]

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    };

  return (
    <section id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt='about image' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a Frontend web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Bootstrp, Next.js,
                    FontAwesome, HTML, CSS, SASS and Git. I am a quick learner and I am always
                    looking to expand my knowledge and skill set. I am a team player and
                    I am excited to work with others to create amazing applications.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {""}
                        Skills{""}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {""}
                        Education{""}
                    </TabButton>
                    {/* <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {""}
                        Certifications{""}
                    </TabButton> */}
                    
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default About