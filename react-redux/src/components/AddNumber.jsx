import React, { Component } from 'react';
// import store from '../store';

export default class AddNumber extends Component {
    state = {size:1}
    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={function(){
                    // this.props.onClick(this.state.size);
                    // store.dispatch({type:'INCREMENT', size:this.state.size})
                    this.props.onClick(this.state.size); // 더이상 redux에 종속되지 않고 화면에 뭔가를 표시해주는 프레젠테이셔널 컴포넌트로 돌아옴
                }.bind(this)}></input>
                <input type="text" value={this.state.size} onChange={function(e){
                    this.setState({size:Number(e.target.value)});
                }.bind(this)}></input>
            </div>
        )
    }
}