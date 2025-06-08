import React from "react";
import { marked } from "marked";

export default function Previewer({ markdown }) {
  return (
    <div className="prose border-t pt-4" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
  );
}
