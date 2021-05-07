import React from 'react';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

const MiWspA = () => (
  <ReactWhatsapp number="2216701280" message="Hello World!!!" />
);

class MiWsp extends React.PureComponent {
   render() {
      return (

            <MiWspA />
            );
           
    }
  }

export default MiWsp;