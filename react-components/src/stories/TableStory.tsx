import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table/Table";

export default function TableStory() {
  return (
    <Table>
      <TableHeader>
        <TableHead>Column A</TableHead>
        <TableHead>Column B</TableHead>
        <TableHead>Column C</TableHead>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>Test</TableCell>
          <TableCell>Test</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Test</TableCell>
          <TableCell>Test</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Test</TableCell>
          <TableCell>Test</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
