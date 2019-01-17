import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Меню</a>
                </nav>
                {this.props.children}
            </div>
        );
    }
}


export default App;