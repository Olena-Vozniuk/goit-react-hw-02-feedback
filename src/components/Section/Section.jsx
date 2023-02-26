import { Title } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';



const Section = ({ title, children }) => {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    )
}

Section.propTypes = {
  title: PropTypes.string,  
  children: PropTypes.element.isRequired
};

export default Section;