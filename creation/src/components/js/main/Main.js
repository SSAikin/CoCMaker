import React, { Component } from 'react';
import NewCampaing from "./../campaing/NewCampaing.js"
import Settings from "./../settings/Settings.js"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {sidebarOpen: false}
        this.setActualPage = this.setActualPage.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({sidebarOpen: props.sidebarOpen});
        this.setState({openPage: this.pageOpen})
    }

    setActualPage(actual) {
        if (actual == "new") {
            return(<NewCampaing/>)
        }else if(actual == "settings") {
            return(<Settings/>)
        }
    }

    render() {
        return(
            <div className={"main " + (this.state.sidebarOpen ? "open" : "")} id="main">
                <div className="campaing">
                    {this.setActualPage(this.props.pageOpen)}
                </div>
            </div>
        )
    }
}
export default Main;