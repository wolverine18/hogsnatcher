import React from "react";
import axios from "axios";
import CatchesGrid from "./CatchesGrid";
import API from "../API";

function Home() {
  const [getCatches, setCatches] = React.useState([]);
  const [getLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // axios.get('https://us-central1-hogsnatcher-3e6c3.cloudfunctions.net/api/catches')
    // .then((res) => {
    //     setCatches(res.data);
    // }).catch(err => {
    //     console.error(err);
    // });
    API.getCatches().then((data) => {
      setLoading(false);
      setCatches(data);
    });
  });

  return (
    <div>
      <h1>Home Page</h1>
      <CatchesGrid catches={getCatches}></CatchesGrid>
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
