import {
  CancelOutlined,
  DownloadDoneOutlined,
  DownloadOutlined,
} from "@mui/icons-material";
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
  const [isDownloaded, setIsDownloaded] = useState(false);

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

  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "nguyen-ba-trien_resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setIsDownloaded(true);
    } catch (error) {
      console.error("Failed to download file:", error);
      alert("Failed to download the file.");
    }
  };

  useEffect(() => {
    if (isDownloaded) {
      const timer = setTimeout(() => setIsDownloaded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isDownloaded]);

  if (!open) return null;

  return (
    <>
      {!error && (
        <div style={{ display: isLoaded ? "block" : "none" }}>
          <div className="resume-modal-overlay" onClick={onClose}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="resume-download-btn"
                disabled={isDownloaded}
                onClick={handleDownload}
              >
                {isDownloaded ? (
                  <DownloadDoneOutlined
                    style={{ fontSize: "18px", color: "green" }}
                  />
                ) : (
                  <DownloadOutlined style={{ fontSize: "18px" }} />
                )}
              </button>
              <button className="resume-close-btn" onClick={onClose}>
                <CancelOutlined style={{ fontSize: "18px" }} />
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
