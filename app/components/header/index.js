import { typing, blink_caret } from 'styles/animations';
import styled from 'styled-components';

const Header = styled.div`
  width: 90vmin;
  font-size: ${ props => {
    switch(props.size) {
      case "small": return "3vmin";
      case "medium": return "5vmin";
      default: return "10vmin"
    }
  }};
  font-family: 'Open Sans';
  white-space: nowrap;
  overflow: hidden;
  border-right: none;
  animation:
    ${ props => {
      if (props.animation === false) {
        return
      }
      else {
        return `${typing} 1.7s steps(30, end), ${blink_caret} .5s step-end 4`
      }
    }};
`

export default Header;
