import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AppDrawer from "./components/Drawer/AppDrawer";


function App() {
    return (<Router basename={process.env.PUBLIC_URL}>
            <div>
                <AppDrawer/>
            </div>
        </Router>
    );
}

export default App;
