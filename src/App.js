import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import Resume from './components/Resume'
import PaginatedResume from './components/PaginatedResume'
import MobileResume from './components/MobileResume'

const App = () => {
  const context = {
    colors: { backgroundColor: '#ddd', accentColor: 'rgb(2, 130, 174)' }
  }

  const isMobile = window.screen.width < 816

  return (
    <AppContextProvider value={context}>
      {isMobile ? (
        <MobileResume />
      ) : (
        <HashRouter basename="/">
          <Route path="/" exact component={Resume} />
          <Route path="/printable" component={PaginatedResume} />
        </HashRouter>
      )}
    </AppContextProvider>
  )
}

export default App
