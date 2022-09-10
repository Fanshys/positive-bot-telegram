/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { UsersModel } from '../../models';
import { BotMessage } from '../types';

export const registerUser = async (message: BotMessage) => {
  const {
    username, first_name, last_name, id,
  } = message.from;

  const user = new UsersModel({
    firstName: first_name,
    lastName: last_name,
    username,
    id,
  });

  return user.save();
};
