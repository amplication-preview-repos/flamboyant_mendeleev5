import { NoteUpdateManyWithoutCategoriesInput } from "./NoteUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  notes?: NoteUpdateManyWithoutCategoriesInput;
};
