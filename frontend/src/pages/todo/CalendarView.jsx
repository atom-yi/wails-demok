import {Calendar} from "antd";

export default function CalendarView() {
    const cellRender = (date, info) => {
        switch (date.date()) {
            case 1:
                return <div className="text-purple-400 font-bold">第一天</div>
                break;
            default:
        }
    };
    return (
        <div>
            <h1>日历视图</h1>
            <Calendar
                cellRender={cellRender}
            />
        </div>
    )
}