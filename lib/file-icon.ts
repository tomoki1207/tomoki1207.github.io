import themeJson from "../lib/vs-seti-icon-theme.json";

const knownInconsistencies: {
  [key: string]: keyof typeof themeJson.languageIds;
} = {
  ".md": "markdown",
};

const normalize = (name?: string) =>
  name ? name.toLowerCase().replace(/^\./, "") : "";

export const resolveId = (
  fileName?: string,
  ext?: string
): keyof typeof themeJson.iconDefinitions =>
  (themeJson.fileNames as any)[normalize(fileName)] ||
  (themeJson.fileExtensions as any)[normalize(ext || fileName)] ||
  (themeJson.languageIds as any)[knownInconsistencies[ext || ""]] ||
  "_default";

export const resolveIcon = (fileName?: string, ext?: string) => {
  const id = resolveId(fileName, ext);
  const def = (themeJson.iconDefinitions as any)[id] as {
    fontCharacter: string;
    fontColor: string;
  };

  return { id, def };
};
