import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from 'date-fns';
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {

    const router = useRouter();
    const { location, startDate, endDate, numberOfguests } = router.query;

    const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <div>
            <Header placholder={`${location} | ${range} | ${numberOfguests}`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ - {range} - Stays for {numberOfguests} guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden md:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {
                            searchResults?.map(({ img, location, title, description, star, price, total }) => (<InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />))
                        }
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://links.papareact.com/isz');
    const searchResults = await res.json();

    return {
        props: {
            searchResults,
        }
    }

}


export default Search;