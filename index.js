const TelegramBot = require('node-telegram-bot-api');

const token = '7987954302:AAFG1Tt9GwcPMl11pi3TVBUo1AqN-pdoyuU';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    'Привет! Это калькулятор фурнитурных тяг KNG. Нажми кнопку ниже, чтобы открыть мини-приложение.',
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: 'Открыть калькулятор',
              web_app: {
                                                    url: 'https://fomaed.github.io/kng-tyagi/app.html'
              }
            }
          ]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    }
  );
});

console.log('Bot started');
