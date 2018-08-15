import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class PlayList extends Component {
    componentDidMount() {
        document.title = '歌单管理'
    }
    handleSumit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fetch('/api/playlist/add', {
                    body: JSON.stringify(values),
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(function (response) {
                    return response.json()
                }).then(data => {
                    console.log(data);
                    Modal.info({
                        title: '成功',
                        content: <span>提交歌单成功！</span>,
                        onOk: () => {
                            this.props.form.resetFields();
                        }
                    })
                })
                console.log('this is Value', values);
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            }
        }
        return (
            <Form onSubmit={this.handleSumit}>
                <FormItem
                    label='歌曲名称'
                    {...FormItemLayout}
                >
                    {
                        getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入歌曲名称',
                                }
                            ]

                        })(<Input placeholder='请输入歌曲名称' />)
                    }
                </FormItem>
                <FormItem
                    label='歌曲封面'
                    {...FormItemLayout}
                >
                    {
                        getFieldDecorator('cover', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入歌曲封面的网址',
                                }
                            ]

                        })(<Input placeholder='请输入歌曲封面的网址' />)
                    }
                </FormItem>
                <FormItem
                    label='歌单描述'
                    {...FormItemLayout}
                >
                    {
                        getFieldDecorator('desc', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入歌单介绍',
                                }
                            ]

                        })(<TextArea rows={6} placeholder='请输入歌单介绍' />)
                    }
                </FormItem>
                <FormItem>
                    <Button type='primary' htmlType='submit'>
                        保存
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(PlayList);