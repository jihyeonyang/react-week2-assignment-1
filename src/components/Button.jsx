import React from 'react';

function Button({ number, onClick, children }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {children !== undefined ? children : number}
    </button>
  );
}

export default React.memo(Button);
