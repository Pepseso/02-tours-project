import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  // tours object {id, image, info, name, price}
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <h3>Tours</h3>
      {tours ? (
        <Tours tours={tours} />
      ) : (
        <div>
          <p>There is No tours Available</p>
          <button>Refresh</button>{' '}
        </div>
      )}
    </main>
  );
};
export default App;
