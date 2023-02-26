import PropTypes from 'prop-types';
import Wrapper from './Layout.styled';

const Layout = ({ children }) => {
    return (
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    );
  };

Layout.propTypes = {  
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Layout; 