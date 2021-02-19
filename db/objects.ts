import { ObjectSchema } from 'realm';
export class Todo {
    public _id: number = 0;
    public name: string = '';
    public status: number = 0;
    public created: Date = new Date();
    public static schema: ObjectSchema = {
        name: 'todos',
        primaryKey: '_id',
        properties: {
            _id: 'int',
            name: 'string',
            status: { type: 'int', default: 0 },
            created: { type: 'date', default: new Date() }
        }
    }

}