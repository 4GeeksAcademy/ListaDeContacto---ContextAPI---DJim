import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className=" home-container vw-100 d-flex align-items-center justify-content-center ">
    <div className="text-center mt-5">
      <h1>Welcome To My List Contact !</h1>
      
      <Link to="/agenda-david" className=" agenda btn btn-success align-items-center fs-5">
        Show me the agenda
      </Link>
    </div>
  </div>
	);
};