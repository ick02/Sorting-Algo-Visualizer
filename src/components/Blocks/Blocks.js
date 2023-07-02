import React, { useState, useEffect } from 'react';
import './Blocks.css';

function Blocks({ blocks, compare, sorted, swap }) {
  const [width, setWidth] = useState(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5));
  const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent';

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));
    };

    window.addEventListener('resize', handleResize);

    setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));
  }, [blocks.length]);

  return (
    <div className='listBlocks'>
      <div className='blocks-container'>
        {blocks.map((block, i) => {
          const height = block * 500 / blocks.length;
          let bg = 'turquoise';

          if (compare && (i === compare[0] || i === compare[1])) {
            bg = '#fff050';
          }

          if (swap && (i === swap[0] || i === swap[1])) {
            bg = 'red';
          }

          if (sorted && sorted.includes(i)) {
            bg = '#4bc52e';
          }

          const style = {
            backgroundColor: bg,
            color: color,
            width: width,
            height: height,
          };

          return <div key={i} className='block' style={style}>{block}</div>;
        })}
      </div>
    </div>
  );
}

export default Blocks;
