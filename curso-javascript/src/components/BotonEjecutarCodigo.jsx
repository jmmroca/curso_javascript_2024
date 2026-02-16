import { useState } from "react";
import { Play, Check, AlertCircle } from "lucide-react";

function BotonEjecutarCodigo({ codigo }) {
  const [executing, setExecuting] = useState(false);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const executeCode = async () => {
    setExecuting(true);
    setShowResult(true);
    
    try {
      // Crear un sandbox aislado usando iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Capturar console.log y otros métodos
      const logs = [];
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;

      // Sobrescribir console methods en el contexto del iframe
      const iframeWindow = iframe.contentWindow;
      iframeWindow.console = {
        log: (...args) => logs.push({ type: 'log', message: args.join(' ') }),
        error: (...args) => logs.push({ type: 'error', message: args.join(' ') }),
        warn: (...args) => logs.push({ type: 'warn', message: args.join(' ') })
      };

      try {
        // Ejecutar el código en el sandbox
        const script = iframeWindow.eval(codigo);
        
        // Esperar un poco para capturar logs asíncronos
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setResult({
          success: true,
          output: logs.length > 0 ? logs : [{ type: 'log', message: 'Código ejecutado correctamente' }],
          returnValue: script
        });
      } catch (error) {
        setResult({
          success: false,
          error: error.message,
          output: logs
        });
      } finally {
        // Restaurar console y limpiar
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;
        document.body.removeChild(iframe);
      }
    } catch (error) {
      setResult({
        success: false,
        error: 'Error al crear el sandbox: ' + error.message
      });
    } finally {
      setExecuting(false);
    }
  };

  const closeResult = () => {
    setShowResult(false);
    setResult(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={executeCode}
        disabled={executing}
        className="absolute right-12 top-2 p-2 rounded-md hover:bg-green-700 transition-colors"
        aria-label="Ejecutar código"
        style={{
          backgroundColor: executing ? "#059669" : "#10b981",
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: executing ? "not-allowed" : "pointer",
          opacity: executing ? 0.7 : 1
        }}
      >
        {executing ? (
          <Check size={14} className="text-white animate-pulse" />
        ) : (
          <Play size={14} className="text-white" />
        )}
      </button>

      {showResult && result && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {result.success ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <AlertCircle size={20} className="text-red-500" />
                )}
                Resultado de la ejecución
              </h3>
              <button
                onClick={closeResult}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-80">
              {result.success ? (
                <div>
                  {result.output.map((log, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded ${
                        log.type === 'error' 
                          ? 'bg-red-100 text-red-700' 
                          : log.type === 'warn'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="font-mono text-sm">
                        {log.type === 'log' ? '📝' : log.type === 'error' ? '❌' : '⚠️'} {log.message}
                      </span>
                    </div>
                  ))}
                  {result.returnValue !== undefined && (
                    <div className="mt-3 p-2 bg-blue-100 text-blue-700 rounded">
                      <span className="font-semibold">Valor de retorno:</span>
                      <span className="font-mono text-sm ml-2">
                        {typeof result.returnValue === 'object' 
                          ? JSON.stringify(result.returnValue, null, 2)
                          : String(result.returnValue)
                        }
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-red-100 text-red-700 p-3 rounded">
                  <p className="font-semibold mb-2">Error:</p>
                  <p className="font-mono text-sm">{result.error}</p>
                  {result.output && result.output.length > 0 && (
                    <div className="mt-3">
                      <p className="font-semibold mb-2">Salida antes del error:</p>
                      {result.output.map((log, index) => (
                        <div key={index} className="mb-1 font-mono text-sm">
                          {log.type}: {log.message}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BotonEjecutarCodigo;
