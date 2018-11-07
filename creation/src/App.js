import React, { Component } from 'react';
import './components/css/main.css';
import Sidebar from "./components/js/sidebar/Sidebar.js";
import Main from "./components/js/main/Main.js"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {sidebarOpen: false, openPage: "nothing"};
        this.setFunctions();
    }
    
    setFunctions() {
        this.setSidebarOpen = this.setSidebarOpen.bind(this);
        this.setOpenPage = this.setOpenPage.bind(this);
    }

    setSidebarOpen(val) {
        this.setState({sidebarOpen: val});
    }

    setOpenPage(val) {
        this.setState({openPage: val});
    }

    render() {
        return (
            <div>
                <Sidebar
                    actualState={this.setSidebarOpen}
                    actualPage={this.setOpenPage}
                />
                <Main
                    sidebarOpen={this.state.sidebarOpen}
                    pageOpen={this.state.openPage}
                />
            </div>
        );
    }
}

export default App;
