import React from 'react';

import './styles.scss';

const Inbox: React.FunctionComponent = () => (
    <div className="inbox-container">
        <header>Inbox</header>
        <input type="text" placeholder="Search"/>
    </div>
);

export default Inbox;