import './App.css';
import {navigate, Router} from "@reach/router";
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllAuthors from "./components/AllAuthors";
import NewAuthor from "./components/NewAuthor";
import Update from "./components/Update";
import axios from "axios";

function App() {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllAuthors')
            .then(res =>{
                setAuthors(res.data)
            });
    }, [])

    const createAuthor = author => {
        axios.post("http://localhost:8000/api/create/new", author)
            .then(res => setAuthors([...authors, res.data]))
            .then(navigate('/'))
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

  return (
      <div className="App">
        <Router>
          <AllAuthors path="/"/>
          <NewAuthor path="/new" onSubmitProp={createAuthor} initialName="" errors={errors}/>
          <Update path={"update/:id"}/>
        </Router>
      </div>
  );
}

export default App;