import {Card, Calendar, Alert, Popover, Button} from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';

const CalendarView = () => {
   const [value, setValue] = useState(() => dayjs(dayjs.today));
   const [selectedValue, setSelectedValue] = useState(() => dayjs(dayjs.today));
   const [open, setOpen] = useState(false);

   // TODO: Implement Popover element for Calendar
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };


   const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
   };

   const onPanelChange = (newValue) =>  {
      console.log(newValue)
   };

    return (
        <Card title={"Calendar Overview"}>
          <Alert message={`Active Selection: ${selectedValue?.format('YYYY-MM-DD')}`} />
          <Calendar onPanelChange={onPanelChange} onSelect={onSelect} />
        </Card>
    )
};

export default CalendarView;
