import React from 'react';
import ReactDOM from 'react-dom';

const Name = React.createClass({
    render: function() {
        return (
            <span>{this.props.name}</span>
        );
    }
});
const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <Name name="Test" />
            </div>
        );
    }
});
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);
