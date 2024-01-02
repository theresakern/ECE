import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

const Home = () => <div>Home Content</div>;
const Leistungen = () => <div>Leistungen Content</div>;
const Team = () => <div>Team Content</div>;
const Kontakt = () => <div>Kontakt Content</div>;
const Referenzen = () => <div>Referenzen Content</div>;

const ContentTab = () => {
    return (
        <div className="content-tab">
            <Routes>
                <Route path="/home" component={Home} />
                <Route path="/leistungen" component={Leistungen} />
                <Route path="/team" component={Team} />
                <Route path="/kontakt" component={Kontakt} />
                <Route path="/referenzen" component={Referenzen} />
            </Routes>
        </div>
    );
};

/* const ContentTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="content-tab">
            
            <div className="tab-navigation">
                <button onClick={() => setActiveTab('tab1')}>Tab 1</button>
                <button onClick={() => setActiveTab('tab2')}>Tab 2</button>
                <button onClick={() => setActiveTab('tab3')}>Tab 3</button>
            </div>

            
            <div className="tab-content">
                {activeTab === 'tab1' && <p>Content for Tab 1</p>}
                {activeTab === 'tab2' && <p>Content for Tab 2</p>}
                {activeTab === 'tab3' && <p>Content for Tab 3</p>}
            </div>
        </div>
    );
}; */

export default ContentTab;