import { Message } from 'node-telegram-bot-api';
import { FeatureInterface } from '../types';

export const startBotFeature = ({ bot, chatId }: FeatureInterface): Promise<Message> => {
  const message = 'Вы подписались на самого позитивного бота 😎';

  return bot.sendMessage(chatId, message);
};
