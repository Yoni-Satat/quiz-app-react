import React, { Component } from 'react';
import AnswersSingle from './AnswersSingle';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/answers';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.options);
        this.setState({
          answers: data.options
        })
      })
      .catch((error) => console.log(error));
  }

  renderItem() {
    return this.state.answers.map((item) => (
      <AnswersSingle key={item.id} item={item.answer} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderItem()}
      </ul>
    );
  }
}

export default Answers;
