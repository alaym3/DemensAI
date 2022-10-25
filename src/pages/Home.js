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
                <h3>This is the home screen</h3>
                <h2>This is more text</h2>
                <p>This is even more text</p>
            </div>
            <div>
                <Button variant="contained" >Record button example</Button>
            </div>
        </div>


    );
}

export default Home;

