import { FileText, FolderOpen, Code } from "lucide-react";

export default function BarraLateral() {
  return (
    <div className="barra-lateral">
      <FileText size={22} />
      <FolderOpen size={22} />
      <Code size={22} />
    </div>
  );
}
