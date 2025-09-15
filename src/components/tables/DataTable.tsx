import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { Flex, Box, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Card from "../cards/Card";
import { useState } from "react";
import { PaginationControl } from "../pagination/PaginationControl";

interface DataTableProps<T> {
	tableData: T[];
	columns: ColumnDef<T, any>[];
	name: string;
	styles: {
		headerColor: string;
	};
	pagination: {
		currentPage: number;
		totalPages: number;
		paginationMethod: (page: number) => void;
	};
	rowSelection?: (rowData: T) => void;
}

export default function DataTable<T>({ tableData, columns, name, pagination, styles, rowSelection }: DataTableProps<T>) {
	const [sorting, setSorting] = useState<SortingState>([]);

	const table = useReactTable({
		data: tableData,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		enableSorting: true,
	});

	return (
		<Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
			<Flex px="25px" mb="8px" justifyContent="space-between" align="center">
				<Text color={styles.headerColor} fontSize="25px" mb="4px" fontWeight="700" lineHeight="100%" textTransform="capitalize">
					{name}
				</Text>
			</Flex>
			<Box>
				<Table variant="simple" mb="24px" mt="12px">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th key={header.id} colSpan={header.colSpan} pe="10px" borderBottom="none" cursor="pointer" minW="100px" maxW="150px" onClick={header.column.getToggleSortingHandler()}>
											<Flex justifyContent="center" align="center" fontSize={{ sm: "10px", lg: "12px" }}>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{{
													asc: "",
													desc: "",
												}[header.column.getIsSorted() as string] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table
							.getRowModel()
							.rows.slice(0, 11)
							.map((row) => {
								return (
									<Tr key={row.id} cursor="pointer" _hover={{ bg: "gray.100" }} onClick={() => rowSelection?.(row.original)}>
										{row.getVisibleCells().map((cell) => {
											return (
												<Td key={cell.id} fontSize={{ sm: "14px" }} minW={{ sm: "100px", md: "150px", lg: "auto" }} borderColor="transparent" maxW="200px" whiteSpace="nowrap">
													<Flex align="center" w="100%" justifyContent="center">
														{flexRender(cell.column.columnDef.cell, cell.getContext())}
													</Flex>
												</Td>
											);
										})}
									</Tr>
								);
							})}
					</Tbody>
				</Table>
			</Box>
			<PaginationControl currentPage={pagination.currentPage} totalItems={pagination.totalPages} onPageChange={pagination.paginationMethod}></PaginationControl>
		</Card>
	);
}
