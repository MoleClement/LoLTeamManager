import React from 'react';
import './App.css';
import AppDrawer from "./components/Drawer/AppDrawer";
import history from "./util/history";

import { Router } from 'react-router';

function App() {
    return (<Router history={history} basename={process.env.PUBLIC_URL}>
            <div>
                <AppDrawer/>
            </div>
        </Router>
    );
}

export default App;
