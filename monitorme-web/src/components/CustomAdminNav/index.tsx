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