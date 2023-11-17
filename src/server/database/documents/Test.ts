import { ObjectId } from 'mongodb';

export type Test = {
    _id: ObjectId;
    testField1: String;
    testField2: Date;
    testField3: string[];
    testField4: string;
};
