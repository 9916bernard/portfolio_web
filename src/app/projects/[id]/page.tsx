"use client";

import { useParams } from "next/navigation";
import AVTContent from "../../../../components/projects/AVTContents";
import PLOContent from "../../../../components/projects/PLOContents";
import NotFoundContent from "../../../../components/projects/NotFoundContents";
import COSContent from "../../../../components/projects/COSContents";

export default function ProjectPage() {
  const { id } = useParams();

  switch (id) {
    case "avt":
      return <AVTContent />;
    case "plo":
      return <PLOContent />;
    case "cosmic":
      return <COSContent />;
    default:
      return <NotFoundContent />;
  }
}
