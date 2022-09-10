import * as TelegramBotApi from 'node-telegram-bot-api';
import { wednesdayFeature } from '../wednesdayFeature';

export const runScheduledEvents = async (bot: TelegramBotApi): Promise<void> => {
  wednesdayFeature(bot);
};
