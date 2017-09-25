import React from 'react';
import resume from './resume.pdf';

export default class ResumePage extends React.Component {
  render() {
    return (
      <embed src={resume} type="application/pdf" width="100%" height="900px"/>
    )
  }
}
