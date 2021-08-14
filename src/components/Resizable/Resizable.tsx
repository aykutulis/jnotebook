import React, { useEffect, useState } from 'react';
import { ResizableBoxProps } from 'react-resizable';
import { StyledResizable } from './Resizable.style';

interface ResizableProps {
  direction: 'vertical' | 'horizontal';
}

export const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(innerWidth * 0.65);

  useEffect(() => {
    let timer: any;

    const resizeListener = () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
        if (window.innerWidth * 0.65 < width) {
          setWidth(window.innerWidth * 0.65);
        }
      }, 100);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, [width]);

  if (direction === 'vertical') {
    resizableProps = {
      maxConstraints: [Infinity, innerHeight * 0.8],
      minConstraints: [Infinity, 42],
      width: Infinity,
      height: 300,
      resizeHandles: ['s'],
    };
  } else {
    resizableProps = {
      className: 'resize-horizontal',
      maxConstraints: [innerWidth * 0.8, Infinity],
      minConstraints: [innerWidth * 0.2, Infinity],
      width: width,
      height: Infinity,
      resizeHandles: ['e'],
      onResizeStop: (e, data) => {
        setWidth(data.size.width);
      },
    };
  }

  return <StyledResizable {...resizableProps}>{children}</StyledResizable>;
};
