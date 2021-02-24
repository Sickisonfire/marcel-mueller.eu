import { useEffect, useState } from 'react'

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

export const Contact = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 200)
  }, [])

  return (
    <div
      css={[
        tw` flex flex-col justify-center max-w-2xl 2xl:max-w-2xl transition-all  duration-1000 opacity-0 space-y-5 sm:mt-20`,
        !loading && tw`opacity-100`,
      ]}
    >
      <div>
        <p tw='text-white '>
          I am always looking for new opportunities. So don't hesitate and reach out to me! You can
          contact me through the social media channels listed bellow or just send me an email to:
          {/* or leave a message and your email address and i will get
        back to you. */}
        </p>
        <p tw='text-orange-500 mt-3'> mueller.mm.marcel at gmail.com</p>
      </div>
      <div tw='flex space-x-5 items-center w-full'>
        <a href='https://twitter.com/marcelmwastaken' target='_blank' rel='noreferrer'>
          <svg
            tw='w-16 h-16 transition-colors hover:(fill-current! text-orange-500!) '
            fill='white'
            viewBox='0 0 24 23'
          >
            <g clipPath='url(#clip0)'>
              <path d='M18.375 7.7107C17.9059 7.91027 17.4018 8.04468 16.8726 8.10527C17.4129 7.79521 17.8278 7.30392 18.0228 6.71844C17.5176 7.00558 16.9576 7.21432 16.3616 7.32683C15.885 6.83961 15.2045 6.53516 14.4522 6.53516C12.7634 6.53516 11.5224 8.04519 11.9038 9.61275C9.7305 9.50838 7.80312 8.51052 6.51272 6.99387C5.82741 8.12054 6.15731 9.59442 7.32181 10.3408C6.89363 10.3275 6.48987 10.215 6.13766 10.0272C6.10897 11.1885 6.97756 12.2749 8.23556 12.5167C7.86741 12.6125 7.46419 12.6349 7.05406 12.5595C7.38663 13.5553 8.35244 14.2798 9.49781 14.3002C8.39812 15.1265 7.01262 15.4956 5.625 15.3388C6.78259 16.05 8.158 16.4649 9.63487 16.4649C14.4916 16.4649 17.2355 12.5341 17.0697 9.00843C17.5808 8.6546 18.0244 8.2132 18.375 7.7107Z' />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='12.75' height='12.2188' transform='translate(5.625 5.39062)' />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/marcel-m%C3%BCller-02b100204/'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            tw='w-16 h-16 transition-colors hover:(fill-current! text-orange-500!) '
            fill='white'
            viewBox='0 0 24 23'
          >
            <path fillRule='evenodd' clipRule='evenodd' d='M8.25 17.25V9.34375H6V17.25H8.25Z' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.25925 8.26558C8.20125 8.26558 8.78775 7.73586 8.78775 6.98836C8.77012 6.22433 8.20125 5.677 7.27725 5.677C6.35287 5.677 5.74875 6.20708 5.74875 6.97111C5.74875 7.71861 6.33487 8.26558 7.24162 8.26558H7.25925Z'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10.1047 17.25H12.75V12.9055C12.75 12.6726 12.7957 12.4401 12.8674 12.2737C13.0624 11.8083 13.5712 11.3268 14.3175 11.3268C15.2951 11.3268 15.7504 12.0412 15.7504 13.0881V17.25H18.0004V12.7894C18.0004 10.3971 16.8435 9.37609 15.0656 9.37609C13.6084 9.37609 13.1441 10.0625 12.7886 10.7812H12.75V9.34375H10.1047C10.1404 10.0625 10.0391 17.25 10.0391 17.25H10.1047Z'
            />
          </svg>
        </a>

        <a
          href='https://www.xing.com/profile/Marcel_Mueller881/cv'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            tw='w-16 h-16 transition-colors hover:(fill-current! text-orange-500!) '
            fill='white'
            viewBox='0 0 24 23'
          >
            <g clipPath='url(#clip0)'>
              <path d='M13.5337 17.6094L10.7054 12.6878L14.9925 5.39062H17.6132L13.3265 12.6878L16.1262 17.6094H13.5337ZM9.66039 7.9362H7.03655L8.50705 10.3514L6.32095 14.0456H8.93152L11.1187 10.3438L9.66039 7.9362Z' />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='12.75' height='12.2188' transform='translate(5.625 5.39062)' />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Contact
