import {Card, Avatar, Skeleton} from 'antd';

const {Meta} = Card;


const Contacts = () => {
    return (
        // TODO: Implement Table View ? Or some Container that allows cards to be displayed
        // TODO: Implement a Search function.
    <>
    <Card style={{ width: 300, marginTop: 16 , padding: 10}} >
        <Skeleton loading={false} avatar active>
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
