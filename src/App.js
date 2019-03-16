import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import AppNavigation from './components/AppNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ background: 'url(/owl.jpg) center / cover' }}>
          <Header transparent title="Sowy" style={{ color: 'brown' }}>
           <AppNavigation/>

          </Header>


          <Drawer title="Sowy">
            <AppNavigation/>
          </Drawer>
          <Content>
            <h1 style={{ color: 'brown' }}>Witaj Basiu</h1>
          </Content>
        </Layout>



      </div>
    );
  }
}

export default App;
