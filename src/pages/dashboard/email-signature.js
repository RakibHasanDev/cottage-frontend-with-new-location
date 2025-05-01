"use client"; // ✅ This ensures Next.js runs this component only on the client-side.

import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import Script from "next/script"; // ✅ Load Cloudinary properly

const EmployeeSignature = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    designation: "",
    phone: "",
    ext: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const signatureRef = useRef(null);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ✅ Download HTML File
  const downloadHTML = () => {
    if (!signatureRef.current) return;

    const htmlContent = signatureRef.current.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employee-signature.html";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Open Cloudinary Upload Widget
  const openCloudinaryWidget = () => {
    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url"],
          multiple: false,
          folder: "signature",
          resourceType: "image",
        },
        (error, result) => {
          if (error) {
            console.error("Upload Error:", error);
            toast.error("Something went wrong during the upload.");
          } else if (result && result.event === "success") {
            setImageUrl(result.info.secure_url);
            toast.success("Image uploaded successfully.");
          }
        }
      );
    }
  };

  return (
    <>
      {/* ✅ Load Cloudinary Widget Script */}
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Cloudinary Widget loaded")}
      />

      <div className="border-2 min-h-screen p-6">
        {/* ✅ Form Section */}
        {!submitted && (
          <form onSubmit={handleSubmit} className="w-[50%] mx-auto my-10">
            <div className="space-y-2 text-sm">
              <label className="block dark:text-gray-200">
                Upload Profile Image (Max 200 KB)
              </label>
              <button
                type="button"
                onClick={openCloudinaryWidget}
                className="file-input file-input-[#1D93AE] border-0 w-full bg-[#EBF8F9] dark:bg-gray-400 dark:text-gray-200 shadow-md py-2.5"
              >
                Upload an Image
              </button>
            </div>

            {/* Input Fields */}
            {["designation", "phone", "ext", "email"].map((field, idx) => (
              <div key={idx} className="mb-4">
                <label className="dark:text-gray-100 capitalize">
                  {field}:
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border-2 p-2 w-full"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-4"
            >
              Generate Signature
            </button>
          </form>
        )}

        {submitted && (
          <div className="w-[90%] mx-auto my-10">
            <div ref={signatureRef}>
              <table
                id="zs-output-sig"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                style={{
                  fontFamily: "sans-serif",
                  lineHeight: "0px",
                  fontSize: "1px",
                  padding: "0px!important",
                  borderSpacing: "0px",
                  margin: "0px",
                  borderCollapse: "collapse",
                  width: "1100px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "0px!important" }}>
                      <table
                        id="inner-table"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          fontFamily: "sans-serif",
                          lineHeight: "0px",
                          fontSize: "1px",
                          padding: "0px!important",
                          borderSpacing: "0px",
                          margin: "0px",
                          borderCollapse: "collapse",
                        }}
                      >
                        <tbody>
                          <tr></tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0px!important" }}>
                      <table
                        id="inner-table"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          fontFamily: "sans-serif",
                          lineHeight: "0px",
                          fontSize: "1px",
                          padding: "0px!important",
                          borderSpacing: "0px",
                          margin: "0px",
                          borderCollapse: "collapse",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td width={200} style={{ paddingRight: "20px" }}>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                style={{
                                  fontFamily: "sans-serif",
                                  lineHeight: "0px",
                                  fontSize: "1px",
                                  padding: "0px!important",
                                  borderSpacing: "0px",
                                  margin: "0px",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        borderCollapse: "collapse",
                                        lineHeight: "0px",
                                        paddingRight: "1px",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <img
                                          height={70}
                                          width={200}
                                          alt="employee_img"
                                          border={0}
                                          src="https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728484130/yqibiarsvmp5s9fcddqq.png"
                                        />
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              style={{
                                borderCollapse: "collapse",
                                backgroundColor: "#1c3461",
                                width: "2px",
                                verticalAlign: "super",
                                padding: "0px!important",
                              }}
                            ></td>
                            <td
                              style={{
                                borderCollapse: "collapse",
                                paddingRight: "20px",
                              }}
                            />
                            <td style={{ padding: "0px!important" }}>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                style={{
                                  fontFamily: "sans-serif",
                                  lineHeight: "0px",
                                  fontSize: "1px",
                                  padding: "0px!important",
                                  borderSpacing: "0px",
                                  margin: "0px",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <tbody>
                                  {imageUrl && (
                                    <tr>
                                      <td
                                        style={{
                                          borderCollapse: "collapse",
                                          fontFamily: "sans-serif",
                                          fontSize: "17px",
                                          fontStyle: "normal",
                                          lineHeight: "19px",
                                          fontWeight: 700,
                                          padding: "0px!important",
                                        }}
                                      >
                                        <p style={{ margin: "0.04px" }}>
                                          <img
                                            src={imageUrl}
                                            alt="employee_img"
                                          />
                                        </p>
                                      </td>
                                    </tr>
                                  )}
                                  <tr>
                                    <td
                                      style={{
                                        borderCollapse: "collapse",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        paddingTop: "5px",
                                        lineHeight: "17px",
                                        fontWeight: 700,
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            lineHeight: "18px",
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          {formData?.designation}
                                        </span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        borderCollapse: "collapse",
                                        paddingTop: "3px",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        paddingBottom: "6px",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "18px",
                                            fontWeight: 800,
                                            color: "#e47825",
                                            display: "inline",
                                          }}
                                        >
                                          Cottage Home Care Services
                                        </span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                style={{
                                  fontFamily: "sans-serif",
                                  lineHeight: "0px",
                                  fontSize: "1px",
                                  padding: "0px!important",
                                  borderSpacing: "0px",
                                  margin: "0px",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 500,
                                        padding: "0px!important",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Office:
                                        </span>
                                        <a
                                          href="tel:+15163672266"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            marginLeft: "2px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          516-367-2266
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 600,
                                        padding: "0px!important",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Phone:
                                        </span>
                                        <a
                                          href={`tel:+1${formData?.phone}`}
                                          className="contact-info__ExternalLink-sc-mmkjr6-2"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            marginLeft: "2px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          {formData?.phone}
                                        </a>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            marginLeft: "4px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Ext:
                                        </span>
                                        <a
                                          href={`tel:${formData?.ext}`}
                                          color="#1c3461"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            marginLeft: "2px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          {formData?.ext}
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                style={{
                                  fontFamily: "sans-serif",
                                  lineHeight: "0px",
                                  fontSize: "1px",
                                  padding: "0px!important",
                                  borderSpacing: "0px",
                                  margin: "0px",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 500,
                                        padding: "0px!important",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Fax:
                                        </span>
                                        <span
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            marginLeft: "2px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          516-367-1067
                                        </span>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 500,
                                        padding: "0px!important",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Email:
                                        </span>
                                        <a
                                          href={`mailto:${formData?.email}`}
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            marginLeft: "2px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          {formData?.email}
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily: "sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 500,
                                        padding: "0px!important",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Web:
                                        </span>
                                        <a
                                          href="https://cottagehomecare.com"
                                          target="_blank"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            marginLeft: "2px",
                                            lineHeight: "17px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                          rel="noreferrer"
                                        >
                                          cottagehomecare.com
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Long Island Office:
                                        </span>
                                        <a
                                          href="https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899?entry=ttu"
                                          target="_blank"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            marginLeft: "2px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",

                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                          rel="noreferrer"
                                        >
                                          25 Newbridge Road, Suite 302
                                          Hicksville, New York 11801
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Queens Office:
                                        </span>
                                        <a
                                          href="https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States"
                                          target="_blank"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            marginLeft: "2px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                          rel="noreferrer"
                                        >
                                          126-01 Liberty Avenue, South Richmond
                                          Hill Queens, New York 11419
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          Ozone Park Office:
                                        </span>
                                        <a
                                          href="https://www.google.com/maps/dir//103-21+98th+St,+Jamaica,+NY+11417,+USA/@40.6823889,-73.8443419,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c267589d232e07:0x58530cff1202b8d6!2m2!1d-73.841767!2d40.6823849?entry=ttu"
                                          target="_blank"
                                          rel="noreferrer"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            marginLeft: "2px",
                                            lineHeight: "17px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          103-21 98th St, Jamaica, New York
                                          11417
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        paddingTop: "1px",
                                        borderCollapse: "collapse",
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        lineHeight: "17px",
                                        fontWeight: 600,
                                        paddingBottom: "14px",
                                      }}
                                    >
                                      <p style={{ margin: "0.04px" }}>
                                        <span
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            lineHeight: "17px",
                                            fontWeight: 600,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          New Jersey Office:
                                        </span>
                                        <a
                                          href="https://www.google.com/maps/dir//97+Newkirk+St+%23337,+Jersey+City,+NJ+07306,+USA/@40.728946,-74.063574,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25732f2505947:0x11683fef690efa75!2m2!1d-74.0635739!2d40.7289459?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                                          target="_blank"
                                          rel="noreferrer"
                                          style={{
                                            textDecoration: "none",
                                            fontFamily: "sans-serif",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            marginLeft: "2px",
                                            lineHeight: "17px",
                                            fontWeight: 500,
                                            color: "#1c3461",
                                            display: "inline",
                                          }}
                                        >
                                          97 Newkirk Street, Unit #337, Jersey
                                          City, NJ 07306
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                style={{
                                  fontFamily: "sans-serif",
                                  lineHeight: "0px",
                                  fontSize: "1px",
                                  padding: "0px!important",
                                  borderSpacing: "0px",
                                  margin: "0px",
                                  borderCollapse: "collapse",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ paddingRight: "10px" }}>
                                      <a
                                        href="https://www.facebook.com/cottageHC"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ margin: "0.04px" }}
                                      >
                                        <img
                                          height={24}
                                          width={24}
                                          alt="facebook"
                                          border={0}
                                          src="https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728484158/omypyzelmo762sukwau7.png"
                                        />
                                      </a>
                                    </td>
                                    <td style={{ paddingRight: "10px" }}>
                                      <a
                                        href="https://www.instagram.com/cottage.homecare/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ margin: "0.04px" }}
                                      >
                                        <img
                                          height={24}
                                          width={24}
                                          alt="instagram"
                                          border={0}
                                          src="https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728484206/bl76hrgjxdg99ybaunlq.png"
                                        />
                                      </a>
                                    </td>
                                    <td style={{ paddingRight: "10px" }}>
                                      <a
                                        href="https://www.linkedin.com/company/cottage-homecare/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ margin: "0.04px" }}
                                      >
                                        <img
                                          height={24}
                                          width={24}
                                          alt="linkedin"
                                          border={0}
                                          src="https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728484555/LINKDIN_gxbk2t.png"
                                        />
                                      </a>
                                    </td>
                                    <td style={{ padding: "0px!important" }} />
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        borderCollapse: "collapse",
                        paddingBottom: "16px",
                      }}
                    >
                      <span />
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
              <div style={{ color: "#1c3461", fontFamily: "sans-serif" }}>
                <u style={{ fontSize: "14px", fontWeight: 600 }}>
                  HIPAA PRIVACY NOTICE:
                </u>
                <i
                  style={{
                    marginTop: "2px",
                    fontSize: "14px",
                    display: "block",
                  }}
                >
                  This message and any attached file(s) may contain legally
                  privileged and/or confidential information. If the reader of
                  this message is not the intended recipient, an employee or an
                  agent responsible for delivering this message to the intended
                  recipient, you are hereby notified that any dissemination,
                  distribution, or copying of this e-mail and the attachments
                  hereto, if any, is strictly prohibited. If you have received
                  this communication in error, please notify the sender
                  immediately by telephone and/or replying to this message while
                  also permanently deleting this email, and any attachments and
                  shredding all printed copies thereof.
                </i>
              </div>
            </div>

            <button
              onClick={downloadHTML}
              style={{
                marginTop: "20px",
                backgroundColor: "#1c3461",
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Download as HTML
            </button>

            <button
              onClick={() => {
                setSubmitted(false); // Change submitted to false
                setFormData({
                  designation: "",
                  phone: "",
                  ext: "",
                  email: "",
                }); // Reset form data
              }}
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                backgroundColor: "#1c3461",
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Remove Signature
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeSignature;
