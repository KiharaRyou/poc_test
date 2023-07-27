import {
    Button,
    Form,
    Input,
    Divider,
  } from 'antd';
  import React from 'react';
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  const ResetPasswordForm: React.FC = () => {

    const [form] = Form.useForm();
  
    const onFinish = async (values: any) => {
      console.log(values);
    };
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="resetPassword"
        onFinish={onFinish}
        style={{ maxWidth: 800 }}
        scrollToFirstError
      >
        <Form.Item
          name="password"
          label="New Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              pattern: /^(?=.*\d)(?=(.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\|]){2}).{8,}|.{16,}/,
              message: 'Please hover on the question mark to check the password rules.'
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Divider style={{marginBottom: 10}}/>
        <div style={{textAlign: 'center'}}>
          <Button type="primary" htmlType="submit" data-testid="submit_button">
            Submit
          </Button>
        </div>
      </Form>
    );
  };
  
  export default ResetPasswordForm;