import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const CategoryInmobiliaria = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="interseccion" label="Intersección">
          <Input />
        </Form.Item>

        <Form.Item name="direccion" label="Dirección">
          <Input />
        </Form.Item>

        <Form.Item name="superficie" label="Superficie">
          <InputNumber />
        </Form.Item>

        <Form.Item name="precio" label="Precio">
          <InputNumber />
        </Form.Item>

        <Form.Item name="descripcion" label="Descripción">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="disponibilidad" label="Disponibilidad">
          <Input />
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

export default CategoryInmobiliaria;
