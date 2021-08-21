import React, { useEffect, useState, useMemo } from 'react';
import { ResizableBoxProps } from 'react-resizable';
import { StyledResizable } from './Resizable.style';

interface ResizableProps {
  direction: 'vertical' | 'horizontal';
}

export const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
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

  const resizableProps = useMemo<ResizableBoxProps>(() => {
    if (direction === 'vertical') {
      return {
        maxConstraints: [Infinity, innerHeight * 0.8],
        minConstraints: [Infinity, 42],
        width: Infinity,
        height: 350,
        resizeHandles: ['s'],
      };
    } else {
      return {
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
  }, [direction, width, innerWidth, innerHeight]);

  return <StyledResizable {...resizableProps}>{children}</StyledResizable>;
};
