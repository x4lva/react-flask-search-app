import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .post("http://localhost:3000/data", { search: "css" })
            .then((r) => setData(r));
    }, []);

    console.log(data.data);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
