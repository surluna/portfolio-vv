import React, { useState } from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons"; // 引入 Ant Design 图标

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return React.createElement(
    "section",
    {
      id: "contact",
      className: "grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative",
    },
    React.createElement("div", {
      className:
        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2",
    }),
    React.createElement(
      "div",
      { className: "z-10" },
      React.createElement(
        "h5",
        { className: "text-xl font-bold text-white my-2" },
        "Let&apos;s Connect"
      ),
      React.createElement(
        "p",
        { className: "text-[#ADB7BE] mb-4 max-w-md" },
        "I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!"
      ),
      React.createElement(
        "div",
        { className: "socials flex flex-row gap-2" },
        React.createElement(
          "a",
          {
            href: "https://github.com/surluna",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          React.createElement(GithubOutlined, {
            className: "w-6 h-6 text-[#ADB7BE]",
          }) // 使用 GithubOutlined
        ),
        React.createElement(
          "a",
          {
            href: "https://www.linkedin.com/in/vivien-wee-b032452a3/",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          React.createElement(LinkedinOutlined, {
            className: "w-6 h-6 text-[#ADB7BE]",
          }) // 使用 LinkedinOutlined
        )
      )
    ),
    React.createElement(
      "div",
      null,
      emailSubmitted
        ? React.createElement(
            "p",
            { className: "text-green-500 text-sm mt-2" },
            "Email sent successfully!"
          )
        : React.createElement(
            "form",
            { className: "flex flex-col", onSubmit: handleSubmit },
            React.createElement(
              "div",
              { className: "mb-6" },
              React.createElement(
                "label",
                {
                  htmlFor: "email",
                  className: "text-white block mb-2 text-sm font-medium",
                },
                "Your email"
              ),
              React.createElement("input", {
                name: "email",
                type: "email",
                id: "email",
                required: true,
                className:
                  "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",
              })
            ),
            React.createElement(
              "div",
              { className: "mb-6" },
              React.createElement(
                "label",
                {
                  htmlFor: "subject",
                  className: "text-white block text-sm mb-2 font-medium",
                },
                "Subject"
              ),
              React.createElement("input", {
                name: "subject",
                type: "text",
                id: "subject",
                required: true,
                className:
                  "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",
              })
            ),
            React.createElement(
              "div",
              { className: "mb-6" },
              React.createElement(
                "label",
                {
                  htmlFor: "message",
                  className: "text-white block text-sm mb-2 font-medium",
                },
                "Message"
              ),
              React.createElement("textarea", {
                name: "message",
                id: "message",
                className:
                  "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5",
              })
            ),
            React.createElement(
              "button",
              {
                type: "submit",
                className:
                  "bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full",
              },
              "Send Message"
            )
          )
    )
  );
};

export default Contact;
