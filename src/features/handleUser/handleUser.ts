/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { UsersModel } from '../../models/users';
import { HandleUserArgs } from './types';

export const handleUser = async ({ message }: HandleUserArgs): Promise<void> => {
  const {
    username, first_name, last_name, id,
  } = message.from;
  const user = await UsersModel.findOne({ id });

  if (user) return;

  const newUser = new UsersModel({
    firstName: first_name,
    lastName: last_name,
    username,
    id,
  });

  await newUser.save();
};
