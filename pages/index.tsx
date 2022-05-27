import type { NextPage, GetStaticProps } from "next";
import { ComponentProps, useEffect } from "react";
import path from "path";
import fs from "fs/promises";
import Layout from "../components/layout";
import WorkBench from "../components/workbench";
import { Node, Dir, treeState } from "../store/app";
import { useSetRecoilState } from "recoil";

type IndexProps = {
  root: Node;
};

const contentsDir = path.join(process.cwd(), "contents");

const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const readRecursive = async (parent: Dir, dirname: string) => {
    const dirents = await fs.readdir(dirname, { withFileTypes: true });
    for (const dirent of dirents) {
      if (dirent.isFile()) {
        parent.children.push({
          type: "File",
          name: dirent.name,
          ext: path.extname(dirent.name),
        });
        continue;
      }
      const subDir: Node = {
        type: "Directory",
        name: dirent.name,
        children: [],
      };
      parent.children.push(subDir);
      await readRecursive(subDir, path.resolve(dirname, dirent.name));
    }
  };

  const contentNode: Node = {
    type: "Directory",
    name: "tomoki1207",
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
