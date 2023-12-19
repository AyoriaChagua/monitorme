'use client'
import React, { useState } from 'react';
import { ContainerForm } from '..';
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Button
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export default function CustomFormRegister() {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <ContainerForm title='Ingresar datos del usuario'>
            <Form layout="vertical">
                <div className='grid grid-cols-2 gap-4'>
                    <Form.Item label="Nombre">
                        <Input max={20} />
                    </Form.Item>
                    <Form.Item label="Apellidos">
                        <Input max={25} />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Email" >
                        <Input
                            className='w-full'
                            placeholder='adrres@email.com'
                        />
                    </Form.Item>
                    <Form.Item label="Contraseña">
                        <Input.Password
                            placeholder="input password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                    <Form.Item label="Repetir contraseña">
                        <Input.Password
                            placeholder="input password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                </div>
                <div className='text-right'>
                    <Button type="primary" ghost>
                        Crear
                    </Button>
                </div>
            </Form>
        </ContainerForm>
    );
}
