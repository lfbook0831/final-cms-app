import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    }
  }
}

export default function Home({ allData }) {
  return (
    <Layout home>
      <Head>
        <title>List of Names</title>
      </Head>
      <h1>List of Names</h1>
      <div className="list-group">
        {allData.map(({ id, name }) => (
          <Link key={id} href={`/${id}`}>
            <a className="list-group-item list-group-item-action">{name}</a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
