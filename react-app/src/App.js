import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

// class type
class App extends Component {
  constructor(props) {
    super(props);
    // 상위 컴포넌트 App의 값을 하위 컴포넌트 Subject에 넘기는 것은 가능하다
    this.state = {
      mode: 'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is HyperText ...'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
        {/* Hello, React!! */}
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

// function type
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
