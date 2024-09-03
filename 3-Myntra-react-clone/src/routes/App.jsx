
import { Outlet } from "react-router-dom";
import "../App.css";
import HomeFooter from "../components/HomeFooter";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import ScreenLoader from "../components/ScreenLoader";


function App() {

  const fetchStatus = useSelector(store=>store.fetchStatus)
  return (
    <>
      
        <FetchItems/>
        {fetchStatus.currentlyFetching ? <ScreenLoader/> : <Outlet/>}
        <HomeFooter/>
      
    </>
  );
}

export default App;
