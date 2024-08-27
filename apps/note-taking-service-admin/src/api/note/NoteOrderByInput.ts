import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
