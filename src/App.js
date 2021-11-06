import Header from "./components/Header";
import HomePage from "./components/Content/HomePage";
import AboutPage from "./components/Content/AboutPage";
import Footer from "./components/Footer";
import {ThemeProvider} from "react-jss";
import theme from "./theme"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <Header/>

                    <Routes>
                        <Route path="/about/" element={<AboutPage/>}/>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>

                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>

    );
}

export default App;
