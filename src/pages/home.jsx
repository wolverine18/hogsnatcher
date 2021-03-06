import React from "react";
import API from "../API";
import BassTable from "../components/BassTable";
import SalmonTable from "../components/SalmonTable";
import WalleyeTable from "../components/WalleyeTable";

function Home() {
  const [getBass, setBass] = React.useState([]);
  const [getSalmon, setSalmon] = React.useState([]);
  const [getWalleye, setWalleye] = React.useState([]);
  const [getLoading, setLoading] = React.useState(true);
  const [getFirstSalmonLoad, setFirstSalmonLoad] = React.useState(true);
  const [getFirstWalleyeLoad, setFirstWalleyeLoad] = React.useState(true);
  const [getFirstBassLoad, setFirstBassLoad] = React.useState(true);
  const [getCatchType, setCatchType] = React.useState('bass');

  React.useEffect(() => {
    if (getFirstBassLoad){
      API.getBass().then((data) => {
        setFirstBassLoad(false);
        setBass(data);
        setLoading(false);
    })
    .catch((err) => {
      console.log(err)
    });
    }
    
  });

  const bassClicked = () => {
    setLoading(true);
    setCatchType('bass');
    setLoading(false);
  };

  const salmonClicked = () => {
    setLoading(true);
    if (getFirstSalmonLoad) {
      API.getSalmon().then((data) => {
        setSalmon(data);
        setFirstSalmonLoad(false);
      });
    }
    setCatchType('salmon');
    setLoading(false);
  };

  const walleyeClicked = () => {
    setLoading(true);
    if (getFirstWalleyeLoad) {
      API.getWalleye().then((data) => {
        setWalleye(data);
        setFirstWalleyeLoad(false);
      });
    }
    setCatchType('walleye');
    setLoading(false);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div className="form-group">
        <button type="submit" className="btn btn-primary" onClick={bassClicked}>
          Bass
        </button>
        <button
          type="submit"
          id="salmon"
          className="btn btn-primary"
          onClick={salmonClicked}
        >
          Salmon
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={walleyeClicked}
        >
          Walleye
        </button>
      </div>
      {getCatchType === 'bass' && (
        <BassTable bass={getBass}></BassTable>
      )}
      {getCatchType === 'salmon' && (
        <SalmonTable salmon={getSalmon}></SalmonTable>
      )}
      {getCatchType === 'walleye' && (
        <WalleyeTable walleye={getWalleye}></WalleyeTable>
      )}
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
