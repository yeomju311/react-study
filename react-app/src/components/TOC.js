import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC render');
    var lists = [];
    var data = this.props.data
    var i = 0;
    while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          {/* 
            컴포넌트 이벤트를 만드는 방법 1 
            속성을 이용한 방식
          */}
          <a
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            >{data[i].title}</a>
          {/* 
            컴포넌트 이벤트를 만드는 방법 2
            .bind()의 두 번째 인자는 onClick 내의 function에 e 인자 앞에 온다
            .bind()의 인자가 추가되면 e 인자의 순서는 계속 뒤로 밀려난다
          */}
          <a
            href={"/content/"+data[i].id}
            onClick={function(id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >{data[i].title}</a>
        </li>);
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
    </nav>
    );
  }
}

export default TOC;