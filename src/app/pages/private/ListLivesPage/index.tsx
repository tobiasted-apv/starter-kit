import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useGetLivesQuery } from '../../../api';

const ListLivesPage = () => {
    const { t } = useTranslation('lives');

    const mock = useGetLivesQuery();

    const columns = [
        {
            title: t('headers.id'),
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => <Link to={`/private/lives/${record.id}`}>{text}</Link>,
        },
        {
            title: t('headers.firstName'),
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: t('headers.lastName'),
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: t('headers.title'),
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: t('headers.description'),
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: t('headers.birthday'),
            dataIndex: 'birthday',
            key: 'birthday',
            render: text => text.toString(),
        },
        {
            title: t('headers.hobbies'),
            dataIndex: 'hobbies',
            key: 'hobbies',
            render: hobbies => hobbies.join(', '),
        },
    ];

    // eslint-disable-next-line react/jsx-sort-props
    return <Table dataSource={mock?.data?.listLives} columns={columns} />;
};

export default ListLivesPage;
