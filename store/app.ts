import { atom, DefaultValue, selector } from "recoil";

export type Node = File | Dir;

export type File = {
  type: "File";
  name: string;
  ext: string;
};

export type Dir = {
  type: "Directory";
  name: string;
  children: Node[];
};

export type EditorFile = File & { active: boolean };

export const treeState = atom<Node | null>({
  key: "tree",
  default: null,
});

export const editorsState = atom<EditorFile[]>({
  key: "editors",
  default: [],
});

export const activeEditorState = selector<EditorFile | null>({
  key: "activeEditor",
  get: ({ get }) => get(editorsState).find((file) => file.active) || null,
  set: ({ get, set }, newValue) => {
    if (newValue === null || newValue instanceof DefaultValue) {
      return;
    }
    console.log({ newValue });
    console.log({ before: get(editorsState) });
    const newFiles = get(editorsState).map((file) => {
      if (file.name === newValue.name && file.ext === newValue.ext) {
        return { ...file, active: true };
      }
      return { ...file, active: false };
    });
    if (newFiles.every((file) => !file.active)) {
      newFiles.push(newValue);
    }
    console.log({ after: newFiles });
    set(editorsState, newFiles);
  },
});
