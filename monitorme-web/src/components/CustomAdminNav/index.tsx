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