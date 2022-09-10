import { Commands } from './commands';

const { Start, Quote } = Commands;

export const commandPalette = [
  { command: Start, description: 'Старт бота' },
  { command: Quote, description: 'Получить цитатку' },
];
