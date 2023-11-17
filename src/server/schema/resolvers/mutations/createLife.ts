import { ObjectId } from 'mongodb';
import { Life, getDatabaseContext } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (root, args) => {
    const { collections } = await getDatabaseContext();
    const life: Life = {
        _id: new ObjectId(),
        ...args,
    };

    await collections.lives.insertOne(life);

    return life;
};

export default mutation;
