import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const PageNotFound = () => {
  let history = useHistory()
  useEffect(() => {
    history.push('/')
  })
  return <div></div>
}

export default PageNotFound
