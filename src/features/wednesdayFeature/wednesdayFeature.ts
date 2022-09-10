import * as cron from 'node-cron';
import * as TelegramBotApi from 'node-telegram-bot-api';
import { wednesdayCron } from '../../constants/constants';
import { UsersModel } from '../../models/users';
import { sendPositiveQuote } from '../sendPositiveQuote';

export const wednesdayFeature = (bot: TelegramBotApi): void => {
  const sendMessage = async (chatId: number) => {
    const message = 'Ваша порция ежесредного позитива:';

    await bot.sendMessage(chatId, message);
    sendPositiveQuote({ bot, chatId, force: true });
  };

  cron.schedule(wednesdayCron, async () => {
    const users = await UsersModel.find();

    users.forEach((user) => sendMessage(user.id));
  }, false);

  return null;
};
