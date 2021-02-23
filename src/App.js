import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { AlertState } from './contexts'
import Projects from './pages/Projects'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

/** @jsxImportSource @emotion/react */
import tw, { css } from 'twin.macro'
import { Global } from '@emotion/react'

export const App = () => {
  return (
    <>
      <Router>
        <AlertState>
          <Global styles={globalStyle} />
          <Navbar />
          <Alert />
          <Container>
            <Switch>
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Landing} />
              <Route component={PageNotFound} />
            </Switch>
          </Container>
        </AlertState>
      </Router>
    </>
  )
}

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  body {
    ${tw`bg-black text-white font-sans md:mx-20`}
  }
`
const Container = tw.div`py-20 px-10 w-full flex justify-center `
