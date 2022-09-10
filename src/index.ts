import * as TelegramBotApi from 'node-telegram-bot-api';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { runEvents } from './features';
import { commandPalette } from './constants/commandPalette';
import { runScheduledEvents } from './features/runScheduledEvents';
import { handleUser } from './features/handleUser';
import { runAdminEvents } from './features/runAdminEvents';

config();

connect(process.env.MONGO_URL).then(() => console.log('Database connected!')).catch((err) => console.warn('Database connection error!', err));

const startBot = async (): Promise<void> => {
  const botToken = process.env.BOT_TOKEN;
  const bot = new TelegramBotApi(botToken, { polling: true });

  // Применение списка команд
  await bot.setMyCommands(commandPalette);

  // Обработка сообщений
  await bot.on('message', async (message) => {
    console.log(message);

    await handleUser({ bot, message });
    await runEvents({ bot, chatId: message.chat.id, message });
    await runAdminEvents({ bot, chatId: message.chat.id, message });
    return null;
  });

  runScheduledEvents(bot);
};

startBot();
