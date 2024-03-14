import { CodeOutlined, HomeOutlined, InfoCircleOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem(<Link to={"/"}>Home</Link>, '/', <HomeOutlined />),
    getItem(<Link to={"/coder"}>编解码</Link>, '/coder', <CodeOutlined />),
    getItem(<Link to={"/time"}>时间工具</Link>, '/time', <FieldTimeOutlined />),
    getItem(<Link to={"/about"}>About</Link>, '/about', <InfoCircleOutlined />)
];

export default function Sidebar() {
    return (
        <div>
            <Menu
                theme='dark'
                mode='inline'
                items={items}
            />
        </div>
    );
}