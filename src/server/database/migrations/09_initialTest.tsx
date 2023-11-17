import { DatabaseContext } from '../instance';

export default {
    identifier: '09_initialTest',

    async up({ regular: { db } }: DatabaseContext): Promise<void> {
        await db.collection('tests').createIndex({ testField1: 1, testField4: 1 }, { unique: true });
    },
};
