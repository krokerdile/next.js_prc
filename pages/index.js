import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import OptionalSlugPage from './optionalSegments/[[...slug]]';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Prc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Index Page</div>
      <NavTab>
        <Link href="/todo">Todo Page</Link>
        <Link href={`/segment/${encodeURIComponent('hello')}`}>
          Segment Page
        </Link>
        <Link
          href={{
            pathname: '/optionalSegments/[[...slug]]',
            query: { slug: ['hello', 'hi', 'bye'] },
          }}
        >
          OptionalSlugPage
        </Link>
        <Link href={`/segmentinsegment/post/1/hello`}>SegmentInSegment</Link>
      </NavTab>
    </>
  );
}

const NavTab = styled.div`
  display: flex;
  flex-direction: column;
`;
