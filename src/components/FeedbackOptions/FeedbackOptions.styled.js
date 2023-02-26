import styled from 'styled-components';

const Button = styled.button`
:hover {
    transform: scale(1.1);
  background-color: green;
  color: #fff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
};
min-width: 100px;
min-height: 35px;
background-color: darkgrey; 
border: grey;
border-radius: 3px;
margin-right: 15px;
margin-bottom: 15px;
cursor: pointer;

`

export default Button;
