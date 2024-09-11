import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
    const {fetchImageByCateogary,setQuery} = useContext(PixabayContext)
  return (
    <>
    <div className="container text-center my-3">
      <button onClick={()=>fetchImageByCateogary("places")} type="button" className="btn btn-outline-primary mx-3">
        Places
      </button>
      <button onClick={()=>fetchImageByCateogary("science")} type="button" className="btn btn-outline-secondary mx-3">
        Science
      </button>
      <button onClick={()=>fetchImageByCateogary("computer")} type="button" className="btn btn-outline-warning mx-3">
        Computer
      </button>
      <button onClick={()=>fetchImageByCateogary("education")} type="button" className="btn btn-outline-info mx-3">
        Education
      </button>
      <button onClick={()=>fetchImageByCateogary("religion")} type="button" className="btn btn-outline-light mx-3">
        Religion
      </button>
      <button onClick={()=>fetchImageByCateogary("business")} type="button" className="btn btn-outline-info mx-3">
      Business
      </button>
      <button onClick={()=>fetchImageByCateogary("travel")} type="button" className="btn btn-outline-light mx-3">
        Travel
      </button>
      <button onClick={()=>fetchImageByCateogary("animals")} type="button" className="btn btn-outline-primary mx-3">
      Animals
      </button>
    </div>
    <div className="container" style={{width:"600px"}}>
    <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control bg-dark text-light"></input>
    </div>
    </>
  );
};

export default Navbar;
