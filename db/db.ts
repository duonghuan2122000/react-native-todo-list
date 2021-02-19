import {open, Configuration} from 'realm';
import {Todo} from './objects';
const config: Configuration = {
    schema: [Todo.schema],
    path: './db/data'
};

export default open(config);