import React from 'react';
import './bar.css';

const Bar = ({ currH, maxH, replaceWith, replaceFrom }) => {
  let percentHeight = (currH / maxH) * 100;

  return (
    <div
      id="bar"
      className={(replaceWith || replaceFrom) && 'active'}
      style={{
        height: `${percentHeight}%`,
      }}
    >
      {currH}
    </div>
  );
};

export default Bar;
