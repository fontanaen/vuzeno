import TypographyBlockquote from "./TypographyBlockquote.vue";
import TypographyH1 from "./TypographyH1.vue";
import TypographyH2 from "./TypographyH2.vue";
import TypographyH3 from "./TypographyH3.vue";
import TypographyH4 from "./TypographyH4.vue";
import TypographyInlineCode from "./TypographyInlineCode.vue";
import TypographyLarge from "./TypographyLarge.vue";
import TypographyLead from "./TypographyLead.vue";
import TypographyList from "./TypographyList.vue";
import TypographyMuted from "./TypographyMuted.vue";
import TypographyParagraph from "./TypographyParagraph.vue";
import TypographySmall from "./TypographySmall.vue";
import TypographyTable from "./TypographyTable.vue";
import TypographyTableCell from "./TypographyTableCell.vue";
import TypographyTableContainer from "./TypographyTableContainer.vue";
import TypographyTableHead from "./TypographyTableHead.vue";
import TypographyTableRow from "./TypographyTableRow.vue";

export const Typography = {
  H1: TypographyH1,
  H2: TypographyH2,
  H3: TypographyH3,
  H4: TypographyH4,
  Paragraph: TypographyParagraph,
  Blockquote: TypographyBlockquote,
  List: TypographyList,
  InlineCode: TypographyInlineCode,
  Lead: TypographyLead,
  Large: TypographyLarge,
  Small: TypographySmall,
  Muted: TypographyMuted,
  TableContainer: TypographyTableContainer,
  Table: TypographyTable,
  TableRow: TypographyTableRow,
  TableHead: TypographyTableHead,
  TableCell: TypographyTableCell,
} as const;
