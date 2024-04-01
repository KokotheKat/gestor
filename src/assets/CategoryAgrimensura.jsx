import React, { useState } from 'react';
import { Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const CategoryAgrimensura = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="digitalizado_croquis" label="Digitalizado/Croquis">
          <Input />
        </Form.Item>

        <Form.Item name="imagen" label="Imagen (foto/pdf)">
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="provincia" label="Provincia">
          <Input />
        </Form.Item>

        <Form.Item name="municipio" label="Municipio">
          <Input />
        </Form.Item>

        <Form.Item name="CIRCUNSCRIP" label="CIRCUNSCRIP">
          <Input />
        </Form.Item>

        <Form.Item name="SECCION" label="SECCION">
          <Input />
        </Form.Item>

        <Form.Item name="CHACRA" label="CHACRA">
          <Input />
        </Form.Item>

        <Form.Item name="QUINTA" label="QUINTA">
          <Input />
        </Form.Item>

        <Form.Item name="FRACCION" label="FRACCION">
          <Input />
        </Form.Item>

        <Form.Item name="MANZANA" label="MANZANA">
          <Input />
        </Form.Item>

        <Form.Item name="PARCELA" label="PARCELA">
          <Input />
        </Form.Item>

        <Form.Item name="PARTIDA_N" label="PARTIDA Nº">
          <Input />
        </Form.Item>

        <Form.Item name="CUENTA_N" label="CUENTA Nº">
          <Input />
        </Form.Item>

        <Form.Item name="solicitante" label="Solicitante">
          <Input />
        </Form.Item>

        <Form.Item name="interseccion" label="Intersección">
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

export default CategoryAgrimensura;
