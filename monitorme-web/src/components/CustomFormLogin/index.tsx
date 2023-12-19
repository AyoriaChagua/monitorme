'use client'
import React from 'react';
import { ContainerForm } from '..';
import { useForm, Controller } from 'react-hook-form';
import { Alert, Button, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type FieldType = {
    email?: string;
    password?: string;
};

export default function CustomFormLogin() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [customAlert, setCustomAlert] = React.useState<{
        message: string,
        type: "success" | "info" | "warning" | "error"
        show: boolean
    }>({
        message: "Success",
        type: "success",
        show: false
    });

    const onSubmit = handleSubmit(async data => {
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        });
        console.log(res)
        if(res?.error) {
            setCustomAlert({
                message: `${res.error}: Verify your credentials`,
                type: "error",
                show: true
            });
        } else {
            router.push('/teacher/labs')
        }
    })

    return (

        <div className='h-screen flex flex-col justify-center items-center gap-10'>
                        {
                customAlert.show ? (
                    <Alert message={customAlert.message} type={customAlert.type} closable />
                ) : <></>
            }
            <div className='flex flex-col justify-center items-center gap-10'>
                <h3 className='red text-3xl text-blue-400 font-bold '>Log in with your account</h3>
                <div className="h-1.5 w-52 bg-blue-400" />
            </div>

            <div className='w-3/5'>
                <div className='flex items-center justify-center'>
                    <ContainerForm >
                        <Form layout="vertical" onFinish={onSubmit}>
                            <div>
                                <Form.Item<FieldType>
                                    label="Username"
                                    name="email"
                                >
                                    <Controller
                                        name='email'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                placeholder='user@email.com'
                                                {...field}
                                            />
                                        )}
                                    />
                                    {
                                        errors.email && (
                                            <span className='text-red-500'>Ingrese un correo válido</span>
                                        )
                                    }
                                </Form.Item>

                                <Form.Item<FieldType>
                                    label="Password"
                                    name="password"
                                >

                                    <Controller
                                        name='password'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field, fieldState }) => (
                                            <Input.Password
                                                placeholder='********'
                                                {...field}
                                            />
                                        )}
                                    />
                                    {
                                        errors.password && (
                                            <span className='text-red-500'>Ingrese un correo válido</span>
                                        )
                                    }
                                </Form.Item>
                            </div>
                            <div className='text-right'>
                                <Button type="primary" ghost htmlType="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </ContainerForm>
                </div>
            </div>
        </div>
    );
}
