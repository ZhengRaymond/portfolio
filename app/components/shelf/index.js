import styled from 'styled-components';
import _ from 'lodash';
import React from 'react';
import { fadein2 } from 'styles/animations';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedInIcon from 'react-icons/lib/fa/linkedin';
import PhoneIcon from 'react-icons/lib/fa/phone';
import EmailIcon from 'react-icons/lib/fa/envelope-o';

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
    outline:0;
  }

  &:hover {
    color: #blue;
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
]

export default class Shelf extends React.Component {
  render() {
    return (
      <ShelfContainer>
        {
          _.map(items, (item) => {
            if (item.url) {
              return (
                <ShelfButton key={item.name} target="_blank" href={item.url}>{item.button}</ShelfButton>
              )
            }
            else {
              return (
                <ClipboardButton key={item.name} data-clipboard-text={item.value} data-tip="Copied to clipboard!">
                  <ShelfButton>{item.button}</ShelfButton>
                </ClipboardButton>
              )
            }
          })
        }
      </ShelfContainer>
    )
  }

}
