import React, { useState } from 'react';
import { Form, Input, InputNumber, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const CategoryGestorPersonal = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="nombre" label="Nombre">
          <Input />
        </Form.Item>

        <Form.Item name="direccion" label="Dirección">
          <Input />
        </Form.Item>

        <Form.Item name="edad" label="Edad">
          <InputNumber />
        </Form.Item>

        <Form.Item name="aptitudes" label="Aptitudes">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="puesto" label="Puesto">
          <Input />
        </Form.Item>

        <Form.Item name="experiencia" label="Experiencia">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="referencias" label="Referencias">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="foto" label="Foto">
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
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

export default CategoryGestorPersonal;
