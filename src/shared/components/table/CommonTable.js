import React from 'react';
import { useTable, useColumnOrder, useRowSelect } from 'react-table';
import { styled } from '@mui/material/styles';
import IconSettings from 'assets/images/icons/ic-settings';
import { Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import PopupName from 'shared/components/common/popup/PopupName';
import LoaderIcon from 'shared/components/common/loader/LoaderIcon';
import { RemoveScroll } from 'react-remove-scroll';

const StyledTableCell = styled(TableCell)((props) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F2F2F2',
    padding: '0px 10px',
    fontWeight: 'bold',
    ...props.sx,
  },
  [`&.${tableCellClasses.body}`]: {
    height: 60,
    padding: '5px 10px',
  },
}));

const StyledTableRow = styled(TableRow)((props) => ({
  backgroundColor: props.selected ? '#FAF9F3' : '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FAF9F3',
  },
}));

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    return (
      <Checkbox
        color="success"
        width="30px"
        maxWidth="30px"
        indeterminate={indeterminate}
        inputRef={resolvedRef}
        {...rest}
      />
    );
  },
);

export default function CommonTable({ data, columns, isLoading = true }) {
  const tableInstance = useTable(
    { columns, data },
    useColumnOrder,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          width: 50,
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    },
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    allColumns,
    prepareRow,
    setColumnOrder,
    setHiddenColumns,
  } = tableInstance;

  const changeColumnOrder = () => {
    EventRegister.emit(EVENT_SHOW_POPUP, {
      type: PopupName.CHANGE_COLUMN_ORDER_REACT_TABLE,
      open: true,
      payload: {
        allColumns,
        defaultColumns: columns,
        setColumnOrder,
        setHiddenColumns,
      },
    });
  };
  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.5)',
            zIndex: 100,
          }}
        >
          <RemoveScroll style={{ position: 'relative', top: '30%' }}>
            <LoaderIcon />
          </RemoveScroll>
        </div>
      )}
      <TableContainer
        sx={{
          maxWidth: '100%',
          maxHeight: '600px',
          minWidth: '100%',
          overflowX: 'auto',
        }}
      >
        <Table {...getTableProps()} stickyHeader>
          <TableHead sx={{ border: '1px solid #D8D7D7' }}>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                <StyledTableCell
                  sx={{
                    minWidth: 50,
                    width: 50,
                    maxWidth: 50,
                  }}
                >
                  <IconButton onClick={() => changeColumnOrder()}>
                    <IconSettings />
                  </IconButton>
                </StyledTableCell>

                {headerGroup.headers.map((column) => (
                  <StyledTableCell
                    align={column.align}
                    sx={{
                      minWidth: column.width,
                      maxWidth: column.width,
                    }}
                  >
                    {column.render('Header')}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <StyledTableRow
                  selected={row.isSelected}
                  {...row.getRowProps()}
                >
                  <StyledTableCell />
                  {row.cells.map((cell, index) => (
                    <StyledTableCell
                      {...cell.getCellProps()}
                      align={columns[index - 1]?.align}
                    >
                      {cell.render('Cell')}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
