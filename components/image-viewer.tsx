/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";

type ImageViewerProps = {
  path: string;
  fileName: string;
};

const ImageViewer: FunctionComponent<ImageViewerProps> = ({
  path,
  fileName,
}) => {
  return (
    <div className="h-full flex justify-center items-center">
      <img src={path} alt={fileName} className="max-h-[70vh] object-contain" />
    </div>
  );
};

export default ImageViewer;
