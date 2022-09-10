import { BotApi, BotMessage } from '../types';

export interface AddQuoteArgs {
  message: BotMessage;
  bot: BotApi;
  chatId: number;
}
