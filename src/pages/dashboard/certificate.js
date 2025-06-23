"use client"; // required for client-side only features

import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import JSZip from "jszip";

const CertificatePage = () => {
  const [templatePdf, setTemplatePdf] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file
      .arrayBuffer()
      .then(setTemplatePdf)
      .catch(() => setError("Failed to read PDF file."));
  };

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const workbook = XLSX.read(evt.target.result, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);
        setUserList(data);
        setError("");
      } catch (err) {
        setError("Failed to parse Excel file.");
      }
    };
    reader.readAsBinaryString(file);
  };

  const excelDateToString = (excelDate) => {
    const excelEpoch = new Date(Date.UTC(1899, 11, 30));
    const date = new Date(excelEpoch.getTime() + Number(excelDate) * 86400000);
    return date.toLocaleDateString("en-US");
  };

  const generateAndDownload = async () => {
    if (!templatePdf || userList.length === 0) {
      setError("Please upload both the PDF template and Excel/CSV file.");
      return;
    }

    setLoading(true);
    setError("");
    const zip = new JSZip();

    const minionFontBytes = await fetch(
      "/fonts/minion_pro_bold/MinionPro-Bold.ttf"
    ).then((res) => res.arrayBuffer());
    const cambriaFontBytes = await fetch(
      "/fonts/cambria/cambria-regular.ttf"
    ).then((res) => res.arrayBuffer());

    for (const user of userList) {
      const name = user.Name?.toString().trim() || "Unnamed";
      let date = user.AwardedOn?.toString().trim() || "No Date";

      if (!isNaN(Number(date))) {
        date = excelDateToString(date);
      }

      const pdfDoc = await PDFDocument.load(templatePdf);
      pdfDoc.registerFontkit(fontkit);

      const minionBoldFont = await pdfDoc.embedFont(minionFontBytes);
      const cambriaFont = await pdfDoc.embedFont(cambriaFontBytes);
      const page = pdfDoc.getPages()[0];

      const fontSize = 24;
      const nameWidth = minionBoldFont.widthOfTextAtSize(name, fontSize);
      const pageWidth = page.getWidth();
      const xCentered = (pageWidth - nameWidth) / 2;

      page.drawText(name, {
        x: xCentered,
        y: 380,
        size: fontSize,
        font: minionBoldFont,
        color: rgb(26 / 255, 42 / 255, 85 / 255),
      });

      page.drawText(`${date}`, {
        x: 305,
        y: 170,
        size: 14,
        font: cambriaFont,
        color: rgb(16 / 255, 24 / 255, 51 / 255),
      });

      const pdfBytes = await pdfDoc.save();
      zip.file(`${name.replace(/ /g, "_")}_Certificate.pdf`, pdfBytes);
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "All_Certificates.zip");
    setLoading(false);
  };

  return (
    <div className="flex justify-center border-2">
      <div className="min-h-screen p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Certificate Generator</h2>

        <div className="mb-4 mt-8">
          <p className="block font-semibold mb-1">Upload PDF Template</p>
          <input
            type="file"
            onChange={handlePdfUpload}
            accept="application/pdf"
          />
        </div>

        <div className="mb-4 mt-5">
          <label className="block font-semibold mb-1">Upload Excel/CSV</label>
          <input
            type="file"
            onChange={handleExcelUpload}
            accept=".csv, .xlsx"
          />
        </div>

        {error && <p className="text-red-600 mb-2">{error}</p>}
        {loading ? (
          <p className="text-blue-600 font-medium">
            Generating certificates...
          </p>
        ) : (
          <button
            onClick={generateAndDownload}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Generate Certificates ZIP
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
