import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type NoteUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
