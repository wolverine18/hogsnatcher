import React from "react";
//import axios from "axios";
import BassTable from "../components/BassTable";
import API from "../API";

function Home() {
  const [getBass, setBass] = React.useState([]);
  const [getLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // axios.get('https://us-central1-hogsnatcher-3e6c3.cloudfunctions.net/api/catches')
    // .then((res) => {
    //     setCatches(res.data);
    // }).catch(err => {
    //     console.error(err);
    // });
    API.getBass().then((data) => {
      setLoading(false);
      setBass(data);
    })
  });

  return (
    <div>
      <h1>Home Page</h1>
      <BassTable bass={getBass}></BassTable>
      <div className="text-center">
        {getLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
