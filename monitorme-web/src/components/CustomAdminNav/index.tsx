<<<<<<< HEAD
'use client'
import React from 'react';
import { AppstoreOutlined, DashboardFilled, DashboardOutlined, MailOutlined, NotificationOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('', 'grp', null, [
        getItem('Dashboard', 'dashboard', <DashboardOutlined />),
        getItem('Notifications', 'notifications', <NotificationOutlined />)
    ],
        'group'
    ),
    getItem('Configuration', 'sub4', <SettingOutlined />, [
        getItem('Account', 'account'),
        getItem('Reports', 'reports'),
    ]),


];

const CustomAdminNav: React.FC = () => {
    const router = useRouter();
    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case 'notifications':
                router.push('/teacher/notifications')
                break;
            case 'dashboard':
                router.push('/teacher/dashboard')
                break;
            default:
                break;
        }
        console.log('click ', e.key);
    };

    return (
        <div className='flex h-screen border-r-2 border-slate-300'>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    );
};

export default CustomAdminNav;
=======
import { AppstoreOutlined, MailFilled, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

interface Props {
    
}

const items: MenuProps['items'] = [
    {
        key: 'mail',
        icon: <MailFilled />,
        label: 'nav 1',
    },
    {
        key: 'mail',
        icon: <AppstoreOutlined />,
        label: 'nav 1',
    },
    {
        label: 'nav 1',
        key: 'Submenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
        ]
    },

]

export default function CustomAdminNav () {}
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d
