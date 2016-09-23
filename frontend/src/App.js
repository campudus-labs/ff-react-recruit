import React, {Component} from 'react';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Contact from './components/Contact/Contact.jsx';
import HeadText from './components/HeadText/HeadText.jsx';
import Introduction from './components/Introduction/Introduction.jsx';
import Technology from './components/Technology/Technology';
import Philosophy from './components/Philosophy/Philosophy';
import Character from './components/Character/Character';
import Visitor from './components/Visitor/Visitor';

import './scss/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ContentWrapper>
          <HeadText/>
          <Introduction/>
          <Character/>
          <Technology/>
          <Philosophy/>
          <Contact/>
          <Visitor/>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
}

const ContentWrapper = (props) => {
  return (
    <div className="content-wrapper">
      {props.children}
    </div>
  )
};