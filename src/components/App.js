import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import WastedRendering from "./examination/WastedRendering";
import "./App.scss";
import Navbar from "./Navbar"

class App extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.setUsername();
        console.log(this.props);
    }
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar />
                    <div className="global">
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={() => <Landing />}
                            />
                            <Route
                                path="/wasted-rendering"
                                exact
                                component={() => <WastedRendering />}
                            />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state.game.username,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: () => dispatch(actions.setUsername()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
