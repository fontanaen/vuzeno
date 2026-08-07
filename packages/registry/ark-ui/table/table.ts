import TableRoot from "./Table.vue";
import TableBody from "./TableBody.vue";
import TableCaption from "./TableCaption.vue";
import TableCell from "./TableCell.vue";
import TableEmpty from "./TableEmpty.vue";
import TableFooter from "./TableFooter.vue";
import TableHead from "./TableHead.vue";
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption,
  Empty: TableEmpty,
} as const;
