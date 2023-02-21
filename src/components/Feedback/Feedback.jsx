import { Component } from 'react';

class Feedback extends Component{
state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

addFeedback = (e) => {
    if (e.target.hasAttribute('data-good')){
        this.setState((prevState) => ({
        good: prevState.good + 1,   
    }))}else if(e.target.hasAttribute('data-bad')){
        this.setState((prevState) => ({
        bad: prevState.bad + 1,   
    }))}else if(e.target.hasAttribute('data-neutral')){
        this.setState((prevState) => ({
        neutral: prevState.neutral + 1,   
    }))}
};


countTotalFeedback = () => {  
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
};

countPositiveFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    return Math.round((100 / total) * this.state.good);
};

render(){
    return(
        <div>
            <h1>Please leave feedback</h1>
            <button type="button" onClick={this.addFeedback} data-good>Good</button>
            <button type="button" onClick={this.addFeedback} data-neutral>Neutral</button>
            <button type="button" onClick={this.addFeedback} data-bad>Bad</button>
            <p>Statistics</p>
            <ul>
                <li>Good: {this.state.good}</li>
                <li>Neutral: {this.state.neutral}</li>
                <li>Bad: {this.state.bad}</li>
                <li>Total: {this.countTotalFeedback()}</li>
                <li>Positive feedback: {this.countPositiveFeedbackPercentage() ? this.countPositiveFeedbackPercentage() : 0}%</li>
            </ul>
        </div>
    )
}
}

export default Feedback;