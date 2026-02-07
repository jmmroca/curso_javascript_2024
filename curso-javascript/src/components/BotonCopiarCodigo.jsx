import { useState } from "react";
import { Copy, Check } from "lucide-react";

function BotonCopiarCodigo({ copySnippet }) {

    const [copied, setCopied] = useState(false);

    const handleClick = async (e) => {
    await copySnippet(e.currentTarget);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <button
              type="button"
             onClick={handleClick}
              className="absolute right-2 top-2 p-2 rounded-md hover:bg-slate-700 transition-colors"
              aria-label="Copiar código"
            >
              {copied ? (
                <Check size={18} className="text-green-400" />
              ) : (
                <Copy size={18} className="text-slate-400" />
              )}
            </button>
    </>
  )
}

export default BotonCopiarCodigo