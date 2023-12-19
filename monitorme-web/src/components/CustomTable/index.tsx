'use client'
import React, { useState } from 'react';
import { List, Space, Table, Tag, Typography } from 'antd';
import './styles.css';
import { CloseCircleFilled } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;

interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        firstName: 'DESKTOP-6HHNMAC',
        lastName: 'si',
        age: 32,
        address: '',
        tags: ['Google Chrome', 'Sublime Text', 'Application Frame Host'],
    },
    {
        key: '2',
        firstName: 'LAPTOP-VR12UDLG',
        lastName: 'no',
        age: 32,
        address: '',
        tags: [],
    },
];


const dataList = [
    {name: 'Google Chrome', time: 284},
    {name: 'Sublime Text', time: 0},
    {name: 'Application Frame Host', time: 20},
];

const CustomTable: React.FC = () => {
    const [showDetails, setShowDetails] = useState(false);
    const handleDetails = () => {
        setShowDetails(!showDetails);
    }
    return (<div className='flex'>
        <Table dataSource={data} className='custom-table'>
            <Column title="PC" dataIndex="firstName" key="firstName" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={(tags: string[]) => (
                    <>
                        {tags.map((tag) => (
                            <Tag color="blue" key={tag} className='hover:cursor-pointer' onClick={handleDetails}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column
                title="Estado"
                key="action"
                render={(_: any, record: DataType) => (
                    <Space size="middle">
                        {record.lastName === 'si' ? <div className='w-2 h-2 bg-green-500 rounded-xl' /> : <div className='w-2 h-2 bg-gray-500 rounded-xl' />}
                    </Space>
                )}
            />
        </Table>
        <div className={`${showDetails ? 'w-80' : 'hidden'}`}>
            <List
                header={<h3 className='font-bold text-md'>DESKTOP-6HHNMAC</h3>}
                footer={<div className='flex justify-center'><CloseCircleFilled/></div>}
                bordered
                dataSource={dataList}
                renderItem={(item) => (
                    <div className='flex flex-row justify-between'>
                        <div>
                            <div >
                                <List.Item>
                                    {item.name}
                                </List.Item>
                            </div>
                        </div>
                        <div>
                            <div>
                                <List.Item>
                                    {item.time} seg
                                </List.Item>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    </div>)
};

export default CustomTable;