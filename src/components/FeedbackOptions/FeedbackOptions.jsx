import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => (
        <button
            key={option}
            onClick={() => onLeaveFeedback(option)}>
            {option}
        </button>
    ));
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };