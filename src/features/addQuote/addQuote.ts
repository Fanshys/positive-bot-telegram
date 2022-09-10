import { sliceMessageCommand } from '../../helpers/sliceMessageCommand';
import { QuotesModel } from '../../models';
import { AddQuoteArgs } from './types';

export const addQuote = async ({
  message, bot, chatId,
}: AddQuoteArgs): Promise<void> => {
  const messageText = sliceMessageCommand(message);
  const text = messageText.split('@')[0];
  const author = messageText.split('@')[1];
  const quote = await QuotesModel.findOne({ text });

  if (quote) {
    await bot.sendMessage(chatId, 'Такая цитата уже добавлена.');
    return;
  }

  const newQuote = new QuotesModel({
    text,
    author,
  });

  await newQuote.save();
  bot.sendMessage(chatId, `Цитата автора ${author} успешно добавлена`);
};
