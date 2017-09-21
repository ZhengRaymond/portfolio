/*** PRESENTATIONAL COMPONENT ***/

import React from 'react';
import styled from 'styled-components';
import Header from 'components/header';
import { fadein, fadein2  } from 'styles/animations';
import './page.css';
var FAExternalLink = require('react-icons/lib/fa/external-link');

const PanelGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 75vw;
  margin-bottom: 20vh;
  animation: ${fadein2} 3.5s;
`

const PanelBox = styled.div`
  position: relative;
  min-height: 30vh;
  padding-top: 9vh;
  margin: 2vh;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 15px 5px #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s, padding-top 0.5s 0.3s;

  &.open {
    box-shadow: 0 0px 25px 10px #e8f0ff;
    padding-top: 20px;
    transition: all 0.5s;
  }
`

const Details = styled.div`
  opacity: 0;
  max-height: 0;
  padding: 0 20px 20px 20px;
  overflow-y: hidden;
  text-align: left;
  font-size: 2vmin;
  transition: opacity 1s ease, max-height 1s ease;

  &.open {
    max-height: 400px;
    opacity: 1;
    transition: opacity 1s ease 0.2s, max-height 1s ease;
  }
`

const Section = styled.div`
  margin: 20px;
`

const Link = styled.a`
  position: absolute;
  right: 35px;
  top: 28px;

  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 2;
  color: black;

  &:hover {
    color: #aaa;
    transition: all 0.3s;
  }
`

function formatSubtitle(subtitles) {
  var str = '';
  var len = subtitles.length - 1;
  subtitles.forEach((subtitle, index) => {
    str += subtitle;
    if (index !== len) {
      str += ' | '
    }
  })
  return str;
}

class Panel extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        active: false
      }
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div style={{width: "100%", position: "relative"}}>
        <Link target="_blank" href={this.props.data.link}><FAExternalLink/></Link>
        <PanelBox className={this.state.active ? 'open' : ''} onClick={this.toggle}>
          <Header animation={false} size="medium">{this.props.data.title}</Header>
          <Header animation={false} size="small">{formatSubtitle(this.props.data.subtitle)}</Header>
          <Details className={this.state.active ? 'open' : ''}>
            {
              _.map(this.props.data.details, (detail, index) => <Section key={index}>{detail}</Section>)
            }
            {
              <div style={{ textAlign: 'center', fontStyle: 'italic' }}>{"Skills used: " + this.props.data.skills.toString()}</div>
            }
          </Details>
        </PanelBox>
      </div>
    )
  }
}

export default class Page extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'null'
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(value) {
    this.setState({ activePanel: value })
  }

  render() {
    return (
      <PanelGroup>
        <Header animation={false}>{this.props.title}</Header>
        {
          _.map(this.props.data, (piece) => {
            return <Panel key={piece.title} data={piece} active={piece.title === this.state.activePanel} onClick={this.toggle}/>
          })
        }
      </PanelGroup>
    );
  }
}
/*** ***/
