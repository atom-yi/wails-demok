import { Flex } from 'antd';
import Base64Coder from '../components/coder/Base64Coder';

export default function Coder() {
    return (
        <Flex
            justify={"flex-start"}
            align={"center"}
            vertical
        >
            <Base64Coder />
        </Flex>
    );
}