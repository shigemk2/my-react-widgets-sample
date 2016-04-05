import React from 'react';
import ReactDOM from 'react-dom';

import DropdownList from 'react-widgets/lib/DropdownList';

const HelloWorld = React.createClass({
    render: function() {
        var colors = ['orange', 'red', 'blue', 'purple'];
        return (
            <div>
                <DropdownList defaultValue={"orange"} data={colors}/>
            </div>
        );
    }
});
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);
