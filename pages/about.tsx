import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import prisma from '../lib/prisma'

const about: NextPage = ({projectData}) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const projectData = await prisma.projects.findMany();
  return { props: { projectData } };
};

export default about
