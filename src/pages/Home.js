import {
    Button,
} from "@mui/material";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>DEMENSAI</h1>
            </header>
            <div className="recording">
                <h1>This is the home screen</h1>
            </div>
            <div>
                <Button variant="contained" >Record button example</Button>
            </div>
        </div>


    );
}

export default Home;

