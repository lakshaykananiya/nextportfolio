import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Blog from '../components/Blog'
import Header from '../components/Header'
import prisma from '../lib/prisma'

interface Prop {
  postData: any
}

const Home: NextPage<Prop> = ({ postData }) => {
  return (
    <>
      <Head>
          <title>Lakshay Mittal</title>
          <link rel="icon" href="/logo.svg" />
      </Head>
      <div className='container'>
        <Header />
        <Blog postData={postData}/>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postData = await prisma.post.findMany();
  return { props: { postData } };
};

export default Home
