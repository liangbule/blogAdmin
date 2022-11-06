import {Button, Checkbox, Form, Input, Row, Col} from 'antd';
import React from 'react';
import "./index.scss"

const App: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row className="logBg" justify="center">
            <Col className="loginInput" xs={20} sm={16} md={12} lg={12} xl={12}>
                <div>登录</div>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: '请输入用户名!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: '请输入密码!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked"
                               wrapperCol={{offset: 8, span: 16}}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default App;