import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro'

export const Navbar = () => {
  const [mobile, setmobile] = useState(false)

  return (
    <div>
      <div tw='mt-10 justify-between hidden md:flex '>
        <nav tw='flex space-x-10 font-bold items-center '>
          <NavLinkItem to='/'>
            <HomeIcon />
          </NavLinkItem>
          <NavLinkItem to='/about'>/about</NavLinkItem>
          <NavLinkItem to='/projects'>/projects</NavLinkItem>
          <NavLinkItem to='/contact'>/contact</NavLinkItem>
        </nav>
        <ul tw='flex items-center space-x-3'>
          <li>
            <a
              href='https://twitter.com/marcelmwastaken'
              tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
              target='_blank'
              rel='noreferrer'
            >
              <svg tw='w-8 h-8 fill-current' fill='white' viewBox='0 0 24 23'>
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
          </li>
          <li>
            <a
              href='https://codepen.io/sickisonfire'
              tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
              target='_blank'
              rel='noreferrer'
            >
              <svg tw='w-5 h-5 fill-current' viewBox='0 0 24 24' fill='white'>
                <path d='M23.9921 8.25463C23.9899 8.23965 23.9861 8.22532 23.9836 8.21035C23.9785 8.18164 23.9731 8.15294 23.9655 8.12488C23.9611 8.10803 23.9548 8.09183 23.9495 8.07563C23.9412 8.05067 23.9331 8.02574 23.923 8.00143C23.9159 7.98458 23.9078 7.96773 23.8999 7.95153C23.8893 7.92854 23.8776 7.90606 23.8649 7.88419C23.8554 7.86794 23.8453 7.85234 23.8355 7.83676C23.8218 7.81558 23.8073 7.79496 23.7919 7.77496C23.7805 7.75992 23.7687 7.74516 23.7566 7.73068C23.7402 7.71172 23.723 7.6934 23.7051 7.67579C23.6916 7.66211 23.6783 7.64836 23.6641 7.63588C23.6451 7.61908 23.6257 7.60287 23.6057 7.58726C23.5903 7.5754 23.5751 7.56355 23.559 7.55231C23.553 7.54857 23.5477 7.54358 23.542 7.53981L12.5727 0.314755C12.4033 0.203125 12.2042 0.143555 12.0006 0.143555C11.797 0.143555 11.5979 0.203125 11.4285 0.314755L0.459256 7.53981C0.453596 7.54355 0.448227 7.54855 0.442252 7.55231C0.426122 7.56352 0.410964 7.57538 0.39583 7.58726C0.375726 7.60269 0.356253 7.61891 0.337458 7.63588C0.322932 7.64839 0.309693 7.66211 0.296065 7.67579C0.278253 7.69337 0.261201 7.71168 0.244956 7.73068C0.232664 7.74506 0.220664 7.76003 0.209271 7.77496C0.194013 7.79497 0.179588 7.81559 0.166033 7.83676C0.155645 7.85226 0.145753 7.86807 0.136373 7.88419C0.123799 7.90618 0.112097 7.92864 0.101296 7.95153C0.0934252 7.96773 0.0852147 7.98458 0.0782673 8.00143C0.068162 8.02574 0.0599758 8.05067 0.0517652 8.07563C0.0463968 8.09183 0.0403968 8.10806 0.0356357 8.12488C0.028081 8.15294 0.0230284 8.18164 0.0176599 8.21035C0.0151579 8.22532 0.0113441 8.23965 0.0094494 8.25463C0.00325996 8.29865 0.000102903 8.34304 0 8.38749L0 15.6126C0 15.6575 0.0034494 15.7018 0.0094494 15.7461C0.0113441 15.7604 0.0151579 15.7754 0.0176599 15.7896C0.0230284 15.8184 0.028081 15.847 0.0356357 15.8751C0.0403968 15.892 0.0463968 15.9082 0.0517652 15.9244C0.0599515 15.9493 0.068162 15.9743 0.0782673 15.9992C0.0852147 16.0161 0.0934252 16.0323 0.101296 16.0486C0.112373 16.0715 0.123717 16.094 0.136373 16.1165C0.145822 16.1321 0.155612 16.1476 0.166033 16.1633C0.179588 16.1844 0.194013 16.2051 0.209271 16.2251C0.220664 16.2406 0.232664 16.255 0.244956 16.2693C0.261085 16.288 0.278138 16.3067 0.296065 16.3242C0.309693 16.3379 0.322932 16.3516 0.337458 16.3641C0.356227 16.3811 0.375701 16.3973 0.39583 16.4128C0.410951 16.4248 0.426432 16.4365 0.442252 16.4476C0.448227 16.4514 0.453596 16.4564 0.459256 16.4601L11.4285 23.6852C11.5979 23.797 11.7971 23.8567 12.0008 23.8567C12.2044 23.8566 12.4034 23.7969 12.5727 23.6852L23.542 16.4601C23.5477 16.4565 23.5529 16.4514 23.559 16.4476C23.5751 16.4365 23.5903 16.4247 23.6057 16.4128C23.6257 16.3972 23.6452 16.3809 23.6641 16.3641C23.6783 16.3516 23.6916 16.3379 23.7051 16.3242C23.723 16.3066 23.7401 16.2883 23.7566 16.2693C23.7689 16.255 23.7806 16.2402 23.7919 16.2251C23.8073 16.2051 23.8218 16.1845 23.8355 16.1633C23.8453 16.1476 23.8554 16.1321 23.8648 16.1165C23.8778 16.094 23.8891 16.0715 23.8999 16.0486C23.9077 16.0323 23.9159 16.0161 23.9229 15.9992C23.933 15.9743 23.9412 15.9493 23.9494 15.9244C23.9548 15.9082 23.9611 15.892 23.9655 15.8751C23.9731 15.847 23.9784 15.8184 23.9835 15.7896C23.9861 15.7753 23.9899 15.7604 23.992 15.7461C23.9977 15.7017 24.0012 15.6575 24.0012 15.6126V8.38747C24.0011 8.34304 23.998 8.29867 23.9921 8.25463V8.25463ZM13.032 3.06659L21.1128 8.38871L17.5033 10.7744L13.032 7.81927V3.06659V3.06659ZM10.9693 3.06659V7.81927L6.49815 10.7744L2.88846 8.38871L10.9693 3.06659V3.06659ZM2.06274 10.2948L4.64313 12L2.06274 13.7053V10.2948ZM10.9693 20.9335L2.88846 15.6113L6.49815 13.2262L10.9693 16.1808V20.9335V20.9335ZM12.0008 14.4107L8.35288 12L12.0008 9.58936L15.6484 12L12.0008 14.4107ZM13.032 20.9335V16.1808L17.5033 13.2262L21.1128 15.6113L13.032 20.9335V20.9335ZM21.9385 13.7053L19.3584 12L21.9385 10.2948V13.7053Z' />
              </svg>
            </a>
          </li>
          <li>
            <a
              tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
              href='https://www.linkedin.com/in/marcel-m%C3%BCller-02b100204/'
              target='_blank'
              rel='noreferrer'
            >
              <svg tw='w-8 h-8 fill-current' fill='white' viewBox='0 0 24 23'>
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
          </li>
          <li>
            <a
              tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
              href='https://www.xing.com/profile/Marcel_Mueller881/cv'
              target='_blank'
              rel='noreferrer'
            >
              <svg tw='w-8 h-8 fill-current ' fill='white' viewBox='0 0 24 23'>
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
          </li>
        </ul>
      </div>
      {/* MOBILE */}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            setmobile(!mobile)
          }}
          type='button'
          css={[
            tw`md:hidden inline-flex items-center justify-center p-2 m-2 rounded-full text-white`,
            mobile && tw`focus:(bg-gray-900 text-orange-500)`,
          ]}
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <span tw='sr-only'>Open main menu</span>

          <svg
            tw='block h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>

          <svg
            tw='hidden h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div css={[tw`md:hidden w-screen `, mobile ? tw`block` : tw`hidden`]}>
        <div
          css={[
            tw`space-y-1 absolute w-full  py-3 border-t border-b`,
            css`
              backdrop-filter: blur(25px);
            `,
          ]}
        >
          <Link
            to='/'
            onClick={(e) => setmobile(false)}
            tw='text-white block px-3 py-3 text-center w-full font-medium'
          >
            /home
          </Link>
          <Link
            to='/about'
            onClick={(e) => setmobile(false)}
            tw=' text-white block px-3 py-3 text-center font-medium'
          >
            /about
          </Link>
          <Link
            to='/projects'
            onClick={(e) => setmobile(false)}
            tw=' text-white block px-3 py-3 text-center font-medium'
          >
            /projects
          </Link>
          <Link
            to='/contact'
            onClick={(e) => setmobile(false)}
            tw=' text-white block px-3 py-3 text-center font-medium'
          >
            /contact
          </Link>
          <div tw='pt-6 pb-4'>
            <ul tw='flex items-center space-x-3 w-full justify-center'>
              <li>
                <a
                  href='https://twitter.com/marcelmwastaken'
                  tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg tw='w-8 h-8 fill-current' fill='white' viewBox='0 0 24 23'>
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
              </li>
              <li>
                <a
                  href='https://codepen.io/sickisonfire'
                  tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg tw='w-5 h-5 fill-current' viewBox='0 0 24 24' fill='white'>
                    <path d='M23.9921 8.25463C23.9899 8.23965 23.9861 8.22532 23.9836 8.21035C23.9785 8.18164 23.9731 8.15294 23.9655 8.12488C23.9611 8.10803 23.9548 8.09183 23.9495 8.07563C23.9412 8.05067 23.9331 8.02574 23.923 8.00143C23.9159 7.98458 23.9078 7.96773 23.8999 7.95153C23.8893 7.92854 23.8776 7.90606 23.8649 7.88419C23.8554 7.86794 23.8453 7.85234 23.8355 7.83676C23.8218 7.81558 23.8073 7.79496 23.7919 7.77496C23.7805 7.75992 23.7687 7.74516 23.7566 7.73068C23.7402 7.71172 23.723 7.6934 23.7051 7.67579C23.6916 7.66211 23.6783 7.64836 23.6641 7.63588C23.6451 7.61908 23.6257 7.60287 23.6057 7.58726C23.5903 7.5754 23.5751 7.56355 23.559 7.55231C23.553 7.54857 23.5477 7.54358 23.542 7.53981L12.5727 0.314755C12.4033 0.203125 12.2042 0.143555 12.0006 0.143555C11.797 0.143555 11.5979 0.203125 11.4285 0.314755L0.459256 7.53981C0.453596 7.54355 0.448227 7.54855 0.442252 7.55231C0.426122 7.56352 0.410964 7.57538 0.39583 7.58726C0.375726 7.60269 0.356253 7.61891 0.337458 7.63588C0.322932 7.64839 0.309693 7.66211 0.296065 7.67579C0.278253 7.69337 0.261201 7.71168 0.244956 7.73068C0.232664 7.74506 0.220664 7.76003 0.209271 7.77496C0.194013 7.79497 0.179588 7.81559 0.166033 7.83676C0.155645 7.85226 0.145753 7.86807 0.136373 7.88419C0.123799 7.90618 0.112097 7.92864 0.101296 7.95153C0.0934252 7.96773 0.0852147 7.98458 0.0782673 8.00143C0.068162 8.02574 0.0599758 8.05067 0.0517652 8.07563C0.0463968 8.09183 0.0403968 8.10806 0.0356357 8.12488C0.028081 8.15294 0.0230284 8.18164 0.0176599 8.21035C0.0151579 8.22532 0.0113441 8.23965 0.0094494 8.25463C0.00325996 8.29865 0.000102903 8.34304 0 8.38749L0 15.6126C0 15.6575 0.0034494 15.7018 0.0094494 15.7461C0.0113441 15.7604 0.0151579 15.7754 0.0176599 15.7896C0.0230284 15.8184 0.028081 15.847 0.0356357 15.8751C0.0403968 15.892 0.0463968 15.9082 0.0517652 15.9244C0.0599515 15.9493 0.068162 15.9743 0.0782673 15.9992C0.0852147 16.0161 0.0934252 16.0323 0.101296 16.0486C0.112373 16.0715 0.123717 16.094 0.136373 16.1165C0.145822 16.1321 0.155612 16.1476 0.166033 16.1633C0.179588 16.1844 0.194013 16.2051 0.209271 16.2251C0.220664 16.2406 0.232664 16.255 0.244956 16.2693C0.261085 16.288 0.278138 16.3067 0.296065 16.3242C0.309693 16.3379 0.322932 16.3516 0.337458 16.3641C0.356227 16.3811 0.375701 16.3973 0.39583 16.4128C0.410951 16.4248 0.426432 16.4365 0.442252 16.4476C0.448227 16.4514 0.453596 16.4564 0.459256 16.4601L11.4285 23.6852C11.5979 23.797 11.7971 23.8567 12.0008 23.8567C12.2044 23.8566 12.4034 23.7969 12.5727 23.6852L23.542 16.4601C23.5477 16.4565 23.5529 16.4514 23.559 16.4476C23.5751 16.4365 23.5903 16.4247 23.6057 16.4128C23.6257 16.3972 23.6452 16.3809 23.6641 16.3641C23.6783 16.3516 23.6916 16.3379 23.7051 16.3242C23.723 16.3066 23.7401 16.2883 23.7566 16.2693C23.7689 16.255 23.7806 16.2402 23.7919 16.2251C23.8073 16.2051 23.8218 16.1845 23.8355 16.1633C23.8453 16.1476 23.8554 16.1321 23.8648 16.1165C23.8778 16.094 23.8891 16.0715 23.8999 16.0486C23.9077 16.0323 23.9159 16.0161 23.9229 15.9992C23.933 15.9743 23.9412 15.9493 23.9494 15.9244C23.9548 15.9082 23.9611 15.892 23.9655 15.8751C23.9731 15.847 23.9784 15.8184 23.9835 15.7896C23.9861 15.7753 23.9899 15.7604 23.992 15.7461C23.9977 15.7017 24.0012 15.6575 24.0012 15.6126V8.38747C24.0011 8.34304 23.998 8.29867 23.9921 8.25463V8.25463ZM13.032 3.06659L21.1128 8.38871L17.5033 10.7744L13.032 7.81927V3.06659V3.06659ZM10.9693 3.06659V7.81927L6.49815 10.7744L2.88846 8.38871L10.9693 3.06659V3.06659ZM2.06274 10.2948L4.64313 12L2.06274 13.7053V10.2948ZM10.9693 20.9335L2.88846 15.6113L6.49815 13.2262L10.9693 16.1808V20.9335V20.9335ZM12.0008 14.4107L8.35288 12L12.0008 9.58936L15.6484 12L12.0008 14.4107ZM13.032 20.9335V16.1808L17.5033 13.2262L21.1128 15.6113L13.032 20.9335V20.9335ZM21.9385 13.7053L19.3584 12L21.9385 10.2948V13.7053Z' />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
                  href='https://www.linkedin.com/in/marcel-m%C3%BCller-02b100204/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg tw='w-8 h-8 fill-current' fill='white' viewBox='0 0 24 23'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.25 17.25V9.34375H6V17.25H8.25Z'
                    />
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
              </li>
              <li>
                <a
                  tw='w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-200  hover:(text-orange-500 bg-gray-900) rounded-full '
                  href='https://www.xing.com/profile/Marcel_Mueller881/cv'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg tw='w-8 h-8 fill-current ' fill='white' viewBox='0 0 24 23'>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavLinkItem = (props) => {
  const location = useLocation()
  return (
    <Link
      css={[
        tw`text-lg tracking-wider transition-colors duration-700  `,
        location.pathname === props.to
          ? tw`text-orange-500`
          : tw`text-white hover:(text-orange-300 duration-100)`,
      ]}
      to={props.to}
    >
      {props.children}
    </Link>
  )
}
const HomeIcon = () => (
  <div tw='flex items-center'>
    <svg tw='fill-current! w-6 h-6' viewBox='0 0 25 24' fill='white'>
      <path d='M23.7088 12.3888L12.9009 0.380076C12.4458 -0.126692 11.5716 -0.126692 11.1164 0.380076L0.308604 12.3888C0.153039 12.5612 0.0509271 12.7751 0.0146843 13.0045C-0.0215584 13.2339 0.00962948 13.4689 0.104456 13.6809C0.296595 14.1144 0.726507 14.393 1.20085 14.393H3.60259V22.7991C3.60259 23.1176 3.72911 23.4231 3.95432 23.6483C4.17953 23.8735 4.48497 24 4.80346 24H8.40607C8.72457 24 9.03001 23.8735 9.25522 23.6483C9.48042 23.4231 9.60695 23.1176 9.60695 22.7991V17.9956H14.4104V22.7991C14.4104 23.1176 14.5369 23.4231 14.7622 23.6483C14.9874 23.8735 15.2928 24 15.6113 24H19.2139C19.5324 24 19.8378 23.8735 20.0631 23.6483C20.2883 23.4231 20.4148 23.1176 20.4148 22.7991V14.393H22.8165C23.0491 14.394 23.2769 14.3273 23.4722 14.2011C23.6676 14.0748 23.8219 13.8945 23.9165 13.682C24.0111 13.4695 24.0418 13.2341 24.0049 13.0045C23.968 12.7749 23.8651 12.5609 23.7088 12.3888Z' />
    </svg>
  </div>
)

export default Navbar
