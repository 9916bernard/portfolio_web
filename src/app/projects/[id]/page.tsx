"use client";

import { useParams } from "next/navigation";
import AVTContent from "../../../../components/projects/AVTContents";
import PLOContent from "../../../../components/projects/PLOContents";
import NotFoundContent from "../../../../components/projects/NotFoundContents";

export default function ProjectPage() {
  const { id } = useParams();

  switch (id) {
    case "avt":
      return <AVTContent />;
    case "plo":
      return <PLOContent />;
    default:
      // 존재하지 않는 id로 접근 시
      return <NotFoundContent />;
  }
}
