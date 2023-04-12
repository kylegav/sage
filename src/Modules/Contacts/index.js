import {Card, Avatar, Skeleton} from 'antd';

const {Meta} = Card;

const Contacts = () => {
    return (
    <>
    <Card style={{ width: 300, marginTop: 16 , padding: 10}} >
        <Skeleton>
        <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
            title="Card title"
            description="This is the description"
        />
        </Skeleton>
    </Card>
    </>
    )
}

export default Contacts;