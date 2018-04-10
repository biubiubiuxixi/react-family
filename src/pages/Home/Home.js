import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '小希希',
            age: 1,
        };
    }

    handleClick = () =>
        this.setState({
            age: this.state.age + 1,
        })

    render() {
        const { name, age } = this.state;
        return (
            <div>
                这是home页。<br />
                大家好我是{name}
                点它加一
                <button onClick={this.handleClick}>按钮</button>
                {age}<br />
                请仔细看哦state可以保存了哦
                嘿嘿嘿
                <img src="./../../images/bg.jpg" />
            </div>
        )
    }
}