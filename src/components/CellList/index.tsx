import React from 'react';
import { useTypedSelector } from '../../hooks';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { data, order } }) => order.map((id) => data[id]));

  return <div>Cell List</div>;
};

export default CellList;
