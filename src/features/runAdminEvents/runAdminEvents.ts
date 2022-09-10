import { AdminCommands } from '../../constants';
import { UsersModel } from '../../models';
import { addQuote } from '../addQuote';
import { RunAdminEventsArgs } from './types';

export const runAdminEvents = async ({
  bot, chatId, message,
}: RunAdminEventsArgs): Promise<void> => {
  const { text } = message;
  const { AddQuote } = AdminCommands;
  const user = await UsersModel.findOne({ username: message.from.username });

  if (text.charAt(0) !== '/') return;

  if (!user.isAdmin) {
    bot.sendMessage(chatId, 'У вас нет прав на добавление.');
    return;
  }

  if (text.includes(AddQuote)) {
    await addQuote({ bot, chatId, message });
  }
};
