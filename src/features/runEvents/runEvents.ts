import { botName, Commands } from '../../constants';
import { sendPositiveQuote } from '../sendPositiveQuote';
import { startBotFeature } from '../startBotFeature';
import { RunEventsArgs } from './types';

export const runEvents = async ({
  bot, chatId, message,
}: RunEventsArgs): Promise<void> => {
  const { text } = message;
  const { Quote, Start } = Commands;

  if (text.charAt(0) !== '/') return;

  switch (text) {
    /** Общие команды */
    case Start:
    case Start + botName:
      await startBotFeature({ bot, chatId, message });
      return;
    case Quote:
    case Quote + botName:
      await sendPositiveQuote({ bot, chatId });
      return;
    default:
      // eslint-disable-next-line no-console
      console.log('Not standard command');
  }
};
