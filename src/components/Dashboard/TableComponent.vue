<script setup lang="ts">
import type {
  ColumnFiltersState,
  ExpandedState,
  SortingState,
  VisibilityState
} from '@tanstack/vue-table'
import {
  FlexRender,
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable
} from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'

import { h, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { cn, valueUpdater } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export interface Payment {
  id: string
  product: string
  price: number
  status: 'Sold' | 'Available'
  views: string
}

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    product: 'MacBook Pro',
    price: 316,
    status: 'Sold',
    views: '20'
  },
  {
    id: '3u1reuv4',
    product: 'MacBook Pro',
    price: 242,
    status: 'Sold',
    views: '5'
  },
  {
    id: 'derv1ws0',
    product: 'MacBook Pro',
    price: 837,
    status: 'Sold',
    views: '67'
  },
  {
    id: '5kma53ae',
    product: 'MacBook Pro',
    price: 874,
    status: 'Sold',
    views: '7'
  },
  {
    id: 'bhqecj4p',
    product: 'MacBook Pro',
    price: 721,
    status: 'Available',
    views: '8'
  }
]

const columnHelper = createColumnHelper<Payment>()

const columns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
        ariaLabel: 'Select all'
      }),
    cell: ({ row }) => {
      return h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        ariaLabel: 'Select row'
      })
    },
    enableSorting: false,
    enableHiding: false
  }),

  columnHelper.accessor('product', {
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('product'))
  }),
  columnHelper.accessor('price', {
    header: () => h('div', { class: '' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('price'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN'
      }).format(amount)

      return h('div', { class: 'font-medium' }, formatted)
    }
  }),
  columnHelper.accessor('status', {
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('status'))
  }),
  columnHelper.accessor('views', {
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('views'))
  })
]

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
  onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expanded),
  state: {
    get sorting() {
      return sorting.value
    },
    get columnFilters() {
      return columnFilters.value
    },
    get columnVisibility() {
      return columnVisibility.value
    },
    get rowSelection() {
      return rowSelection.value
    },
    get expanded() {
      return expanded.value
    },
    columnPinning: {
      // left: ['status']
    }
  }
})
</script>

<template>
  <div class="w-full">
    <Badge class="bg-[#FFB765] text-white rounde mb-5">Top 10 viewed products</Badge>
    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              :data-pinned="header.column.getIsPinned()"
              :class="
                cn(
                  { 'sticky bg-background/95': header.column.getIsPinned() },
                  header.column.getIsPinned() === 'left' ? 'left-0' : 'right-0'
                )
              "
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow :data-state="row.getIsSelected() && 'selected'">
                <TableCell
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  :data-pinned="cell.column.getIsPinned()"
                  :class="
                    cn(
                      { 'sticky bg-background/95': cell.column.getIsPinned() },
                      cell.column.getIsPinned() === 'left' ? 'left-0' : 'right-0'
                    )
                  "
                >
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TableCell>
              </TableRow>
              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ row.original }}
                </TableCell>
              </TableRow>
            </template>
          </template>

          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
