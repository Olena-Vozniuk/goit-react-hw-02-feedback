import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Layout from "./Layout/Layout";
import Section from './Section/Section';
import Statistics from "./Statistics/Statistics";
import Notification from './Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

addFeedback = (key) => {
this.setState(prevState =>({
    [key]: prevState[key] +1,
}));
};


countTotalFeedback = () => {  
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () =>{
const total = this.countTotalFeedback();
return Math.round((100 / total) * this.state.good);
};

render(){ 
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
    <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback} />
        </Section>

        <Section title='Statistics'> 
        {this.countTotalFeedback() ?   
          (<Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>) : (<Notification message="There is no feedback"></Notification>)
          }
    </Section>
      </Layout>
    )
  };
};

export default App;
