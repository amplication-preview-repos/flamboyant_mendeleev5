import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notes?: NoteListRelationFilter;
};
