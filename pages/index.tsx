import type { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import path from "path";
import fs from "fs/promises";
import Layout from "../components/layout";
import WorkBench from "../components/workbench";
import { Node, Dir, treeState } from "../store/app";
import { useSetRecoilState } from "recoil";

type IndexProps = {
  root: Node;
};

const contentsDir = path.join(process.cwd(), "public/contents");

const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const readRecursive = async (parent: Dir, dirname: string) => {
    const dirents = (await fs.readdir(dirname, { withFileTypes: true })).sort(
      (a, b) => {
        if (a.isDirectory() && !b.isDirectory()) {
          return -1;
        }
        if (!a.isDirectory() && b.isDirectory()) {
          return 1;
        }
        return a.name.localeCompare(b.name);
      }
    );
    for (const dirent of dirents) {
      if (dirent.isFile()) {
        parent.children.push({
          type: "File",
          name: dirent.name,
          path: `${parent.path}/${dirent.name}`,
          ext: path.extname(dirent.name),
        });
        continue;
      }
      const subDir: Node = {
        type: "Directory",
        name: dirent.name,
        path: `${parent.path}/${dirent.name}`,
        children: [],
      };
      parent.children.push(subDir);
      await readRecursive(subDir, path.resolve(dirname, dirent.name));
    }
  };

  const contentNode: Node = {
    type: "Directory",
    name: "tomoki1207",
    path: "/contents",
    children: [],
  };
  await readRecursive(contentNode, contentsDir);
  return { props: { root: contentNode } };
};

const Home: NextPage<IndexProps> = ({ root }) => {
  const setTree = useSetRecoilState(treeState);

  useEffect(() => {
    setTree(root);
  });

  return (
    <Layout>
      <WorkBench />
    </Layout>
  );
};

export default Home;
export { getStaticProps };
