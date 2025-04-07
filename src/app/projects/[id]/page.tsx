"use client";

import { useParams } from "next/navigation";
import AVTContent from "../../../../components/projects/AVTContents";
import PLOContent from "../../../../components/projects/PLOContents";
import NotFoundContent from "../../../../components/projects/NotFoundContents";
import COSContent from "../../../../components/projects/COSContents";
import SYMContent from "../../../../components/projects/SYMContents"

export default function ProjectPage() {
  const { id } = useParams();

  switch (id) {
    case "avt":
      return <AVTContent />;
    case "plo":
      return <PLOContent />;
    case "cosmic":
      return <COSContent />;
    case "symptomsense":
      return <SYMContent/>;
    default:
      return <NotFoundContent />;
  }
}
