import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Tour from "./Components/Tour";
import Tours from "./Components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchTours = async (URL) => {
    setIsLoading(true);
    try {
      const res = await axios.get(URL);
      setTours(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours(url);
  }, []);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => fetchTours(url)}
          >
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
};
export default App;
