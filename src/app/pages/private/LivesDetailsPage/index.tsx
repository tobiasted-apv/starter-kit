import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useDetailLifeQuery } from '../../../api';

const LivesDetailsPage = () => {
    const { id } = useParams();

    const { data, loading } = useDetailLifeQuery({ variables: { lifeID: id } });

    if (loading) {
        return null;
    }

    // eslint-disable-next-line react/jsx-sort-props
    return (
        <Descriptions title={data?.getLife.fullName}>
            <Descriptions.Item label="First Name">{data.getLife.firstName}</Descriptions.Item>
            <Descriptions.Item label="Last Name">{data.getLife.lastName}</Descriptions.Item>
            <Descriptions.Item label="Title">{data.getLife.title}</Descriptions.Item>
            <Descriptions.Item label="Description">{data.getLife.description}</Descriptions.Item>
            <Descriptions.Item label="Birthday">{data.getLife.birthday.toString()}</Descriptions.Item>
            <Descriptions.Item label="Hobbies">{data.getLife.hobbies}</Descriptions.Item>
        </Descriptions>
    );
};

export default LivesDetailsPage;
