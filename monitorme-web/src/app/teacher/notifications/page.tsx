'use client'
import { CustomAdminNav, CustomNav } from '@/components'
import React from 'react';
import { Divider, Form, List, Select, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const data = [
    'PC 1501-01 has spent more than 2 minutes using gpt chat',
];

export default function NotificationsPage() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <div>
            <div>
                <CustomNav />
            </div>
            <div className='flex flex-row'>
                <div>
                    <CustomAdminNav />
                </div>
                <div className='flex flex-col m-5 items-center w-full gap-y-5'>
                    <div className='flex mb-4'>
                        <h1 className='text-blue-500 font-bold text-xl flex items-center justify-center'>
                            Take a look at the activity
                        </h1>
                    </div>
                    <div className='flex flex-row'>
                        <div>
                            <List
                                header={
                                    <h3 className='text-blue-500 font-bold text-xl flex items-center justify-center'>
                                        Alerts
                                    </h3>
                                }
                                bordered
                                dataSource={data}
                                renderItem={(item) => (

                                    <List.Item className='border-2 border-b-blue-400'>
                                        <div className='flex flex-row items-center gap-x-3 p-2  w-full'>
                                            <div className='w-2 h-2 bg-blue-500 rounded-xl' />
                                            <p>{item}</p>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </div>
                        <div>
                            <div className='border-2'>
                                <div className=' w-80'>
                                    <h3 className='text-blue-500 font-bold text-xl flex items-center justify-center m-4'>
                                        Notifications
                                    </h3>
                                </div>
                                <div>
                                    <div className='mx-10'>
                                        <div className='flex flex-row items-center gap-x-3   w-full mb-5'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="select" className='text-gray-500 text-sm  mb-3'>Select a PC</label>
                                                <Select
                                                    defaultValue="..."
                                                    onChange={handleChange}
                                                    options={[
                                                        { value: 'DESKTOP-6HHNMAC', label: 'DESKTOP-6HHNMAC' },
                                                    ]}
                                                />

                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="select" className='text-gray-500 text-sm mb-3'>Write the message</label>
                                            <TextArea />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
