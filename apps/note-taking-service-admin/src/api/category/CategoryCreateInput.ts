import { NoteCreateNestedManyWithoutCategoriesInput } from "./NoteCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  notes?: NoteCreateNestedManyWithoutCategoriesInput;
};
