import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const PageNotFound = () => {
  let history = useHistory()
  useEffect(() => {
    history.push('/')
  })
  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <div>
        <p>Page not found... </p>
      </div>
    </>
  )
}

export default PageNotFound
