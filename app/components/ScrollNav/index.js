import React from 'react';
import  { Link } from 'react-scroll';
import { fadein2, shrink } from 'styles/animations';
import styled from 'styled-components';

const ScrollBarArea = styled.div`
  position: fixed;
  height: 100vh;
  padding: 3vh 25px 2vh 25px;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    :not(.source, .socket-label) {
      opacity: 0.6;
      transition: all 0.5s;
    }
  }
  animation: ${shrink} 3s, ${fadein2} 3.5s;
`

const ScrollBar = styled.div`
  position: relative;
  height: 80vh;
  width: 4px;
  opacity: 0.8;
  border-radius: 2px;
  background-color: rgba(50, 50, 50, 0.8);
  transition: all 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ScrollSocketAreaVertical = styled(Link)`
  position: relative;
  width: 40px;
  height: 60px;
  margin-left: -18px;
  border-radius: 20px;

  &:hover, &.open {
    .socket {
      transform: scale(3);
      @media (max-device-width: 600px) {
        height: 24px;
      }
      opacity: 1.0;
      transition: all 0.5s;
    }
    .socket-label {
      transform: translateX(0px);
      opacity: 1;
      transition: all 0.5s;
    }
  }
`;

const ScrollSocketAreaHorizontal = styled.div`
  position: absolute;
  width: 130px;
  @media (max-device-width: 1000px) {
    width: 100px;
  }
  @media (max-device-width: 780px) {
    width: 75px;
  }
  height: 10px;

  margin-top: 26px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: all 0.5s;
`;


const ScrollSocketBead = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  margin-left: -45px;
  @media (max-device-width: 1000px) {
    margin-left: -30px;
  }
  @media (max-device-width: 780px) {
    margin-left: -18px;
  }
  border-radius: 4px;
  background-color: black;
  opacity: 1.0;
  cursor: pointer;
  transition: all 0.5s;
`

const ScrollSocketLabel = styled.div`
  position: absolute;
  white-space: nowrap;
  left: 45px;
  transform: translateX(-30px);
  font-size: 15px;
  opacity: 0;
  cursor: pointer;
  transition: all 0.5s;
`

class ScrollSocketArea extends React.Component {
  render() {
    return (
      <ScrollSocketAreaVertical activeClass="open" spy={true} to={this.props.id} smooth={true} duration={500}>
        <ScrollSocketAreaHorizontal className="socket-area-horizontal">
          <ScrollSocketBead className="socket"/>
          <ScrollSocketLabel className="socket-label">{this.props.name}</ScrollSocketLabel>
        </ScrollSocketAreaHorizontal>
      </ScrollSocketAreaVertical>
    )
  }
}
// const Toggle = styled.div`
//   width: 100px;
//   height: 30px;
//   display: flex;
//   flex-direction: column;
//
//   white-space: nowrap;
//   margin-top: 15px;
//   margin-left: -15px;
// `
//
// const ToggleButton = styled.div`
//   padding: 3px 5px;
//   display: inline;
//   color: black;
//
//   &:hover {
//     color: #003899;
//     border-style: none;
//   }
// `

export default class ScrollNav extends React.Component {
  render() {
    return (
      <ScrollBarArea className="bar-area">
        <ScrollBar className="bar">
          <ScrollSocketArea id="home" name="Home"/>
          <ScrollSocketArea id="work-experience" name="Work Experience"/>
          <ScrollSocketArea id="projects" name="Projects"/>
        </ScrollBar>
      </ScrollBarArea>
    )
  }
}
