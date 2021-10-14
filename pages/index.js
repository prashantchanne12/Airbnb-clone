import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from server - API Endpoints */}

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4'>
            {
              exploreData?.map(({ img, distance, location }) => (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {
              cardsData.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))
            }
          </div>
        </section>
      </main>

    </div>
  )
}

export async function getStaticProps() {

  const resExplore = await fetch('https://links.papareact.com/pyp');
  const exploreData = await resExplore.json();

  const resCards = await fetch('https://links.papareact.com/zp1');
  const cardsData = await resCards.json();

  return {
    props: {
      exploreData,
      cardsData
    }
  }

}