import { CodeOutlined, HomeOutlined, InfoCircleOutlined, FieldTimeOutlined, UnorderedListOutlined } from '@ant-design/icons';
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
    getItem(<span className="text-purple-400">待办清单</span>, '/todoList', <UnorderedListOutlined />, [
        getItem(<Link to={"/todos/list"}>列表视图</Link>, '/todos/list', <UnorderedListOutlined />),
        getItem(<Link to={"/todos/calendar"}>日历视图</Link>, '/todos/calendar', <UnorderedListOutlined />)
    ]),
    getItem(<Link to={"/coder"}>编解码</Link>, '/coder', <CodeOutlined />),
    getItem(<Link to={"/time"}>时间工具</Link>, '/time', <FieldTimeOutlined />),
    getItem(<Link to={"/about"}>About</Link>, '/about', <InfoCircleOutlined />),
];

export default function Sidebar() {
    return (
        <div>
            <Menu
                defaultSelectedKeys={['/']}
                theme='dark'
                mode='inline'
                items={items}
            />
        </div>
    );
}