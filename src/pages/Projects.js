import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro'

const projects = [
  {
    id: 1,
    title: 'Trello clone',
    description:
      'Simple todolist application. Includes user registration, login and simple CRUD operations for user specific lists.',
    tags: 'react,tailwind,strapi',
    projectUrl: 'https://www.todo.marcel-mueller.eu',
    github: 'https://github.com/Sickisonfire/trello-clone',
    image: 'todolist.png',
    imageAlt: 'image of the Trello clone',
  },
  {
    id: 2,
    title: 'MERN-Stack application',
    description: 'Full CRUD functionality and github API integration.',
    tags: 'react,Express.js,redux',
    projectUrl: 'https://desolate-crag-56443.herokuapp.com/',
    github: 'https://github.com/Sickisonfire/Devconnect-Tutorial',
    image: 'devconnect.png',
    imageAlt: 'image of devconnect',
  },
]

export const Projects = () => {
  const [loading, setloading] = useState(true)
  const [content, setContent] = useState([])

  useEffect(() => {
    setContent(projects)
    setTimeout(() => {
      setloading(false)
    }, 200)
  }, [content])

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div tw=''>
        <div
          css={[
            tw` flex flex-col space-y-16   2xl:max-w-2xl transition-all  duration-1000 opacity-0  pr-5 `,
            !loading && tw`opacity-100`,
          ]}
        >
          {!loading && content.map((project) => <ProjectItem key={project.id} project={project} />)}
          <MoreToCome></MoreToCome>
        </div>
      </div>
    </>
  )
}

const ProjectItem = ({ project }) => {
  const { title, description, tags, projectUrl, github, image, imageAlt } = project
  const tagArray = tags.split(',')
  return (
    <div tw='w-full flex flex-col-reverse border-b-8 pb-5 justify-between sm:(border-l-8 border-b-0 pl-8 h-52 flex-row) border-orange-500 text-sm text-white cursor-default  transition-colors duration-100'>
      <div tw='flex h-full justify-center flex-col w-full'>
        <h1 tw='text-3xl font-bold mb-2 mt-6'>{title}</h1>
        <div tw='flex space-x-2 ml-5 mb-5'>
          {tagArray.map((tag) => (
            <Badge key={tag} type={tag} />
          ))}
        </div>
        <p tw=' mr-12  whitespace-normal'>{description}</p>
        <div tw='flex space-x-5 mt-4'>
          <a
            href={projectUrl}
            target='_blank'
            rel='noreferrer'
            tw='flex items-center space-x-2 px-2 py-1 bg-black border border-orange-500 text-orange-500 hover:(bg-orange-500 text-black!) transition-colors duration-300 disabled:(border-gray-500 text-gray-500)'
          >
            <span>View Project</span>
            <svg
              tw='stroke-current '
              width='14'
              height='14'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.3335 7.66667L17.0002 1'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12.5557 1H17.0001V5.44444'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M17 10.7778V15.2222C17 15.6937 16.8127 16.1459 16.4793 16.4793C16.1459 16.8127 15.6937 17 15.2222 17H2.77778C2.30628 17 1.8541 16.8127 1.5207 16.4793C1.1873 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H7.22222'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            tw='flex items-center space-x-2 px-2 py-1  bg-black border border-white hover:(bg-white text-black!) transition-colors duration-300 '
          >
            <span>Github</span>
            <svg
              tw='fill-current '
              width='16'
              height='15'
              viewBox='0 0 16 15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 0C3.58 0 0 3.44114 0 7.6897C0 11.0924 2.29 13.9664 5.47 14.9853C5.87 15.0526 6.02 14.8219 6.02 14.62C6.02 14.4374 6.01 13.8319 6.01 13.1878C4 13.5435 3.48 12.7168 3.32 12.2843C3.23 12.0632 2.84 11.3808 2.5 11.1981C2.22 11.0539 1.82 10.6983 2.49 10.6887C3.12 10.6791 3.57 11.2462 3.72 11.4769C4.44 12.64 5.59 12.3131 6.05 12.1113C6.12 11.6115 6.33 11.275 6.56 11.0828C4.78 10.8905 2.92 10.2273 2.92 7.28599C2.92 6.44974 3.23 5.75767 3.74 5.21939C3.66 5.02714 3.38 4.23895 3.82 3.18162C3.82 3.18162 4.49 2.97976 6.02 3.96981C6.66 3.79679 7.34 3.71028 8.02 3.71028C8.7 3.71028 9.38 3.79679 10.02 3.96981C11.55 2.97015 12.22 3.18162 12.22 3.18162C12.66 4.23895 12.38 5.02714 12.3 5.21939C12.81 5.75767 13.12 6.44013 13.12 7.28599C13.12 10.2369 11.25 10.8905 9.47 11.0828C9.76 11.3231 10.01 11.7845 10.01 12.5054C10.01 13.5339 10 14.3605 10 14.62C10 14.8219 10.15 15.0622 10.55 14.9853C12.1381 14.4699 13.5181 13.4888 14.4958 12.1801C15.4734 10.8714 15.9995 9.30088 16 7.6897C16 3.44114 12.42 0 8 0Z'
              />
            </svg>
          </a>
        </div>
      </div>
      <img tw=' sm:(h-52 w-52) ' src={image} alt={imageAlt} />
    </div>
  )
}

const MoreToCome = () => {
  return (
    <div tw='w-full flex justify-between border-b-8 pb-5 justify-between sm:(border-l-8 border-b-0 h-52 pl-8) border-orange-500 text-sm text-white'>
      <div tw='flex h-full justify-center flex-col'>
        <h1 tw='text-3xl font-bold mb-6'>More comming soon...</h1>
        <p tw='mb-4 mr-12 whitespace-normal'>
          I am always working on things, so stay tuned. If you want you can checkout my codepen or
          github in the meanwhile.
        </p>

        <div tw='flex space-x-5 mt-4'>
          <a
            href='https://codepen.io/sickisonfire'
            target='_blank'
            rel='noreferrer'
            tw='flex items-center space-x-2 px-2 py-1 bg-black border border-orange-500 text-orange-500 hover:(bg-orange-500 text-black!) transition-colors duration-300 disabled:(border-gray-500 text-gray-500)'
          >
            <span>View Codepen</span>
            <svg
              tw='stroke-current '
              width='14'
              height='14'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.3335 7.66667L17.0002 1'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12.5557 1H17.0001V5.44444'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M17 10.7778V15.2222C17 15.6937 16.8127 16.1459 16.4793 16.4793C16.1459 16.8127 15.6937 17 15.2222 17H2.77778C2.30628 17 1.8541 16.8127 1.5207 16.4793C1.1873 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.1873 1.8541 1.5207 1.5207C1.8541 1.1873 2.30628 1 2.77778 1H7.22222'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <a
            href='https://github.com/Sickisonfire'
            target='_blank'
            rel='noreferrer'
            tw='flex items-center space-x-2 px-2 py-1  bg-black border border-white hover:(bg-white text-black!) transition-colors duration-300 '
          >
            <span>Github</span>
            <svg
              tw='fill-current '
              width='16'
              height='15'
              viewBox='0 0 16 15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 0C3.58 0 0 3.44114 0 7.6897C0 11.0924 2.29 13.9664 5.47 14.9853C5.87 15.0526 6.02 14.8219 6.02 14.62C6.02 14.4374 6.01 13.8319 6.01 13.1878C4 13.5435 3.48 12.7168 3.32 12.2843C3.23 12.0632 2.84 11.3808 2.5 11.1981C2.22 11.0539 1.82 10.6983 2.49 10.6887C3.12 10.6791 3.57 11.2462 3.72 11.4769C4.44 12.64 5.59 12.3131 6.05 12.1113C6.12 11.6115 6.33 11.275 6.56 11.0828C4.78 10.8905 2.92 10.2273 2.92 7.28599C2.92 6.44974 3.23 5.75767 3.74 5.21939C3.66 5.02714 3.38 4.23895 3.82 3.18162C3.82 3.18162 4.49 2.97976 6.02 3.96981C6.66 3.79679 7.34 3.71028 8.02 3.71028C8.7 3.71028 9.38 3.79679 10.02 3.96981C11.55 2.97015 12.22 3.18162 12.22 3.18162C12.66 4.23895 12.38 5.02714 12.3 5.21939C12.81 5.75767 13.12 6.44013 13.12 7.28599C13.12 10.2369 11.25 10.8905 9.47 11.0828C9.76 11.3231 10.01 11.7845 10.01 12.5054C10.01 13.5339 10 14.3605 10 14.62C10 14.8219 10.15 15.0622 10.55 14.9853C12.1381 14.4699 13.5181 13.4888 14.4958 12.1801C15.4734 10.8714 15.9995 9.30088 16 7.6897C16 3.44114 12.42 0 8 0Z'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

const Badge = ({ type }) => {
  return (
    <div
      css={[
        tw`bg-gray-900 text-gray-400 inline-block rounded-sm px-2 cursor-default`,
        css`
          font-size: 12px;
        `,
      ]}
    >
      {type}
    </div>
  )
}

export default Projects
