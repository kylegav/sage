import {Card, Avatar, Skeleton} from 'antd';
import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {FacebookFilled, TwitterOutlined, InstagramOutlined, YoutubeFilled} from "@ant-design/icons";
import { Pagination } from "antd";

const {Meta} = Card;
const newTab=url=>{
  window.open(url)
}

const Contacts = () => {
    return (
      
        // TODO: Implement Table View ? Or some Container that allows cards to be displayed
        // TODO: Implement a Search function.
    <>
      
      <Card
        style={{ width: 300, height:150, marginTop: 10, border: 0, background:'linear-gradient(#00cc66,#99ccff)' }}
        actions={[<FacebookFilled style={{ color: "blue" }} onClick={()=> newTab('https://www.facebook.com')}/>,
         <TwitterOutlined style={{ color: "skyblue" }} onClick={()=> newTab('https://www.twitter.com')}/>,
         <InstagramOutlined style={{color: "purple"}} onClick={()=> newTab('https://www.Instagram.com')}/>,
         <YoutubeFilled style={{ color: "red"}} onClick={()=> newTab('https://www.youtube.com')}/>,
        ]}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
            title="Justin Green"
            description="4431005000   justin.green@sage.com"
          />
        </Skeleton>
      </Card>
      <Card
        style={{ width: 300, height:150, marginTop: 75, border: 0, background:'linear-gradient(#00cc66,#99ccff)' }}
        actions={[<FacebookFilled style={{ color: "blue" }} onClick={()=> newTab('https://www.facebook.com')}/>,
        <TwitterOutlined style={{ color: "skyblue" }} onClick={()=> newTab('https://www.twitter.com')}/>,
        <InstagramOutlined style={{color: "purple"}} onClick={()=> newTab('https://www.Instagram.com')}/>,
        <YoutubeFilled style={{ color: "red"}} onClick={()=> newTab('https://www.youtube.com')}/>,
      ]}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
            title="Harris White"
            description="3021007000    harris.white@sage.com"
          />
        </Skeleton>
      </Card>
      <Card
        style={{ width: 300, height:150, marginTop: 75, border: 0, background:'linear-gradient(#00cc66,#99ccff)' }}
        actions={[<FacebookFilled style={{ color: "blue" }} onClick={()=> newTab('https://www.facebook.com')}/>,
        <TwitterOutlined style={{ color: "skyblue" }} onClick={()=> newTab('https://www.twitter.com')}/>,
        <InstagramOutlined style={{color: "purple"}} onClick={()=> newTab('https://www.Instagram.com')}/>,
        <YoutubeFilled style={{ color: "red"}} onClick={()=> newTab('https://www.youtube.com')}/>,
      ]}  
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />}
            title="Patunya Picklebottom"
            description="3026906900     patunya.pickle@sage.com"
          />
        </Skeleton>
      </Card>
      <Card
        style={{ width: 300, height:170, marginTop: 75, border: 0, background:'linear-gradient(#00cc66,#99ccff)', fontSize: 15, color: 'white' }}
        actions={[<FacebookFilled style={{ color: "blue" }} onClick={()=> newTab('https://www.facebook.com')}/>,
        <TwitterOutlined style={{ color: "skyblue" }} onClick={()=> newTab('https://www.twitter.com')}/>,
        <InstagramOutlined style={{color: "purple"}} onClick={()=> newTab('https://www.Instagram.com')}/>,
        <YoutubeFilled style={{ color: "red"}} onClick={()=> newTab('https://www.youtube.com')}/>,
      ]}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />}
            title="Emperor Kuzco"
            description="3029413502     emperor.kuzco@sage.com"
          />
        </Skeleton>
      </Card>
    </>
    )
}

export default Contacts;