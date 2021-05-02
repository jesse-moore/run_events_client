import React from 'react';
import { Home } from './pages/Home';
import { EventEdit } from './pages/EventEdit';
import { NarBar } from './components/NarBar';

function App() {
    return (
        <div className="">
            <NarBar />
            <header className="App-header"></header>
            {/* <Home /> */}
            <EventEdit />
        </div>
    );
}

export default App;
