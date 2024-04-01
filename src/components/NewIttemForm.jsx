import React, { useRef, useState } from 'react';
import { Form, Input, Button, Checkbox, Radio, Slider, DatePicker, Select, Upload, message, InputNumber } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import "../styles/NewIttemForm.scss"
const { Option } = Select;
const { Dragger } = Upload;

const NewIttemForm = () => {
  
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const inputRef = useRef(null)
const handleScroll = (e) =>{
  e.preventDefault() 
  inputRef.current.blur()
console.log(e)
}
const handleWheel = (e) => {
  e.preventDefault()
  console.log(e)
} 
const onFinish = (values) => {
    setSubmittedData(values);
  };

  // Función para verificar el tipo de archivo
  const checkFileType = (file, type) => {
    const acceptedTypes = type === 'image' ? ['image/jpeg', 'image/png', 'image/gif'] : ['application/pdf'];
    if (!acceptedTypes.includes(file.type)) {
      message.error(`El archivo debe ser del tipo ${type.toUpperCase()}`);
      return false;
    }
    return true;
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="nombre" label="Nombre" rules={[{ required: true, message: 'Please input the name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="cantidad" label="Cantidad" rules={[{ required: true, message: 'Please input the quantity!' }]}>
          <Input type="number" />
        </Form.Item>

        <Form.Item name="categoria" label="Categoría" rules={[{ required: true, message: 'Please select the category!' }]}>
          <Select>
            <Option value="categoria1">Categoría 1</Option>
            <Option value="categoria2">Categoría 2</Option>
            <Option value="categoria3">Categoría 3</Option>
          </Select>
        </Form.Item>

        <Form.Item name="imagen" label="Imagen">
        <Upload.Dragger
            beforeUpload={(file) => checkFileType(file, 'image')}
            accept=".jpg,.jpeg,.png,.gif"
          >
            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
            <p className="ant-upload-text">Click or drag image to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item name="pdf" label="PDF">
        <Upload.Dragger
            beforeUpload={(file) => checkFileType(file, 'pdf')}
            accept=".pdf"
          >
            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
            <p className="ant-upload-text">Click or drag PDF to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>


        <Form.Item name="descripcion" label="Descripción" rules={[{ required: true, message: 'Please input the description!' }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="valor" label="Valor" rules={[{ required: true, message: 'Please input the value!' }]}>
          <Input ref={inputRef} style={{WebkitAppearance:"none",margin:0,}} type="number" onScroll={handleScroll} onWheel={handleWheel}/>
        </Form.Item>

        <Form.Item name="a" label="A">
          <Checkbox>A</Checkbox>
        </Form.Item>

        <Form.Item name="b" label="B">
          <Checkbox>B</Checkbox>
        </Form.Item>

        <Form.Item name="c" label="C">
          <Checkbox>C</Checkbox>
        </Form.Item>

        <Form.Item name="d" label="D">
          <Checkbox>D</Checkbox>
        </Form.Item>

        <Form.Item name="fecha" label="Fecha">
          <DatePicker />
        </Form.Item>

        <Form.Item name="opcionDesplegable" label="Opción Desplegable">
          <Select>
            <Option value="opcion1">Opción 1</Option>
            <Option value="opcion2">Opción 2</Option>
            <Option value="opcion3">Opción 3</Option>
          </Select>
        </Form.Item>

        <Form.Item name="check1"  label="Check 1">
          <Checkbox>Check 1</Checkbox>
        </Form.Item>

        <Form.Item name="check2"  label="Check 2">
          <Checkbox>Check 2</Checkbox>
        </Form.Item>

        <Form.Item name="radio" label="Radio">
          <Radio.Group>
            <Radio value="radio1">Radio 1</Radio>
            <Radio value="radio2">Radio 2</Radio>
            <Radio value="radio3">Radio 3</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="barra" label="Barra">
          <Slider />
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

export default NewIttemForm;
