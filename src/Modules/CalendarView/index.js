import {Card, Calendar, Alert, Popover} from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import shiftdata from "../../Data/shiftdata.json"
import shiftdata23 from "../../Data/shiftdata23.json"


const CalendarView = () => {
   const [value, setValue] = useState(() => dayjs(dayjs.today));
   const [selectedValue, setSelectedValue] = useState(() => dayjs(dayjs.today));

   const getShiftCellData = (value) => {
     let listData;
     if (value.date() === 26) {
       listData = shiftdata;
     } else if (value.date() === 23) {
       listData = shiftdata23;
     }
     return listData || [];
   };

   const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
   };

   const onPanelChange = (newValue) =>  {
      console.log(newValue)
   };

   const borderStyles = (Workcenter) => {
     if (Workcenter === "Bar") {
       return "blue"
     } else if (Workcenter === "Wait") {
       return "red"
     }


   }

   const dateCellRender = (value) => {
     const listData = getShiftCellData(value);

     const content = (shiftStart, shiftEnd) => {
       return (
         <div>
           <p>{shiftStart} till {shiftEnd}</p>
         </div>
       )
     };

     return (
       <ul className="shift">
       {listData.map((item) => (
         <Popover content={content(item.ShiftStart,item.ShiftEnd)} title={`${item.Name} - ${item.Workcenter}`}>
           <Card title={`${item.Name} - ${item.Workcenter}`}
                 size={"small"}
                 bordered={true}
                 style={{borderColor: borderStyles(item.Workcenter)}}
           />
         </Popover>
         ))}
       </ul>
     );
   };


    return (
        <Card title={"Calendar Overview"}>
          <Alert message={`Active Selection: ${selectedValue?.format('YYYY-MM-DD')}`} />
          <Calendar onPanelChange={onPanelChange}
                    onSelect={onSelect}
                    dateCellRender={dateCellRender}
                    mode={"month"}
          />
        </Card>
    )
};

export default CalendarView;
