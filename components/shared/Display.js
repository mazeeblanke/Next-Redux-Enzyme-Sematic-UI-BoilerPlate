import React from 'react';

const Display = (props) => {
  return (
    <>
      {
        props.if
          ? ( props.children )
          : null
      }
    </>
  );
}

export default Display;