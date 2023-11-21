import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['getLife'] = async (root, args) => {
    const { collections } = await getDatabaseContext();

    return collections.lives.findOne({ _id: args.id });
};

export default query;
