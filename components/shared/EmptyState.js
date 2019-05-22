import React from 'react';
import { Image } from 'semantic-ui-react';

const EmptyState = (props) => {
  return (
    <div className="is-v-centered full">
      <Image className="h40" size="tiny" src={props.icon} />
      <p className="mt-10">{props.text}</p>
      {
        props.children
      }
    </div>
  );
}

export default EmptyState;