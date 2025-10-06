import { useEffect } from "react";
import UploadForm from "./UploadForm";

const ApplyModal = ({ show, onClose, jobId, jobTitle, setShowModal }) => {
  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label={`Apply for ${jobTitle}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="relative z-10 w-full max-w-3xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5
                   animate-[fadeIn_0.15s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h5 className="text-lg font-semibold text-slate-900">
            Apply for {jobTitle}
          </h5>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500
                       hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2
                       focus:ring-[#FF3B00] focus:ring-offset-2"
            title="Close"
          >
            ×
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="max-h-[80vh] overflow-y-auto px-5 py-4">
          <UploadForm
            jobId={jobId}
            jobTitle={jobTitle}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
