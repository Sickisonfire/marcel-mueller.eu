import image from '../assets/marcel.jpg'
import figma from '../assets/figma.svg'
import js from '../assets/js.svg'
import nodejs from '../assets/nodejs.svg'
import reactLogo from '../assets/react.svg'
import tailwindcss from '../assets/tailwind.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

export const About = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 200)
  }, [])

  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <div
        css={[
          tw` text-white flex flex-col   2xl:max-w-2xl transition-all  duration-1000 opacity-0   pr-5 `,
          !loading && tw`opacity-100`,
        ]}
      >
        <div tw='flex items-center mb-10 flex-col  space-y-3 sm:(flex-row)'>
          <img src={image} alt='Marcel Müller' tw='w-40 h-40 rounded-full' />
          <div tw='sm:ml-10'>
            <h1 tw='font-bold text-4xl mb-2'>Marcel Müller</h1>
            <div tw='text-gray-400 text-xl ml-2 text-center sm:text-left'>
              <h2>Webdeveloper</h2>
              <h2>Stuttgart, Germany</h2>
            </div>
          </div>
        </div>
        <p tw='text-white mb-20 '>
          Comming from an engineering background i had plenty experience working with different
          kinds of user interfaces. From teaching a robot to move to programming the path a
          computer-controlled mill has to take to efficiently take off the material or creating 3D
          models with CAD software. Interfaces gave me the possibility to interact with technology
          and create things i could’ve never created without them. <br />
          <br /> I want to empower people to connect with technology and make their experience easy
          and enjoyable in the process. And i don’t think there is a better way to reach more people
          than the World Wide Web. <br />
          <br />
          So that is what i focus on – interfaces on the web! My main area of expertise is the
          development of frontends. Using HTML, CSS & JavaScript i create experiences ranging from
          simple web pages to interactive applications.
          <br /> Below you can find the technologies i most commonly use. You can also checkout my{' '}
          <Link tw='text-orange-500' to='/projects'>
            projects
          </Link>{' '}
          for more information.
          <br /> I love learning new things, so if you think there is something missing on the list
          get in{' '}
          <Link tw='text-orange-500' to='/contact'>
            contact
          </Link>
          . I might already know a thing or two about it!
        </p>
        <div tw='flex space-x-5 md:justify-between items-center justify-center mb-10 flex-wrap text-sm '>
          <TechItem tw='mb-5'>
            <img src={figma} alt='figma logo' tw=' h-10 2xl:h-14 ' />
            <p>Figma</p>
          </TechItem>
          <TechItem tw=' mb-5'>
            <img src={js} alt='JavaScript logo' tw='h-10 2xl:h-14' />
            <p>JavaScript</p>
          </TechItem>
          <TechItem tw=' mb-5'>
            <img src={reactLogo} alt='react logo' tw='h-10 2xl:h-14' />
            <p>React</p>
          </TechItem>
          <TechItem tw=' mb-5'>
            <img src={tailwindcss} alt='tailwindcss logo' tw='h-10 2xl:h-14' />
            <p>Tailwindcss</p>
          </TechItem>
          <TechItem tw=' mb-5'>
            <img src={nodejs} alt='nodejs logo' tw='h-10 2xl:h-14' />
            <p>NodeJs</p>
          </TechItem>
        </div>
      </div>
    </>
  )
}

const TechItem = tw.div`flex flex-col items-center space-y-4`

export default About
