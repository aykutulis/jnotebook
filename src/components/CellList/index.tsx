import React, { Fragment } from 'react';
import { useTypedSelector } from '../../hooks';
import CellListItem from '../CellListItem';
import AddCellDivider from '../AddCellDivider';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { data, order } }) => order.map((id) => data[id]));

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCellDivider prevCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCellDivider prevCellId={null} forceVisible={cells.length === 0} />
      {renderedCells}
    </div>
  );
};

export default CellList;
