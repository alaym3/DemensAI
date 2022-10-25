import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Navigation from "../components/Navigation";
import Home from "./Home";
import {Box} from "@mui/material";
import Results from "./Results";
import Information from "./Information";
import {useState} from "react";

function Base() {
    const [page, setPage] = useState(0);


    return (
        <Box pt={2}>
            {page === 0 && <Home/>}
            {page === 1 && <Results/>}
            {page === 2 && <Information/>}
            <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
                <Navigation page={page} setPage={setPage}/>
            </AppBar>
        </Box>
    );
}

export default Base()