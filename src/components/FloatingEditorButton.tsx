import { useState, useEffect } from 'react';
import { useEditor } from '../context/EditorContext';
import { Edit2, Save, Download, X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingEditorButton = () => {
  const { isEditing, toggleEditing, data } = useEditor();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const dataStr = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(dataStr).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-2 mb-2"
          >
            <button
              onClick={toggleEditing}
              className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                isEditing
                  ? 'bg-amber-500 text-slate-900 hover:bg-amber-400'
                  : 'bg-indigo-500 text-white hover:bg-indigo-400'
              }`}
            >
              {isEditing ? (
                <>
                  <Save size={16} /> Finish Editing
                </>
              ) : (
                <>
                  <Edit2 size={16} /> Edit Mode
                </>
              )}
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-slate-700 text-white hover:bg-slate-600 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-400" /> Copied!
                </>
              ) : (
                <>
                  <Copy size={16} /> Copy JSON
                </>
              )}
            </button>

            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-sky-500 text-slate-900 hover:bg-sky-400 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Download size={16} /> Export JSON
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close editor menu" : "Open editor menu"}
        title={isOpen ? "Close editor menu" : "Open editor menu"}
        aria-expanded={isOpen}
        className={`p-4 rounded-full shadow-2xl text-white transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
          isEditing ? 'bg-amber-500 hover:bg-amber-400 text-slate-900' : 'bg-sky-500 hover:bg-sky-400'
        }`}
      >
        {isOpen ? <X size={24} className={isEditing ? 'text-slate-900' : 'text-white'} /> : <Edit2 size={24} className={isEditing ? 'text-slate-900' : 'text-white'} />}
      </button>
    </div>
  );
};

export default FloatingEditorButton;
