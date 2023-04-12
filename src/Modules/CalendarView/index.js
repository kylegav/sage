import {Card, Calendar} from 'antd';

const CalendarView = () => {

    const onPanelChange = () =>  {
      console.log("Calendar Change")
    }
    return (
        <Card title={"Calendar Overview"}>
          <Calendar onPanelChange={onPanelChange} />
        </Card>
    )
};

export default CalendarView;
