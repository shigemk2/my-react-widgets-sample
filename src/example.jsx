var React = require('react');
var ReactDOM = require('react-dom');
var Name = React.createClass({
    render: function() {
        return (
            <span>{this.props.name}</span>
        );
    }
});
var HelloWorld = React.createClass({
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
