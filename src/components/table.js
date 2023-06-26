import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy } from 'react-table'
import { ExportToCsv } from 'export-to-csv';
import Button from './button';

const TWO_HUNDRED_MS = 200;

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, TWO_HUNDRED_MS);

    return (
        <div className="block">
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                className="p-2 my-10 border rounded border-neutral-300 focus:ring-blue-500 sm:text-sm rainbow-ring"
                placeholder={`Search...`}
            />
        </div>

    )
}

export const ComponentToPrint = React.forwardRef((props, ref) => {
    let { columns, data } = props;
    const tableInstance = useTable({ columns, data });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;
    return (
        <div ref={ref} className="m-10">
            <style type="text/css" media="print">
                {" @page { size: landscape; } "}
            </style>
            <table className="min-w-full divide-y divide-neutral-200" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()} className="px-6 py-3 text-sm font-semibold text-left bg-neutral-100 text-neutral-900">
                                            {
                                                column.render('Header')}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? <ArrowLongDownIcon className="inline w-3 h-3 text-neutral-700"></ArrowLongDownIcon>
                                                        : <ArrowLongUpIcon className="inline w-3 h-3 text-neutral-700"></ArrowLongUpIcon>
                                                    : ''}
                                            </span>
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200"  {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className="bg-white">
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()} className="px-6 py-4 text-sm whitespace-nowrap text-neutral-900">
                                                    {
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );
});

export default function Table({ columns, data, exportData, exportColumns, onRowClick }) {
    const componentRef = useRef();
    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { globalFilter },
        preGlobalFilteredRows,
        setGlobalFilter
    } = tableInstance;

    const exportToCsv = () => {
        const options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            useTextFile: false,
            useBom: true,
            headers: exportColumns
        };

        const csvExporter = new ExportToCsv(options);

        csvExporter.generateCsv(exportData);
    }

    return <>
        <div className="flex justify-between">
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />

            <div>
                {exportData && <Button onClick={() => exportToCsv()} text="Export To CSV"></Button>}
            </div>
        </div>

        <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">

                <table className="min-w-full divide-y divide-neutral-200" {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 text-sm font-semibold text-left bg-neutral-100 text-neutral-900">
                                                {
                                                    column.render('Header')}
                                                <span>
                                                    {column.isSorted
                                                        ? column.isSortedDesc
                                                            ? <ArrowLongDownIcon className="inline w-3 h-3 text-neutral-700"></ArrowLongDownIcon>
                                                            : <ArrowLongUpIcon className="inline w-3 h-3 text-neutral-700"></ArrowLongUpIcon>
                                                        : ''}
                                                </span>
                                            </th>
                                        ))}
                                </tr>
                            ))}
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200"  {...getTableBodyProps()}>
                        {
                            rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()} className={`bg-white ${onRowClick ? ' cursor-pointer' : ''}`} onClick={onRowClick ? () => onRowClick(row.original) : () => {}}>
                                        {
                                            row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()} className="px-6 py-4 text-sm whitespace-nowrap text-neutral-900">
                                                        {
                                                            cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>


            </div>
        </div>
    </>

}