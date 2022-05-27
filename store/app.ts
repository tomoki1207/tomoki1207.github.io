import { atom, DefaultValue, selector, selectorFamily } from "recoil";

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
    const newFiles = get(editorsState).map((file) => {
      if (file.name === newValue.name && file.ext === newValue.ext) {
        return { ...file, active: true };
      }
      return { ...file, active: false };
    });

    if (newFiles.every((file) => !file.active)) {
      newFiles.push(newValue);
    }
    set(editorsState, newFiles);
  },
});

export const editorState = selectorFamily<EditorFile | null, string>({
  key: "editor",
  get:
    (name) =>
    ({ get }) =>
      get(editorsState).find((file) => file.name === name) || null,
  // only for remove, for replace logic is NOT confirmed yet.
  set:
    (name) =>
    ({ get, set }, newValue) => {
      if (newValue instanceof DefaultValue) {
        return;
      }

      const activeIndex = get(editorsState).findIndex((file) => file.active);
      const newFiles = get(editorsState)
        .map((file) => {
          if (file.name === name) {
            return newValue && { ...newValue, active: file.active };
          }
          return { ...file };
        })
        .filter((file): file is EditorFile => file !== null);

      if (newFiles.length > 0 && newFiles.every((file) => !file.active)) {
        const nextActiveIndex = Math.min(activeIndex + 1, newFiles.length - 1);
        newFiles.at(nextActiveIndex)!!.active = true;
      }
      set(editorsState, newFiles);
    },
});
