import { ObjectId } from 'mongodb';
import { Life, getDatabaseContext } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (root, { life }) => {
    const { collections } = await getDatabaseContext();
    const data: Life = {
        _id: new ObjectId(),
        ...life,
    };

    await collections.lives.insertOne(data);

    return data;
};

export default mutation;
