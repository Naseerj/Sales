import React from "react";
import Blacktwitter from "../../stories/assets/Images/Vector (22).svg";
import Blackfacebook from "../../stories/assets/Images/Vector (23).svg";
import Blackinstagram from "../../stories/assets/Images/Vector (24).svg";
import People from "../../stories/assets/Images/Frame 1000004524.svg";
import Navbar from "../Navbar";
import Footer2 from "../../components/Footer2";

const HelpCenter = () => {
  return (
    <div>
      <Navbar />
      <div className=" p-2">
        <p className=" font-bold xl:font-extrabold  pl-2  xl:w-82 xl:font-82">
          Help Desk Software : The Corner Stone of Customer Support
        </p>
        <div className=" flex flex-row p-2 justify-between  w-24 xl:p-2 xl:w-36">
          <img src={Blacktwitter} alt="" />
          <img src={Blackfacebook} alt="" />
          <img src={Blackinstagram} alt="" />
        </div>
        <div className="">
          <img
            className="w-98 bg-red-200 w-full xl:h-96 xl:object-cover xl:object-content-fit  "
            src={People}
            alt=""
          />
        </div>
        <p className="mt-10  p-2">
          A company’s products could be top-notch. Its software could be cutting
          edge, intuitive, and powerful. It could even provide industry-leading
          service offerings. Many businesspeople know that strong customer
          support is a must to stay competitive. In fact,{" "}
          <span
            className="
        text-blue"
          >
            80% of executives
          </span>{" "}
          with service oversight (for example, CEOs, service VPs, and so on) say
          customer service is the primary vehicle for improving the customer
          experience. Consumers have the power to rate products, request
          answers, review companies, and rave about experiences across almost
          any channel — instantly. Because we live in a consumer-centric age,
          companies have to be ready to handle customer support cases and
          complaints quickly while keeping service teams working smoothly.{" "}
          <span className="text-blue"></span> can become the cornerstone of your
          customer support strategy.
        </p>
       <div className="p-2">
       <h1 className=" text-2xl mt-10 font-bold text-blue-500 mt-7 mb-7">
          Support customers across channels.
        </h1>
        <p>
          Consumers can @mention a company on Twitter to ask questions. They can
          pick up the phone to voice complaints. They can even send emails or
          strike up a live chat with a customer service representative (or in
          many cases, an AI-enabled chatbot). That means customer service teams
          need to have a way to manage requests across all communications
          channels and keep them organized. A help desk can provide multichannel
          support, so agents can work more efficiently, resolve issues faster,
          and offer amazing service. Manage cases quickly.
        </p>
       </div>
        <div className="p-2">
        <h1 className=" text-2xl mt-10 font-bold text-blue-500 mt-7 mb-7">
          Manage cases quickly
        </h1>
        <p className="font-16">
          Many people have had the frustrating experience of filling out a form
          on a company’s website to ask a question only to have multiple
          customer support representatives follow up at different times.
          Sometimes, no one follows up at all. Regardless of the channel the
          request came through, a good customer service platform ensures that
          every inquiry routes to the right agent and gets organized (or
          categorized) accordingly. One person or team might handle Facebook and
          Twitter cases, for instance, while another team responds to phone
          calls. This enables every customer service team member to focus on
          priority cases, without leaving requests unanswered. Smooth case
          management also keeps internal teams efficient. Reporting data can
          improve the customer experience, reduce ticket volume, and preempt
          small issues before they become big ones. Automate support and
          workflows.
        </p>
        </div>
       <div className="p-2">
       <h1 className="text-2xl mt-10 font-bold text-blue-500  mt-7 mb-7">
          Help customers help themselves
        </h1>
        <p>
          Sometimes, people just want to solve their own issues, like finding a
          quick, accurate answer to a product-related question. One crucial —
          and often overlooked — aspect of great customer service is enabling
          customers to help themselves. To do this, companies need to have the
          right resources in place and make them easy to access. One way to make
          sure customers can help themselves is by creating an easy-to-navigate
          support portal. A support portal can house key information like FAQs.
          You could even create a public Q&A forum to help consumers connect
          with each other and share information. As customers continue to demand
          seamless experiences throughout their journeys with brands, customer
          service teams need to be ready to handle their inquiries. Help desk
          software allows companies to adapt and keep customers happy no matter
          how the consumer-brand relationship evolves.
        </p>
       </div>
        <div className="p-2">
        <h1 className="text-2xl mt-10 font-bold text-blue-500  mt-7 mb-7">
          Login issues
        </h1>
        <p>
          Ensure the employee isn’t trying to enter a password with the caps
          lock turned on. Also, check to see if the password has expired or if
          the account is under suspension due to inactivity. For a Password
          reset, click on the forgotten password link or{" "}
          <span className="text-blue-500"> [here]</span>
        </p>
        </div>
        <div className="p-2">
        <h1 className="text-2xl mt-10 font-bold text-blue-500  mt-7 mb-7">
          File upload issues
        </h1>
        <p>
          Check if the file uploaded is a comma-separated file (CSV). File
          formats for all uploads are CSV files. Check if the schema has
          appropriate headings.
        </p>
        </div>
       <div className="p-">
       <h1 className="text-2xl mt-10 font-bold text-blue-500  mt-7 mb-7">
          Payments
        </h1>
        <p>
          Account Settings gives you an overview of all available online payment
          processors. You can enable or disable most online payment options or
          manage your existing online-payment settings from the payment channel.
        </p>
       </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default HelpCenter;
