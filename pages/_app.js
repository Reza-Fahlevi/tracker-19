import App from 'next/app'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import '@brainhubeu/react-carousel/lib/style.css'
import 'survey-react/survey.css'


import store from '../store/store'
import { blackSecondary, poppins } from '../utils/lib'

class MyApp extends App {

  componentDidMount() {
    // server side javascript, javascript still running if you disable it
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props

    // create theme for custom font in Typography component
    const theme = createMuiTheme({
      typography: {
        color: blackSecondary,
        fontFamily: poppins
      }
    })

    return (
      <Fragment>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap" rel="stylesheet" />
        </Head>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
          </MuiThemeProvider>
        </Provider>
      </Fragment>
    )
  }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper.withRedux(MyApp)