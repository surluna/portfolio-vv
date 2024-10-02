import React from "react";
import { Form, Input, Button } from "antd";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
    <Form name="contact" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input placeholder="Your Email" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <Input.TextArea placeholder="Your Message" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
