import React, { useState } from 'react';
import { Form, Input, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CategoryAlmacen = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="imagenProducto" label="Imagen de producto">
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="nombreProducto" label="Nombre de producto" rules={[{ required: true, message: 'Please input the product name!' }]}>
          <Input maxLength={50} />
        </Form.Item>

        <Form.Item name="descripcionProducto" label="Descripción de producto">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="precio" label="Precio" rules={[{ required: true, message: 'Please input the price!' }]}>
          <InputNumber min={0} step={0.01} />
        </Form.Item>

        <Form.Item name="stock" label="Stock" rules={[{ required: true, message: 'Please input the stock!' }]}>
          <InputNumber min={0} />
        </Form.Item>

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

export default CategoryAlmacen;
