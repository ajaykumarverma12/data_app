import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homerouting from '../component/Homerouting';
import App from '../App';
import Mobileverification from '../component/Mobileverification';
import Daterouting from "../component/Daterouting";
import Paymentrouting from '../component/Paymentrouting';
import Accountorder from '../component/Accountorder';
import Addresslogin from '../component/Addresslogin';
import Myorder from '../component/Myorder';
import Singleitemadd from '../component/Singleitemadd';
import Singlecategory from '../component/Singlecategory';
import RedLabelchilli from '../component/RedLabelchilli';
class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Homerouting} />
          <Route path="/mobile" component={Mobileverification} />
          <Route path="/date" component={Daterouting} />
          <Route path="/pay" component={Paymentrouting} />
          <Route path="/account" component={Accountorder} />
          <Route path="/addressone" component={Addresslogin} />
          <Route path="/myordervale" component={Myorder} />
          <Route path="/orderconfirm" component={Singleitemadd} />
          <Route path="/singleitem" component={Singlecategory} />
          <Route path="/addtealabel" component={RedLabelchilli} />

        </Router>
      </div>
    );
  }

}

export default Routes;
