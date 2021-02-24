import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

export const Landing = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 200)
  }, [])

  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div
        css={[
          tw` flex flex-col justify-center  transition-all  duration-1000 opacity-0`,
          !loading && tw`opacity-100`,
        ]}
      >
        <h2 tw='text-7xl sm:text-8xl text-white font-bold mt-10 sm:mt-20'>
          Hey!
          <br />I am Marcel.
        </h2>
        <h3 tw='text-3xl text-gray-500 font-medium '>I love to build and improve UIs.</h3>

        <div tw='mt-10'>
          <Link
            to='/contact'
            tw='border-black border p-2 uppercase text-orange-500 border-orange-500 text-sm hover:(bg-orange-500 text-black ) font-medium tracking-widest transition-all duration-300 '
          >
            Get in contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Landing
