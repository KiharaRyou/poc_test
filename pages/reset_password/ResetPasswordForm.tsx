import {
    Button,
    Form,
    Input,
    Divider,
    message 
  } from 'antd';
  import React, {useState} from 'react';
  
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

  interface SubmitValue {
    password: string,
    confirm: string
  };
  
  const ResetPasswordForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [form] = Form.useForm();
  
    const onFinish = async (values: SubmitValue) => {
      setLoading(true);
      message.success('Update Successfully')
      console.log(values);
      setLoading(false);
    };
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="resetPassword"
        onFinish={onFinish}
        style={{ width: 400 }}
        scrollToFirstError
        onFinishFailed={({ errorFields }) => {
          console.log(errorFields)
        }}
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
          <Input.Password data-testid="new_password"/>
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
          <Input.Password data-testid="confirm_password"/>
        </Form.Item>
        <Divider style={{marginBottom: 10}}/>
        <div style={{textAlign: 'center'}}>
          <Button type="primary" htmlType="submit" disabled={loading} data-testid="submit_button">
            Submit
          </Button>
        </div>
      </Form>
    );
  };
  
  export default ResetPasswordForm;