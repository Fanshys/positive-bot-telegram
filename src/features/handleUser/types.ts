import * as TelegramBotApi from 'node-telegram-bot-api';

export interface HandleUserArgs {
  bot: TelegramBotApi,
  message: TelegramBotApi.Message
}
