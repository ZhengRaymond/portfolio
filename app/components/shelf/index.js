import styled from 'styled-components';
import _ from 'lodash';
import React from 'react';
import { fadein2 } from 'styles/animations';
import GithubIcon from 'react-icons/lib/fa/github-square';
import GithubIcon2 from 'react-icons/lib/fa/github-alt';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import ClipboardButton from 'react-clipboard.js';
import ReactTooltip from 'react-tooltip'

const ShelfContainer = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 5;

  padding: 0px 15px;
  border-bottom-left-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);

  color: white;

  animation: ${fadein2} 0.5s;
`

const ShelfItem = styled.a`
  margin: 5px 0px 0px 10px;
  margin-top: 0;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.5s;

  &:hover {
    color: #888;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

const ShelfText = styled.div`
  font-size: 12px;
  color: black;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: #555;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

const VL = styled.div`
  width: 2px;
  height: 12px;
  background-color: #555;
  margin: 2px 15px 0 15px;
`

const items = [
  { url: 'https://github.com/ZhengRaymond', name: 'GitHub', type: 'button' },
  { url: 'https://www.linkedin.com/in/r29zheng/', name: 'LinkedIn', type: 'button' },
  { url: '', name: 'raymond.zheng@edu.uwaterloo.ca', type: 'text' },
  { url: '', name: '(408) 226 - 1234', type: 'text' },
]

export default class Shelf extends React.Component {
  render() {
    return (
      <ShelfContainer>
        <ShelfItem target="_blank" href='https://github.com/ZhengRaymond'><GithubIcon/></ShelfItem>
        <ShelfItem target="_blank" href='https://www.linkedin.com/in/r29zheng/'><LinkedInIcon/></ShelfItem>
        <VL/>
        <ClipboardButton data-clipboard-text="raymond.zheng@edu.uwaterloo.ca" data-tip="Copied to clipboard!">
          <ShelfText>raymond.zheng@edu.uwaterloo.ca</ShelfText>
        </ClipboardButton><ReactTooltip event="click" place="bottom" scrollHide={true}/>
        <VL/>
        <ClipboardButton data-clipboard-text="4082261234" data-tip="Copied to clipboard!">
          <ShelfText>(408) 226-1234</ShelfText>
        </ClipboardButton><ReactTooltip event="click" place="bottom" scrollHide={true}/>

      </ShelfContainer>
    )
  }

}
