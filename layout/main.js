import React, { Fragment } from 'react'
import Head from 'next/head'

import MenuAppBar from '../components/AppBar'

class MainLayout extends React.PureComponent {
  render(children) {
    return (
      <Fragment>
        <Head>
          <title>Tracker 19</title>
          <link rel="icon" href="/assets/img/Icon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap" rel="stylesheet" />
        </Head>
        <MenuAppBar />
        {children}

        <div>
          {/* create global style */}
          <style jsx global>
            {`
            body {
              margin: 0px;
              padding: 0px;
            }
          `}
          </style>
        </div>
      </Fragment>
    )
  }
}

export default MainLayout