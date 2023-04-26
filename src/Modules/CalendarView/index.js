import {Card, Calendar, Alert, Popover, Skeleton, Spin} from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import shiftdata26 from "../../Data/shiftdata26.json"
import shiftdata23 from "../../Data/shiftdata23.json"
import shiftdata24 from "../../Data/shiftdata24.json"
import shiftdata25 from "../../Data/shiftdata25.json"
import shiftdata27 from "../../Data/shiftdata27.json"


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const CalendarView = () => {
   const [value, setValue] = useState(() => dayjs(dayjs.today));
   const [selectedValue, setSelectedValue] = useState(() => dayjs(dayjs.today));
   const [loading, setLoading] = useState(true);

  // Illusion of "loading data"
   sleep(1500).then(r => setLoading(false))

   const getShiftCellData = (value) => {
     let listData;
     if (value.date() === 26) {
       listData = shiftdata26;
     } else if (value.date() === 23) {
       listData = shiftdata23;
     } else if (value.date() === 24) {
       listData = shiftdata24;
     } else if (value.date() === 25) {
       listData= shiftdata25;
     } else if (value.date() === 27) {
       listData = shiftdata27;
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
     } else if (Workcenter == "Kitchen") {
       return "yellow"
     } else if (Workcenter == "Host") {
       return "green"
     } else {
       return "gray"
     }


   }

   const dateCellRender = (value) => {
     const listData = getShiftCellData(value);

     const content = (shiftStart, shiftEnd, workcenter) => {
       return (
         <div>
           <p>{shiftStart} till {shiftEnd}</p>
         </div>
       )
     };

     return (
       <ul className="shift">
       {listData.map((item) => (
         <Popover content={content(item.ShiftStart,item.ShiftEnd)}
                  title={`${item.Name} - ${item.Workcenter}`}
                  trigger="hover"
         >
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
        <Spin spinning={loading}>

        <Card title={"Calendar Overview"}>
          <Alert message={`Active Selection: ${selectedValue?.format('YYYY-MM-DD')}`} />
          <Skeleton loading={loading}>
          <Calendar onPanelChange={onPanelChange}
                    onSelect={onSelect}
                    dateCellRender={dateCellRender}
                    mode={"month"}
          />
          </Skeleton>
        </Card>
          </Spin>
    )
};

export default CalendarView;
