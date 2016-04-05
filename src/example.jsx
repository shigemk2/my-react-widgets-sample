import React from 'react';
import ReactDOM from 'react-dom';

import DropdownList from 'react-widgets/lib/DropdownList';

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <DropdownList/>
            </div>
        );
    }
});
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);
