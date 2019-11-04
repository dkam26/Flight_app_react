import React, {useReducer, useEffect} from "react";
import '../App.css';
import Header from "./Header";
import Flight from "./Flights";
import Search from "./Search";
import FLIGHTS_API from "../fights_content";

const initialState ={
  loading: true,
  flights:FLIGHTS_API,
  errorMessage: null
}

const reducer = (state,action)=>{
  switch(action.type) {
    case "SEARCH_FLIGHTS_REQUEST":
      return {
        ...state,
        loading:true,
        errorMessage:null
      };
    case "SEARCH_FLIGHTS_SUCCESS":
      return{
        ...state,
        loading:false,
        flights:action.payload
      }
    case "SEARCH_FLIGHTS_FAILURE":
          return {
            ...state,
            loading: false,
            errorMessage: action.error
          };
    default:
      return state;
  }
}
const App=()=>{
    const[state, dispatch]  = useReducer(reducer,initialState);
    useEffect(()=>{
      dispatch({
        type: "SEARCH_FLIGHTS_SUCCESS",
        payload: FLIGHTS_API
      });
    },[])
    const search = searchValue =>{
      dispatch({
        type:"SEARCH_FLIGHTS_REQUEST"
      })
      const flightSearched = FLIGHTS_API.filter(flight => flight.Airline ===searchValue)

      if(flightSearched.length){

        dispatch({
          type: "SEARCH_FLIGHTS_SUCCESS",
          payload: flightSearched
      });
      } else{
        dispatch({
          type: "SEARCH_FLIGHTS_FAILURE",
          error: "Not found"
      });
      }
    }
    const { flights, errorMessage, loading } = state;
    return (
      <div className="App">
        <Header text="Flights app" />
        <Search search={search} />

         <div className="flights">
          {loading && !errorMessage ? (
            <span>loading... </span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            <Flight key={flights.id} flight={flights} />

          )}
        </div>
      </div>
    );
  }
export default App;