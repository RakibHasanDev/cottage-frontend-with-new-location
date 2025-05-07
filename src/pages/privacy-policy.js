import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Read Cottage Home Care’s Privacy Policy to learn how we collect, use, and protect your personal information when you use our services."
        />

        <meta
          name="keywords"
          content="Cottage Home Care Privacy Policy, data protection, personal information processing, privacy rights, SMS consent, secure data handling, information security, user privacy, data collection policy, privacy compliance"
        />
        <link
          rel="alternate"
          href={`https://cottagehomecare.com/privacy-policy/`}
          hreflang="en"
        />
        <link
          rel="alternate"
          href={`https://cottagehomecare.com/privacy-policy/`}
          hreflang="x-default"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/privacy-policy/"
        />
      </Head>

      <main className="dark:bg-slate-600 dark:text-white term-condition">
        <div className="lg:w-[85%] w-[95%] mx-auto pb-5">
          <div data-custom-className="term-condition">
            <div className="pt-5 md:pb-8 pb-5">
              <h1 className="text-center text-lg md:text-2xl font-bold text-gray-700 dark:text-gray-100">
                PRIVACY POLICY
              </h1>
              <h2 className="text-center text-[#7F7F7F] text-base md:lg font-bold mt-3 dark:text-gray-100">
                Last updated October 22, 2024
              </h2>
            </div>

            {/* Privacy Policy Content */}
            <div style={{ lineHeight: "1.5" }}>
              <p
                className="text-[#595959] dark:text-white"
                style={{ fontSize: 15 }}
              >
                This Privacy Notice for{" "}
                <strong>Cottage Home Care Services, Inc</strong>(
                <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>
                , or
                <strong>&quot;our&quot;</strong>), describes how and why we
                might access, collect, store, use, and/or share (
                <strong>&quot;process&quot;</strong>) your personal information
                when you use our services (<strong>&quot;Services&quot;</strong>
                ), including when you:
              </p>

              <ul>
                <li>
                  Visit our website at{" "}
                  <a
                    href="https://cottagehomecare.com"
                    className="text-blue-600"
                  >
                    cottagehomecare.com
                  </a>{" "}
                  or any website of ours that links to this Privacy Notice.
                </li>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events.
                </li>
              </ul>
            </div>

            {/* SMS Consent Section */}
            <div className="my-3" id="smsConsent" style={{ lineHeight: "1.5" }}>
              <p className="font-bold text-xl">SMS Consent</p>
              <p className="font-medium">
                By providing your phone number and checking the box to receive
                SMS messages, you are agreeing to receive informational or
                promotional text messages from Cottage Home Care Services. You
                can opt-out of receiving SMS messages at any time by replying
                &quot;STOP&quot; to any SMS message. Standard messaging rates
                may apply.
              </p>
              <p>
                We take your privacy seriously, the privacy policy must state
                that phone numbers collected for SMS consent will not be shared
                with third parties or affiliates for marketing purposes under
                any circumstances.
              </p>
            </div>

            {/* Key Points */}
            <div
              id="tableContents"
              className="my-3"
              style={{ lineHeight: "1.5" }}
            >
              <h3 className="font-bold text-xl">Summary of Key Points</h3>
              <p>
                This summary provides key points from our Privacy Notice, but
                you can find out more details by visiting the{" "}
                <a href="#tableContents" className="text-blue-600">
                  table of contents
                </a>{" "}
                below.
              </p>

              <ul>
                <li>
                  <strong>What personal information do we process?</strong> When
                  you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us and
                  the Services, the choices you make, and the products and
                  features you use.
                </li>
                <li>
                  <strong>Do we process sensitive information?</strong> We do
                  not process any sensitive information.
                </li>
                <li>
                  <strong>How do we process your information?</strong> We
                  process your information to provide, improve, and administer
                  our Services, communicate with you, and for security and fraud
                  prevention. Learn more about
                  <a href="#infouse" className="text-blue-600">
                    {" "}
                    how we process your information
                  </a>
                  .
                </li>
                <li>
                  <strong>How do we keep your information safe?</strong> We have
                  technical and organizational measures in place to protect your
                  personal data. However, no electronic transmission over the
                  internet or information storage technology can be guaranteed
                  to be 100% secure, so we cannot promise or guarantee that
                  unauthorized third parties will not be able to access your
                  information.
                </li>
                <li>
                  <strong>Your privacy rights:</strong> Depending on your
                  location, you may have certain privacy rights regarding your
                  personal information.
                </li>
                <li>
                  <strong>How can you exercise your rights?</strong> You can
                  exercise your rights by contacting us directly. We will
                  consider and act upon any request in accordance with
                  applicable data protection laws.
                </li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div id="toc" style={{ lineHeight: "1.5" }}>
              <p className="font-bold text-xl">Table of Contents</p>
              <ul>
                <li>
                  <a href="#infocollect" className="text-blue-600">
                    1. What Information Do We Collect?
                  </a>
                </li>
                <li>
                  <a href="#infouse" className="text-blue-600">
                    2. How Do We Process Your Information?
                  </a>
                </li>
              </ul>
            </div>

            {/* Additional Sections */}
            <div
              className="my-3"
              id="infocollect"
              style={{ lineHeight: "1.5" }}
            >
              <p className="font-bold text-xl">
                1. What Information Do We Collect?
              </p>
              <p>
                We collect personal information that you voluntarily provide to
                us when registering on our services or expressing an interest in
                obtaining information about us or our services.
              </p>
              <ul className="list-disc ml-5">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Contact preferences</li>
              </ul>
            </div>

            <div className="my-3" id="infouse" style={{ lineHeight: "1.5" }}>
              <p className="font-bold text-xl">
                2. How Do We Process Your Information?
              </p>
              <p>
                We process your personal information to provide, improve, and
                administer our services, communicate with you, and to comply
                with legal obligations.
              </p>
              <ul className="list-disc ml-5">
                <li>To facilitate account creation and authentication</li>
                <li>To request feedback</li>
                <li>
                  To send marketing and promotional communications (only with
                  your consent)
                </li>
              </ul>
            </div>

            {/* You can continue with other necessary sections similarly */}
          </div>
        </div>
        {/* <Chat /> */}
      </main>
    </>
  );
};

export default PrivacyPolicy;
