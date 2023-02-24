import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
      <div>
        <main>{children}</main>
      </div>
    );
  };

Layout.propTypes = {  
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Layout; 