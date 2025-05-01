import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import OverlayLoading from "../shared/OverlayLoading";

const NewsLetter = () => {
  const url = process.env.NEXT_PUBLIC_mailchimp;

  // console.log(url)

  const SimpleForm = () => <MailchimpSubscribe url={url} />;

  return (
    <div id="contact" className="mx-auto  roboto ">
      <div className=" bg-contact ">
        <div className="h-full w-full news-bg-contrast py-16 md:py-32  ">
          <div className="md:w-[85%] lg:w-[50%] w-[95%] mx-auto mt-3 block p-5 rounded ">
            <p className=" text-[22px] md:text-xl lg:text-2xl xl:text-4xl mt-5 form-top font-bold  text-white  text-center text-shadow league-spartan">
              Stay Connected with Our Newsletter!
            </p>
            <h5 className=" text-white  text-center mt-2 tracking-wide text-shadow open-sans">
              Get the latest newsletter on home care tips, news, and exclusive
              offers.
            </h5>
            <div className="flex justify-center items-center mt-5 gap-5">
              <div className="w-full open-sans ">
                <MailchimpSubscribe
                  url={url}
                  render={({ subscribe, status, message }) => (
                    <div className="news-letter  ">
                      <SimpleForm
                        onSubmitted={(formData) => subscribe(formData)}
                      />

                      {status === "sending" && (
                        <div className="text-[#00A6B2]">
                          <OverlayLoading />
                        </div>
                      )}
                      {status === "error" && (
                        <div dangerouslySetInnerHTML={{ __html: message }} />
                      )}
                      {status === "success" && (
                        <div className="text-[#00A6B2]">Subscribed !</div>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
