

import React from 'react';
import { Route, Routes } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            Hi
        </div>
    );
};
const ContentTab = () => {
    return (
        <div className="content-tab">
            <Routes>
                <Route path="/home" component={Home} />
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