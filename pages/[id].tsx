import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import prisma from '../lib/prisma'
import ErrorPage from 'next/error'

const post: NextPage = ({ postData }) => {
  if(postData[0] == undefined) return <ErrorPage statusCode={404}/>;
  return (
    <>
      <Head>
          <title>{postData[0].title}</title>
          <link rel="icon" href="/logo.svg" />
      </Head>
      <div className='container'>
        <Header />
        {postData.map((p) => (<Post key={p.id} data={p}/>))}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postData = await prisma.post.findMany({
      where:{
          id: String(params?.id),
      }
  });
  return { props: { postData } };
};

export default post
