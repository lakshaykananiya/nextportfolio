import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Projects from '../components/Projects'
import prisma from '../lib/prisma'

const projects: NextPage = ({projectData}) => {
  return (
    <>
      <Head>
          <title>Lakshay Mittal</title>
          <link rel="icon" href="/logo.svg" />
      </Head>
      <div className='container'>
        <Header />
        <Projects projectData={projectData}/>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projectData = await prisma.projects.findMany({
    orderBy: {year: 'asc',}
  });
  return { props: { projectData } };
};

export default projects
