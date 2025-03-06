import React from "react";
import EasierLife from "../home/EasierLife";

const ServicesModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="cdpap-form" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative dark:bg-slate-600 w-full md:max-w-7xl ">
          <label
            htmlFor="cdpap-form"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <EasierLife />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
