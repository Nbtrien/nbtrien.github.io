import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../assets/styles/ResumePreviewModal.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

interface ResumePreviewModalProps {
  open: boolean;
  onClose: () => void;
  fileUrl: string;
}

const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
  open,
  onClose,
  fileUrl,
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoaded(true);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Failed to load PDF:", error);
    alert("Failed to load the CV.");
    setError("Failed to load the CV file.");
    setIsLoaded(false);
    onClose();
  };

  useEffect(() => {
    setIsLoaded(false);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open && isLoaded ? "hidden" : "auto";
  }, [isLoaded]);

  if (!open) return null;

  return (
    <>
      {!error && (
        <div style={{ display: isLoaded ? "block" : "none" }}>
          <div className="resume-modal-overlay" onClick={onClose}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
              <button className="resume-close-btn" onClick={onClose}>
                ×
              </button>
              <div className="resume-modal-body">
                <Document
                  file={fileUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="pdf-page"
                      scale={1.2}
                    />
                  ))}
                </Document>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumePreviewModal;
