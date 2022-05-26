import themeJson from "../lib/vs-seti-icon-theme.json";

const knownInconsistencies: {
  [key: string]: keyof typeof themeJson.languageIds;
} = {
  ".md": "markdown",
};

export const resolveIcon = (fileName?: string, ext?: string) => {
  const id: string =
    (themeJson.fileNames as any)[fileName?.toLowerCase() || ""] ||
    (themeJson.fileExtensions as any)[ext?.replace(".", "") || ""] ||
    (themeJson.languageIds as any)[knownInconsistencies[ext || ""]] ||
    "_default";
  const def = (themeJson.iconDefinitions as any)[id] as {
    fontCharacter: string;
    fontColor: string;
  };

  return { id, def };
};
