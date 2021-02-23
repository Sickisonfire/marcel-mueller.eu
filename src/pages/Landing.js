import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { lazy, Suspense } from 'react'
/** @jsxImportSource @emotion/react */
import 'twin.macro'

import { AlertContext } from '../contexts'

const Button = lazy(() => import('../components/Button'))

const renderLoading = () => <p>Loading</p>

export const Landing = () => {
  const alertContext = useContext(AlertContext)
  const handleClick = (e) => {
    e.preventDefault()
    alertContext.setAlert('Does this work?', 'WARN')
  }

  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <Suspense fallback={renderLoading()}>
        <div tw='mx-auto my-12 flex flex-col items-center  justify-center space-y-12'>
          <Button onClick={handleClick} isSecondary isSmall>
            atdasfdsf
          </Button>
        </div>
      </Suspense>
    </>
  )
}

export default Landing
