import React from 'react';

export default function btn(props) {
  return <div> <button onClick={props.onClick} > { props.name } </button> </div>;
}
