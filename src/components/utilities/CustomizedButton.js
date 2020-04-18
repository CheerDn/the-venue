import React from 'react';
import Button from '@material-ui/core/Button'

import ticketIcon from '../../resources/images/icons/ticket.png'

const CustomizedButton = (props) => {
  return (
    <Button
      href= {props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img 
        src={ticketIcon} 
        alt="button_icon"
        className="iconImage"
      />
      {props.text}
    </Button>
    
  );
};

export default CustomizedButton;