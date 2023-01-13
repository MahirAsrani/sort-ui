import React from 'react';
import './bar.css';

const Bar = ({ currH, maxH, replaceWith, replaceFrom, swap, sorted }) => {
  let percentHeight = (currH / maxH) * 100;

  return (
    <div
      id="bar"
      className={`
      ${sorted && 'sorted'}
      ${(replaceWith || replaceFrom) && swap && 'swap'} ${
        (replaceWith || replaceFrom) && 'active'
      }`}
      style={{
        height: `${percentHeight}%`,
      }}
    >
      {currH}
    </div>
  );
};

export default Bar;
