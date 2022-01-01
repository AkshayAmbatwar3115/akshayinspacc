import React from "react";
import Head from 'next/head';
import Header from "../components/commons/Header/newNav";
import EnquiryForm from "../components/EnquiryFormPartners/index";
import Footer from "../components/commons/footer/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Inspacco | Partner With Us</title>
        <meta name="description" content="Inspacco Tech Partner With Us Page" />
      </Head>
      <div className="sticky-top">
        <Header />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mt-5">
        <div className="row mx-5">
          <div className="col-lg-1"> </div>

          <div className="col-lg-5 col-md-6 col-sm-12 pl-5">
            <h2>
              <b>Partner with us</b>
            </h2>
            <div className="Rectangle-Copy-14 mb-5"></div>
            {/* <br/> */}
            <h4 style={{ textJustify: "inter-word", textAlign: "justify" }}>
              Join Inspacco Community and grow with us!
            </h4>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12">
            {/* <br /> */}

            <img
              style={{ float: "left" }}
              src={require("../images/contactus/partnerwithus2.png")}
              width="100%"
              alt="Contact us logo"
            />
          </div>
          <div className="col-lg-1 "> </div>
        </div>
      </div>
      <EnquiryForm />
      <br />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
