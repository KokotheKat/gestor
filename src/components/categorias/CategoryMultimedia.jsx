import React, { useState } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CategoryMultimedia = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="imagen" label="Imagen">
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="titulo" label="Título">
          <Input />
        </Form.Item>

        <Form.Item name="autor" label="Autor">
          <Input />
        </Form.Item>

        <Form.Item name="descripcion" label="Descripción">
          <Input.TextArea />
        </Form.Item>

        {/* Agrega aquí cualquier otra entrada necesaria */}

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CategoryMultimedia;
