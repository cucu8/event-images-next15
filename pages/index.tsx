import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Davet hakkında yorumlar yapın." overTitle="Yorum">
            <p>
              "Bugün, sevdiklerinizle paylaştığınız bu özel anı ölümsüzleştirmek ister misiniz? Güzel bir hatıra bırakmak için siz de
              duygularınızı bizimle paylaşın. Bu anlamlı günde, sevdiklerinize söylemek istediklerinizi, kalbinizden geçenleri yorumlara
              yazabilirsiniz. Anılar paylaştıkça çoğalır."
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Davet fotoğraflarını anlık yükleyin"
            overTitle="Anlık Fotoğraf Yükleme"
            reversed
          >
            <p>
              "Bir kare bazen bin kelimeye bedeldir... Bu güzel günün sizin için ne ifade ettiğini, o anı ölümsüzleştiren bir fotoğrafla
              paylaşın. Yüklediğiniz her kare, bu anın ruhunu birlikte yaşadığımızın bir simgesi olacak."
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */}
          {/* <FeaturesGallery /> */}
          <Features />
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
