import { Tooltip, Divider, Row, Col } from 'antd';
import {
  QuestionCircleOutlined
} from '@ant-design/icons';
import ResetPasswordForm from './ResetPasswordForm';
import React from 'react';
import styles from './styles.module.css';

const ResetPasswordPage: React.FC = () => {

  return (
    <Row>
      <Col className={styles.container}>
        <span>Reset Passowrd</span> 
        <Tooltip 
        title="the password are at least 8 characters, including one number and two special characters or be greater than 15 characters with no restriction"
        >
        <QuestionCircleOutlined rev={undefined} />
        </Tooltip>
        <Divider />
      <ResetPasswordForm />
      </Col>
    </Row>
  );
};

export default ResetPasswordPage;