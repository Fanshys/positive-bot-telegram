import * as TelegramBotApi from 'node-telegram-bot-api';

export interface SendPositiveQuoteArgs {
  bot: TelegramBotApi;
  chatId: number;
  force?: boolean;
}
