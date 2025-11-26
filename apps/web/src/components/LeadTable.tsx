import { useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import type { Lead } from '../../../shared/mockData';

type Props = {
  data: Lead[];
  onRowClick?: (lead: Lead) => void;
};

export const LeadTable = ({ data, onRowClick }: Props) => {
  const columns = useMemo<ColumnDef<Lead>[]>(
    () => [
      { header: 'Name', accessorKey: 'name' },
      { header: 'Campaign', accessorKey: 'campaign' },
      { header: 'Status', accessorKey: 'status' },
      { header: 'City', accessorKey: 'city' },
      { header: 'Owner', accessorKey: 'owner' },
      { header: 'Last Activity', accessorKey: 'lastActivity' }
    ],
    []
  );

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="glass-panel neon-border overflow-x-auto rounded-2xl">
      <table className="min-w-full divide-y divide-white/5 text-sm">
        <thead className="text-left text-gray-400">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-3 font-medium uppercase tracking-wider">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-white/5">
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              className="hover:bg-white/5 cursor-pointer transition-colors"
              onClick={() => onRowClick?.(row.original)}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

