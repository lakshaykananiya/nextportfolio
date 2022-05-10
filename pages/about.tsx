import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'

const about: NextPage = () => {
  return (
    <>
      <Head>
          <title>Lakshay Mittal</title>
          <link rel="icon" href="/logo.svg" />
      </Head>
      <div className='container'>
        <Header />
        <About />
      </div>
    </>
  )
}

export default about
