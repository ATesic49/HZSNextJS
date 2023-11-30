import SectionEvent from './SectionEvent';
import { useEffect } from 'react';
import axios from 'axios';

function Section({Name}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('your-api-endpoint');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h2 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
              Najpopularnije utakmice
            </h2>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Pregled najpopularnijih utakmica koje predstoje! Poveži se sa zajednicom kroz predviđanje
              rezultata! 
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {data &&
          data.slice(0, 3).map((data, index) => <SectionEvent key={index} data={data} />)}
        </div>
      </div>
    </section>
  )
}

export default Section
