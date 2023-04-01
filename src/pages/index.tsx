import Head from "next/head";
import Posts from "@/components/Posts";
import { QueryClient, dehydrate } from "react-query";
import styled from "styled-components";
import { Header } from "@amsterdam/asc-ui";
import { getBlogPosts } from "@/utils/api";

const PageHeader = styled(Header)`
  & a {
    font-size: 0.8em;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <PageHeader logo={() => null} homeLink="/" title="My Blog" ssr />
        <Posts />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 1], () => getBlogPosts(1));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
}
