import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';

// class type
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    // 상위 컴포넌트 App의 값을 하위 컴포넌트 Subject에 넘기는 것은 가능하다
    this.state = {
      mode: 'create',
      selected_content_id: 2,
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
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode == 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        // add Content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // array.push의 경우 나중에 퍼포먼스 측면에서 문제가 생길 수 있다
        // this.state.contents.push(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        // 배열의 복사 Array.from
        // 객체의 복사, 추가 Object.assign
        // var newContents = Array.from(this.state.contents);
        // newContents.push(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        this.setState({
          // content: this.state.contents,
          contents: _contents,
          // contents: newContents
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
    console.log('render', this);
    return (
      <div className="App">
        {/* Hello, React!! */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC
          onChangePage={function(id) {
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {_article}
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
