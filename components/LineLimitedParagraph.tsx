// /components/LineLimitedParagraph.tsx
"use client";

import parse from "html-react-parser";

interface Props {
  text: string;
}

export default function LineLimitedParagraph({ text }: Props) {
  return <p className="text-base leading-relaxed mb-4">{parse(text)}</p>;
}
