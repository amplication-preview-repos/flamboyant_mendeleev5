import { Note } from "../note/Note";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  notes?: Array<Note>;
  updatedAt: Date;
};
