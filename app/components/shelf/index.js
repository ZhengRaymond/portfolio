import styled from 'styled-components';
import _ from 'lodash';
import React from 'react';
import { fadein2 } from 'styles/animations';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedInIcon from 'react-icons/lib/fa/linkedin';
import PhoneIcon from 'react-icons/lib/fa/phone';
import EmailIcon from 'react-icons/lib/fa/envelope-o';
import ResumeIcon from 'react-icons/lib/fa/file-text-o';

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

  @media (max-device-width: 700px) {
    width: 100%;
    border-bottom-left-radius: 0px;
  }
`

const ShelfButton = styled.a`
  margin: 5px 10px 0px 10px;
  margin-top: 0;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.5s;

  &:focus {
    outline:0 !important;
  }

  &:hover {
    color: orange;
    transform: scale(1.2);
    transition: all 0.5s;
  }
`

const ShelfButton2 = styled(ClipboardButton)`
  margin: 0px 3px 0px 3px;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.5s;

  &:focus {
    outline:0 !important;
  }

  &:hover {
    color: orange;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
//
// const ShelfText = styled.div`
//   font-size: 12px;
//   color: black;
//   cursor: pointer;
//   transition: all 0.5s;
//
//   &:hover {
//     color: #555;
//     transform: scale(1.1);
//     transition: all 0.5s;
//   }
// `
//
// const VL = styled.div`
//   width: 2px;
//   height: 12px;
//   background-color: #555;
//   margin: 2px 15px 0 15px;
//
//   @media (max-device-width: 480px) {
//     margin: 2px 3px 0 3px;
//     width: 1px;
//   }
// )
// `

const items = [
  { url: 'https://github.com/ZhengRaymond', name: 'GitHub', button: <GithubIcon/>, text: null },
  { url: 'https://www.linkedin.com/in/r29zheng/', name: 'LinkedIn', button: <LinkedInIcon/>, text: null },
  { value: 'raymond.zheng@edu.uwaterloo.ca', name: 'Email', button: <EmailIcon/> , text: 'raymond.zheng@edu.uwaterloo.ca' },
  { value: '2266001234', name: 'Phone', button: <PhoneIcon/>, text: '(226) 600-1234' },
  { url: "https://github.com/ZhengRaymond/resume/blob/master/Raymond Zheng's Resume.pdf?raw=true", name: 'Resume', button: <ResumeIcon/>, text: null },
]

export default class Shelf extends React.Component {
  render() {
    return (
      <ShelfContainer>
        <ReactTooltip event="click" place="bottom" afterShow={() => setTimeout(() => ReactTooltip.hide(), 1500)}/>
        {
          _.map(items, (item) => {
            if (item.url) {
              return (
                <ShelfButton aria-label={item.name} key={item.name} target="_blank" href={item.url}>{item.button}</ShelfButton>
              )
            }
            else {
              return (
                <div>
                  <ShelfButton2 aria-label={item.name} ref="tooltip" key={item.name} data-clipboard-text={item.value} data-tip="Copied to clipboard!" data-delay-show="100">
                    {item.button}
                  </ShelfButton2>
                </div>
              )
            }
          })
        }
      </ShelfContainer>
    )
  }

}
