
import { Component } from 'react';
import './App.css';
import Header1 from './Components/HomeHeader/Header1';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import Datatable from './Components/Datatable';





class App extends Component {
  state = {
    loginContinued: false,
    showDashboard: false
  }
  loginContinuedHandler = () => {
    this.setState({ loginContinued: true })
  }
  showDashboardHandler = () => {
    this.setState({ showDashboard: true })
  }
  render() {

    return (
      <div className="App">
        {!this.state.loginContinued ? <div>
          {/* <Header />
          <Footer /> */}
          {/* <Datatable /> */}
         
        
          <Auth loginContinued={this.loginContinuedHandler} />
        </div> : null}
        {!this.state.showDashboard && this.state.loginContinued ? <Header1 showDashboard={this.showDashboardHandler} /> : null}
        {this.state.showDashboard ? <Dashboard /> : null}
      </div>
    );
  }
}

export default App;
