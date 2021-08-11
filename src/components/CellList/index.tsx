import React from 'react';
import { useTypedSelector } from '../../hooks';
import CellListItem from '../CellListItem';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { data, order } }) => order.map((id) => data[id]));

  const renderedCells = cells.map((cell) => <CellListItem key={cell.id} cell={cell} />);

  return <div>{renderedCells}</div>;
};

export default CellList;
