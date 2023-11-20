import { Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDetailLifeQuery } from '../../../api';

const LivesDetailsPage = () => {
    const { t } = useTranslation('lives');

    const { id } = useParams();

    const { data, loading } = useDetailLifeQuery({ variables: { lifeID: id } });

    if (loading) {
        return null;
    }

    // eslint-disable-next-line react/jsx-sort-props
    return (
        <Descriptions title={data.getLife.fullName}>
            <Descriptions.Item label={t('headers.id')}>{data.getLife.id}</Descriptions.Item>
            <Descriptions.Item label={t('headers.firstName')}>{data.getLife.firstName}</Descriptions.Item>
            <Descriptions.Item label={t('headers.lastName')}>{data.getLife.lastName}</Descriptions.Item>
            <Descriptions.Item label={t('headers.title')}>{data.getLife.title}</Descriptions.Item>
            <Descriptions.Item label={t('headers.description')}>{data.getLife.description}</Descriptions.Item>
            <Descriptions.Item label={t('headers.birthday')}>{data.getLife.birthday.toString()}</Descriptions.Item>
            <Descriptions.Item label={t('headers.hobbies')}>{data.getLife.hobbies.join(', ')}</Descriptions.Item>
        </Descriptions>
    );
};

export default LivesDetailsPage;
