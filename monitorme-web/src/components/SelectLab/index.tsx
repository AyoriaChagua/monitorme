'use client'
import { RightCircleOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";
import {useRouter} from "next/navigation";

interface CustomCollapseItem {
    key: string;
    label: string;
    onClick: () => void; // Función void para manejar el onClick
  }
  
  const generateItems = (onIconClick: () => void): CollapseProps['items'] => [
    {
      key: '1',
      label: 'LAB1502',
      children: (
        <div className="flex justify-between">
          <p>Hay 0 computadoras activas</p>
          <RightCircleOutlined className="hover:cursor-pointer" />
        </div>
      ),
    },
    {
      key: '2',
      label: 'LAB1503',
      children: (
        <div className="flex justify-between">
          <p>Hay 0 computadoras activas</p>
          <RightCircleOutlined className="hover:cursor-pointer" />
        </div>
      ),
    },
    {
      key: '3',
      label: 'LAB1504',
      children: (
        <div className="flex justify-between">
          <p>
            Hay <b className="text-blue-500">1</b> computadora(s) activas
          </p>
          <RightCircleOutlined className="hover:cursor-pointer" onClick={onIconClick} />
        </div>
      ),
    },
    {
      key: '4',
      label: 'LAB1505',
      children: (
        <div className="flex justify-between">
          <p>Hay 0 computadoras activas</p>
          <RightCircleOutlined className="hover:cursor-pointer" />
        </div>
      ),
    },
  ];

export default function SelectLab() {

    const router = useRouter()
    const handleIconClick = () => {
        router.push('/teacher/dashboard')
    }
    const items = generateItems(handleIconClick);
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return <Collapse items={items}  onChange={onChange} className="w-1/2" />;
}
