import { Message } from 'node-telegram-bot-api';
import { UsersModel } from '../../models';
import { arleadyRegisteredMessage, successMessage } from './constants';
import { registerUser } from './helpers';
import { StartBotFeatureArgs } from './types';

export const startBotFeature = async ({ bot, chatId, message }: StartBotFeatureArgs): Promise<Message> => {
  const user = await UsersModel.findOne({ id: message.from.id });

  if (user) {
    return bot.sendMessage(chatId, arleadyRegisteredMessage);
  }

  await registerUser(message);

  return bot.sendMessage(chatId, successMessage);
};
