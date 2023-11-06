import React from "react";
import { useTable, Column } from "react-table";
import styled from "styled-components";

type Props = {
  columns: Array<Column<object>>;
  data: Array<object>;
};

function ReactTable({ columns, data }: Props) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumnProps } = column.getHeaderProps();
                  return (
                    <th
                      key={key}
                      style={{ width: column.width }}
                      {...restColumnProps}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </Thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <TbodyTr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <td key={key} {...restCellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </TbodyTr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ReactTable;

/*table styling하기*/
const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: white;
`;

const Table = styled.table`
  height: 100%;
  width: 100%;
`;

const Thead = styled.thead`
  position: sticky;
  top: 0px;
  margin: 0;
  background-color: white;
  font-size: ${(props) => props.theme.size.small};
`;

const TbodyTr = styled.tr`
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.lightgray};
  }
  font-size: ${(props) => props.theme.size.small};
`;
