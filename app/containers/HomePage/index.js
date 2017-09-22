import styled from 'styled-components';
import _ from 'lodash';
import React from 'react';
import  { Element } from 'react-scroll';

import { connect } from 'react-redux';
import { fetch_works, fetch_projects } from 'actions';

import { fadein, fadein2, glow } from 'styles/animations';
import COLORS from 'styles/colors';

import Page from 'containers/Page';
import Header, { SubHeader } from 'components/header'
import Shelf from 'components/shelf';
import ScrollNav from 'components/ScrollNav';
var FADown = require('react-icons/lib/fa/angle-double-down');

const ColorText = styled.span`
  color: ${props => COLORS[props.color] }
  font-weight: bold;
`

const DownwardArrow = styled(FADown)`
  position: absolute;
  bottom: 5vh;
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
  overflow-y: hidden;

  @media (max-device-width: 700px) {
    margin-left: 30px;
  }
`

const OnePage = styled(Element)`
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  min-height: 100vh;
`

const About = styled.div`
  width: 70vw;
  padding: 20px 0 0 0;
  text-align: left;
  font-size: 1em;
  animation: ${fadein2} 3.5s;
`

const ParallaxBack = styled.div`
  z-index: -2;
  position: absolute;
  top: 0;
  padding-top: 30px;
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
  filter: blur(6px);
  opacity: 0.25;
  transition: all 0.5s;

  &:hover {
    opacity: 0.5
    filter: blur(1px);
    transition: all 0.5s;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

const Entry = styled.div`
  font-size: 2vmin;
  margin: 3px;
  @media(max-device-width: 700px) {
    font-size: 2.5vmin;
  }
`

const StudyDetails = styled.div`
  margin-right: 60px;

  @media(max-device-width: 700px) {
    margin-right: 0px;
    margin-left: 60px;
  }
`

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      ReactSource: require('./appjs_source.json').source.substring(0, 2400 ),
      HTMLSource: '',
      currentSource: 'react'
    }
    this.updateBackground = this.updateBackground.bind(this);
  }

  updateBackground() {
    let text = document.documentElement.outerHTML;
    text = formatXml(text.substring(text.indexOf('<div id="app">'), 34000));

    this.setState({
      ...this.state,
      ["HTMLSource"]: text
    })
  }

  componentDidMount() {
    this.props.fetch_works();
    this.props.fetch_projects();
    setTimeout(this.updateBackground, 0);
  }


  render() {
    // But most of all, I am a <ColorText color="green">Learner</ColorText>. The biggest dilemma I experience day-to-day, is my evergrowing bucket-list of things to do, be it learning some new language or taking another interesting course, to scuba-diving (well, free diving) and archery. Alas, if only the 24-hour day was longer...
    return (
      <div>
        <Shelf/>
        <ScrollNav/>
        <Parallax>
          <div style={{overflowY: "hidden"}}>
            <OnePage name="home">
              <br/><br/>
              <Header animation={true}>{"Hello, I'm Raymond"}</Header>
              <About>
                I'm a 3rd-year student at the <ColorText color="gold">University of Waterloo</ColorText> (GPA 3.4), pursuing a Bachelor's of Computer Science along with minors in Statistics and in Combinatorics and Optimization, expecting to graduate in April 2020.
                <br/><br/>
                I'm a strong <ColorText color="blue">Full-stack Web Developer</ColorText>, experienced with various frontend frameworks, as well as with several platform infrastructure tools. I love solving backend logic, but at the same time have a passion for design. I'm also very interested in <ColorText color="red">Data Science</ColorText>, pursuing the University of Waterloo's Computer Science with Data Science Program.
                <br/><br/>
                Personally, I'm pursuing a skydiving license, love to go on road trips, hikes, or any outdoor hangouts, and play board games. I love to read books and watch anime -- always down for a good story!
                <br/><br/>
              </About>
              <div style={{position: "relative", flex:"1"}}>
                <DownwardArrow />
              </div>
            </OnePage>
            <OnePage name="work-experience">
              <Page data={this.props.works} title="Work Experience" />
              <br/><br/>
            </OnePage>
            <OnePage name="projects">
              <Page data={this.props.projects} title="Projects" />
              <br/><br/>
            </OnePage>
            <OnePage name="education">
              <Header animation={false}>Skills and Education</Header>
              <StudyDetails>
                <Col style={{textAlign: "center"}}>
                    <div style={{fontFamily: "Open Sans", fontSize: "5vmin", marginLeft: "70px"}}>My most proficient skills.</div>
                    <Row style={{justifyContent:"center"}}>
                      <Col style={{textAlign: "right", flex: "1"}}>
                        <Entry>Web</Entry>
                        <Entry>General</Entry>
                        <Entry>Database</Entry>
                        <Entry>Infrastructure</Entry>
                        <Entry>Data Science</Entry>
                        <Entry>Mobile</Entry>
                        <Entry>Scripting</Entry>
                      </Col>
                      <Col style={{textAlign: "left", flex: "1"}}>
                        <Entry>MEAN, React, Redux, Relay, Flask</Entry>
                        <Entry>C++, C</Entry>
                        <Entry>MongoDB, SQL, Sequelize, GraphQL</Entry>
                        <Entry>Kubernetes, Docker, Terraform, Vault</Entry>
                        <Entry>MatLab, Python, Tensorflow</Entry>
                        <Entry>React Native, Expo</Entry>
                        <Entry>Python, Bash</Entry>
                      </Col>
                    </Row>
                    <br/>
                    <div style={{fontFamily: "Open Sans", fontSize: "5vmin", marginLeft: "30px"}}>My current coursework.</div>
                    <Row style={{justifyContent:"center"}}>
                      <Col style={{textAlign: "right", flex:"1"}}>
                        <Entry>Computer Science</Entry>
                        <Entry>Statistics</Entry>
                        <Entry>Combinatorics & Optimization</Entry>
                        <Entry>Machine Learning (Udemy)</Entry>
                      </Col>
                      <Col style={{textAlign: "left", flex:"1"}}>
                        <Entry>Operating Systems, Algorithms, Numerical Computation</Entry>
                        <Entry>Applied Probability</Entry>
                        <Entry>Introduction to Graph Theory</Entry>
                        <Entry>Practical Deep Learning, Convolutional Neural Networks, Recurrent Neural Networks</Entry>
                      </Col>
                    </Row>
                </Col>
              </StudyDetails>
              <br/><br/>
            </OnePage>
          </div>
          <ParallaxBack>
            <BlurredCode>
              {this.state.currentSource === 'react' ? this.state.ReactSource : this.state.HTMLSource }
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
