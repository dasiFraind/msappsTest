import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21&format=json&nojsoncallback=1')
      .then((res) => {
        console.log(res.data);
        setData(res.data.photos);
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Router>
      <div className="App">
        {data && <Menu data={data}></Menu>}
      </div>
    </Router>
  );
}

export default App;