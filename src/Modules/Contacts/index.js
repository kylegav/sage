import {Card, Avatar, Skeleton} from 'antd';
import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const {Meta} = Card;


const Contacts = () => {
    return (
        // TODO: Implement Table View ? Or some Container that allows cards to be displayed
        // TODO: Implement a Search function.
    <>
      <Card
        style={{ width: 300, marginTop: 16 }}
        
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
        style={{ width: 300, marginTop: 16 }}
        
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
        style={{ width: 300, marginTop: 16 }}
        
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
        style={{ width: 300, marginTop: 16 }}
        
      >
        <Skeleton loading={true} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
    )
}

export default Contacts;
