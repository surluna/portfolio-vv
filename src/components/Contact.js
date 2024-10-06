import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Input, Button, Form, message } from "antd";
import { send } from "@emailjs/browser";
import "../styles/input.css";
import "../styles/output.css";
import "../styles/index.css";

const Contact = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values) => {
    const { email, message: msg } = values;

    console.log("handleSubmit function called");
    console.log("Email:", email);
    console.log("Message:", msg);

    try {
      console.log("Attempting to send email...");
      const response = await send(
        "service_zk42k7v",
        "template_730gl79",
        {
          to_name: "Vivien",
          from_name: email,
          message: msg,
        },
        "152i3ScbA61mrdncA"
      );

      console.log("Email sent successfully!", response.status, response.text);
      messageApi.open({
        type: "success",
        content: "Email sent successfully!",
      });
      form.resetFields();
    } catch (error) {
      console.error("Email sending failed...", error);
      messageApi.open({
        type: "error",
        content: `Failed to send the email. Error: ${error.message}`,
      });
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-0 gap-4 relative"
    >
      {contextHolder}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 p-4" style={{ width: "65%", marginLeft: "4rem" }}>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p
          className="text-[#ADB7BE] mb-4 max-w-md"
          style={{
            fontSize: "1rem",
            marginTop: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com/surluna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined
              className="w-12 h-6 text-[#ADB7BE]"
              style={{ fontSize: "1.8rem" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vivien-wee-b032452a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined
              className="w-12 h-6 text-[#ADB7BE]"
              style={{ fontSize: "1.8rem" }}
            />
          </a>
        </div>
      </div>
      <div style={{ marginRight: "4rem" }}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Your email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full h-10"
            />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full"
              style={{ height: "6rem" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-10 mt-4"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
