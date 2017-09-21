import styled from 'styled-components';
import _ from 'lodash';
import React from 'react';

import { connect } from 'react-redux';
import { fetch_works, fetch_projects } from 'actions';

import { fadein, fadein2, fadein3, glow } from 'styles/animations';
import COLORS from 'styles/colors';
import Scroll, { Link, Element } from 'react-scroll';

import Page from 'containers/Page';
import Header from 'components/header'
import Shelf from 'components/shelf';
var FADown = require('react-icons/lib/fa/angle-double-down');

const ColorText = styled.span`
  color: ${props => COLORS[props.color] }
  font-weight: bold;
`

const DownwardArrow = styled(FADown)`
  position: absolute;
  top: 90vh;
  text-align: center;

  opacity: 0.0;
  font-size: 45px;
  transform: scaleY(0.7);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  animation: ${glow} 4s ease 4s infinite;

  &.hidden {
    left: -20px;
  }
`

function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    xml.split('\r\n').forEach(function(node) {
        var indent = 0;
        if ((/.+<\/\w[^>]*>$/).test(node)) {
            indent = 0;
        } else if (( /^<\/\w/ ).test(node)) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (( /^<\w[^>]*[^\/]>.*$/ ).test(node)) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
}

const Parallax = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;

  perspective: 1px;
  overflow-y: auto;
`

const OnePage = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  min-height: 100vh;
`

const About = styled.div`
  width: 60vw;
  padding: 20px 0 15vh 0;
  text-align: left;
  font-size: 1em;
  animation: ${fadein2} 3.5s;
`

const ParallaxBack = styled.div`
  z-index: -2;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  animation: ${fadein2} 3.5s;
  transform: translateZ(-1px) scale(2);
`

const BlurredCode = styled.div`
  margin-top: 0;
  margin-left: 30px;
  text-align: left;
  white-space: pre-wrap;
  filter: blur(2px);
  opacity: 0.05;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5
    transition: all 1.5s;
  }
`

const Front = styled.div`
  position: relative;
  top: 20vh;
  font-size: 50px;
  height: 500px
  animation: ${fadein2} 3.5s;
`

const data = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const ScrollNavArea = styled.div`
  position: fixed;
  height: 100vh;
  padding: 5vh 5vh 5vh 3vh;
  z-index: 3;
  opacity: 0.5;
  &:hover {
    > * {
      opacity: 1.0;
      transition: all 0.5s;
    }
  }
`

const ScrollNav = styled.div`
  position: absolute;
  height: 90vh;
  width: 4px;
  border-radius: 2px;
  background-color: rgba(150, 150, 150, 0.8);
  opacity: 0.5;
  transition: all 0.5s;
`

const ScrollSocketArea = styled.div`
  position: relative;
  margin-left: -18px;
  margin-top: 12vh;
  margin-bottom: 25vh;
  width: 40px;
  height: 60px;
  border-radius: 20px;

  &:hover {
    .socket {
      transform: scale(3);
      opacity: 0.8;
      transition: all 0.5s;
    }
    .socket-label {
      transform: translateX(0px);
      opacity: 1;
      transition: all 0.5s;
    }
  }
`;

const ScrollSocketArea2 = styled(Link)`
  position: absolute;
  width: 50px;
  height: 10px;
  margin-left: -5px;
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
  border-radius: 4px;
  background-color: black;
  opacity: 0.5;
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

class ScrollFn extends React.Component {
  render() {
    return (
      <ScrollNavArea className="nav-area">
        <ScrollNav className="nav">
          <ScrollSocketArea className="socket-area">
            <ScrollSocketArea2 to="home" smooth={true} duration={500}>
              <ScrollSocketBead className="socket"/>
              <ScrollSocketLabel className="socket-label">Home</ScrollSocketLabel>
            </ScrollSocketArea2>
          </ScrollSocketArea>
          <ScrollSocketArea className="socket-area">
            <ScrollSocketArea2 to="work-experience" smooth={true} duration={500}>
              <ScrollSocketBead className="socket"/>
              <ScrollSocketLabel className="socket-label">Work Experience</ScrollSocketLabel>
            </ScrollSocketArea2>
          </ScrollSocketArea>
          <ScrollSocketArea className="socket-area">
            <ScrollSocketArea2 to="projects" smooth={true} duration={500} >
              <ScrollSocketBead className="socket"/>
              <ScrollSocketLabel className="socket-label">Projects</ScrollSocketLabel>
            </ScrollSocketArea2>
          </ScrollSocketArea>
        </ScrollNav>
      </ScrollNavArea>
    )
  }
}

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      source: ''
    }
    this.updateBackground = this.updateBackground.bind(this);
  }

  updateBackground() {
    let text = document.documentElement.outerHTML;
    text = formatXml(text.substring(text.indexOf('<div id="app">'), 34000));

    this.setState({
      ...this.state,
      ["source"]: text
    })
  }

  componentDidMount() {
    this.props.fetch_works();
    this.props.fetch_projects();
    setTimeout(this.updateBackground, 0);
  }


  // <ScrollNav>
  //   <ScrollSocketFn/>
  // </ScrollNav>
  render() {
    // But most of all, I am a <ColorText color="green">Learner</ColorText>. The biggest dilemma I experience day-to-day, is my evergrowing bucket-list of things to do, be it learning some new language or taking another interesting course, to scuba-diving (well, free diving) and archery. Alas, if only the 24-hour day was longer...
    return (
      <div>
        <Shelf />
        <ScrollFn/>
        <Parallax>
          <Element name="home"/>
          <br/><br/>
          <OnePage>
            <Header animation={true}>{"Hello, I'm Raymond"}</Header>
            <About>
              I'm a 3rd-year student at the <ColorText color="gold">University of Waterloo</ColorText> (GPA 3.4), pursuing a Bachelor's of Computer Science along with minors in Statistics and in Combinatorics and optimization, expecting to graduate in April 2020.
              <br/><br/>
              I'm a strong <ColorText color="blue">Full-stack Web Developer</ColorText>, good and experienced with and experienced with platform infrastructure tools. I love solving backend logic, but at the same time have a passion for design. I'm also very interested in <ColorText color="red">Data Science</ColorText>, pursuing the University of Waterloo's Computer Science with Data Science Program.
              <br/><br/>
              Personally, I'm pursuing a skydiving license, love to go on road trips, hikes, or any outdoor hangouts, and play board games. I love to read books and watch anime -- always down for a good story!
            </About>
            <DownwardArrow />
            <br/><br/><br/><br/>
          </OnePage>
          <OnePage>
            <Element name="work-experience" className="element"/>
            <br/><br/>
            <Page data={this.props.works} title="Work Experience" />
          </OnePage>
          <OnePage>
            <Element name="projects"/>
            <br/><br/>
            <Page data={this.props.projects} title="Projects" />
          </OnePage>
          <ParallaxBack>
            <BlurredCode>
              {this.state.source}
            </BlurredCode>
          </ParallaxBack>
        </Parallax>
      </div>
    )
  }
}


const mapStateToProps = state => {
  var { works, projects } = state._root.entries[2][1];
  return {
    works,
    projects
  }
}

export default connect(mapStateToProps, { fetch_works, fetch_projects })(HomePage);
