import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"

function App() {
  const [data, setDataa] = useState([]);
  const [page, setPage] = useState(1);
  console.log(page,"pageee")
  console.log(data,"dataaa")

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?=${page}&size=25`)
      .then((res) => res.json())
      .then((json) => setDataa([...data, ...json.data]));
  }, [page]);

  const scrollToEnd = () => {
    setPage((page) => page + 1);
  };

  window.onscroll = function () {
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div className="App">
      {data.length > 0 &&
        data.map((elem, ind) => (
          <div key={ind} className="container">
            <div>ID:{elem._id}</div>
            <div>NAME:{elem.name}</div>
            <div>TRIPS:{elem.trips}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
