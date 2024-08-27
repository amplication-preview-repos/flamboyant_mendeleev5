import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type NoteCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
