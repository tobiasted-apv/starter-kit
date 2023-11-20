import { Table } from 'antd';
import { useGetLivesQuery } from '../../../api';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
        render: (text, record) => text.toString(),
    },
    {
        title: 'Hobbies',
        dataIndex: 'hobbies',
        key: 'hobbies',
    },
];

const ListLivesPage = () => {
    const mock = useGetLivesQuery();

    // eslint-disable-next-line react/jsx-sort-props
    return <Table dataSource={mock?.data?.listLives} columns={columns} />;
};

export default ListLivesPage;
