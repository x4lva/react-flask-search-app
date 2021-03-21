import "./App.css";
import "../assets/css/bootstrap/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../redux";
import SearchWrapper from "../components/SearchWrapper/SearchWrapper";

function App() {
    return (
        <Provider store={store}>
            <SearchWrapper />
        </Provider>
    );
}

export default App;
