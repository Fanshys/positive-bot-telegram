import TelegramBot = require('node-telegram-bot-api');
import { SendPositiveQuoteArgs } from './types';
import { formatDate } from '../../helpers';
import { QuotesModel } from '../../models';

const cache = {};

export const sendPositiveQuote = async ({ bot, chatId, force }: SendPositiveQuoteArgs): Promise<TelegramBot.Message> => {
  const id = `${chatId}-${formatDate(new Date())}`;

  if (cache[id] && !force) {
    return bot.sendMessage(chatId, 'Получать цитаты можно только раз в день 😡');
  }

  cache[id] = true;

  const quotes = await QuotesModel.find();
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  return bot.sendMessage(chatId, `${quote.text}\n\n<i>${quote.author}</i>`, {
    parse_mode: 'HTML',
  });
};
