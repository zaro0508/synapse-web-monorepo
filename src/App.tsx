import React from 'react'
import './App.css'
import AppInitializer from './AppInitializer'
import { SynapseContextConsumer, SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import CookiesNotification from 'components/CookiesNotification'
import LoginPage from './LoginPage'
import { RegisterAccount1 } from 'components/RegisterAccount1'
import { SynapseComponents } from 'synapse-react-client'
import { RegisterAccount2 } from 'components/RegisterAccount2'
import { TermsOfUsePage } from 'components/TermsOfUsePage'
import TopNavBar from 'components/TopNavBar'
import { ProfileValidation } from 'components/ProfileValidation'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import AccountSettings from 'components/AccountSettings'

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Router>
            <AppInitializer>
              <TopNavBar />
              <CookiesNotification />
              <Switch>
               <Route exact path="/"
                  render={props => {
                    return <>
                      <p>There are a few main entrypoints into this web app</p>
                      <p>
                        <a href='/register1?appId=MTB'>MTB Account Registration</a>,&nbsp;
                        <a href='/authenticated/validate'>Profile Validation</a>,&nbsp;and&nbsp;
                        <a href='/authenticated/myaccount'>My Account</a>
                      </p>
                      </>
                  }} />
                <Route exact path='/logout' render={props => {
                  signOut(()=>{window.location.assign('/authenticated/myaccount')})
                  return <></>
                }} />
                <Route exact path='/register1' component={RegisterAccount1} />
                <Route exact path='/register2' component={RegisterAccount2} />
                {/* check for an access token for any route in the "/authenticated/" path */}
                <Route path='/authenticated/'
                  render={routeProps => {
                    const path = routeProps.location.pathname
                    return <SynapseContextConsumer>
                      {(ctx?: SynapseContextType) => {
                        if (!ctx?.accessToken) {
                          return <LoginPage returnToUrl={path} />
                        }
                        if (path === '/authenticated/validate') {
                          return <ProfileValidation />
                        } else if (path === '/authenticated/signTermsOfUse') {
                          return <TermsOfUsePage />
                        } else if (path === '/authenticated/myaccount') {
                          return <AccountSettings/>
                        } else {
                          return (<>
                            <p>Unrecognized match path {routeProps.match.path}</p>
                          </>)
                       }
                      }}
                    </SynapseContextConsumer>
                  }} />
                <Route exact={true} path='/login' render={props => {
                  return <LoginPage returnToUrl={'/'} />
                }}/>
              </Switch>
            </AppInitializer>
          </Router>
        </>
      <SynapseComponents.SynapseToastContainer />
    </div>
  );
}
export default App;
