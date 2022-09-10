import { Message } from 'node-telegram-bot-api';
import { UsersModel } from '../../models';
import { arleadyRegisteredMessage, successMessage } from './constants';
import { registerUser } from './helpers';
import { StartBotFeatureArgs } from './types';

export const startBotFeature = async ({ bot, chatId, message }: StartBotFeatureArgs): Promise<Message> => {
  try {
    const user = await UsersModel.findOne({ id: message.from.id });

    if (user) {
      return await bot.sendMessage(chatId, arleadyRegisteredMessage);
    }

    await registerUser(message);

    return await bot.sendMessage(chatId, successMessage);
  } catch (error) {
    return bot.sendMessage(chatId, 'Произошла ошибка');
  }
};
