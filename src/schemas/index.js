import { schema } from 'normalizr';

const userSchema = new schema.Entity('users', {}, {
  idAttribute: user => user.id,
});

const Schemas = {
  USER: userSchema,
  USER_ARRAY: [userSchema],
};

export default Schemas;
