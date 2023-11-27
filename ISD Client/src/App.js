import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AnnouncementList from "./components/frank/AnnouncementList";
import AnnouncementDetail from './components/frank/AnnouncementDetail';
import AnnouncementForm from './components/frank/AnnouncementForm';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={AnnouncementList} exact />
            <Route path="/announcement/:id" component={AnnouncementDetail} />
            <Route path="/create" component={AnnouncementForm} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
