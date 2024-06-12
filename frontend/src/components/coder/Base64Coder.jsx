import { Flex, Input, Button, Divider, message } from "antd";
import { useState } from "react";
import { Base64Decode, Base64Encode } from "../../../wailsjs/go/main/App";

const { TextArea } = Input;

export default function Base64Coder() {
    const [messageApi, contextHolder] = message.useMessage();
    const [cipher, setCipher] = useState("");
    const [plain, setPlain] = useState("");

    function base64Decode() {
        if (cipher == '') {
            return;
        }

        Base64Decode(cipher).then((res) => {
            setPlain(res);
        }).catch((err) => {
            messageApi.error(err);
        })
    }

    function base64Encode() {
        if (plain == '') {
            return;
        }

        Base64Encode(plain).then((res) => {
            setCipher(res);
        }).catch((err) => {
            messageApi.error(err);
        })
    }

    return (
        <div className="w-full">
            {contextHolder}
            <Divider>
                <span className="text-purple-500 font-bold text-lg">Base64</span>
            </Divider>
            <Flex justify="flex-start" wrap="wrap" gap="small">
                <Flex justify="flex-end" wrap="wrap" gap="small" className="w-full">
                    <Button type="primary" onClick={base64Encode}>编码</Button>
                    <Button type="primary" onClick={base64Decode}>解码</Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => {
                            setCipher('');
                            setPlain('');
                        }}
                        className="mr-1"
                    >
                        清空
                    </Button>
                </Flex>
                <TextArea
                    value={plain}
                    rows={4}
                    onChange={e => setPlain(e.target.value)}
                    placeholder="输入需要Base64编码的文本"
                />
                <TextArea
                    value={cipher}
                    onChange={e => setCipher(e.target.value)}
                    rows={4}
                    placeholder="输入需要Base64解码的文本"
                />
            </Flex>
            <Divider />
        </div>
    );
}