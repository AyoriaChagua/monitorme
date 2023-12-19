'use client'
import React, { useState } from 'react';
<<<<<<< HEAD
import { Controller, useForm } from 'react-hook-form';
import { ContainerForm } from '..';

=======
import { ContainerForm } from '..';
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d
import {
    DatePicker,
    Form,
    Input,
<<<<<<< HEAD
    Button,
    Radio,
    Alert
} from 'antd';
import { useRole } from './useRole';
=======
    InputNumber,
    Select,
    Button
} from 'antd';
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export default function CustomFormRegister() {
<<<<<<< HEAD
    const roles = useRole();
    const [passwordVisible, setPasswordVisible] = React.useState({
        firstPass: false,
        secondPass: false
    });
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [customAlert, setCustomAlert] = useState<{
        message: string,
        type: "success" | "info" | "warning" | "error"
        show: boolean
    }>({
        message: "Success",
        type: "success",
        show: false
    });

    const handlePasswordVisibility = (field: string, visibility: boolean) => {
        setPasswordVisible(prevState => ({
            ...prevState,
            [field]: visibility
        }));
    }

    const onSubmit = handleSubmit(async data => {
        if (data.password !== data.confirmPassword) {
            return alert("Passwords don't match");
        }
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                roleId: data.role
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            setCustomAlert({ message: "User created successfully", show: true, type: "success" })
        } else {
            setCustomAlert({ message: "User already exists", show: true, type: "error" })
        }
    });

    React.useEffect(() => {
    }, [passwordVisible]);

    return (
        <>
            {
                customAlert.show ? (
                    <Alert message={customAlert.message} type={customAlert.type} closable />
                ) : <></>
            }
            <ContainerForm title='Enter user data'>
                <Form layout="vertical" onFinish={onSubmit}>
                    <div>
                        <Form.Item label="Email" >

                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <Input
                                        className='w-full'
                                        type='email'
                                        {...field}
                                        max={20}
                                        placeholder='address@email.com'
                                    />
                                )} />
                            {
                                errors.email && (
                                    <span className='text-red-500'>Ingrese un correo válido</span>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="Password">
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: true, minLength: 3 }}
                                render={({ field, fieldState }) => (
                                    <Input.Password
                                        {...field}
                                        placeholder="Input password"
                                        visibilityToggle={{
                                            visible: passwordVisible.firstPass,
                                            onVisibleChange: (visible) => {
                                                setTimeout(() => handlePasswordVisibility('firstPass', visible), 0);
                                            }
                                        }}
                                    />
                                )}
                            />
                            {
                                errors.password && (
                                    <span className='text-red-500'>Ingrese una contraseña válida</span>
                                )
                            }

                        </Form.Item>
                        <Form.Item label="Repeat Password">
                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <Input.Password
                                        {...field}
                                        placeholder="Repeat password"
                                        visibilityToggle={{
                                            visible: passwordVisible.secondPass,
                                            onVisibleChange: (visible) => {
                                                setTimeout(() => handlePasswordVisibility('secondPass', visible), 0);
                                            }
                                        }}
                                    />
                                )} />
                            {
                                errors.confirmPassword && (
                                    <span className='text-red-500'>Ingrese una contraseña válida</span>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="Role:">
                            <Controller
                                name="role"
                                control={control}
                                rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <Radio.Group defaultValue={"teacher"} buttonStyle='solid'>
                                        {roles.map(role => (
                                            <Radio.Button {...field} value={role.id} key={role.id}>{role.name}</Radio.Button>
                                        ))}
                                    </Radio.Group>
                                )} />
                            {
                                errors.confirmPassword && (
                                    <span className='text-red-500'>Ingrese una contraseña válida</span>
                                )
                            }
                        </Form.Item>

                    </div>
                    <div className='text-right'>
                        <Button type="primary" ghost htmlType="submit">
                            Create
                        </Button>
                    </div>
                </Form>
            </ContainerForm>
        </>
=======
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
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d
    );
}
