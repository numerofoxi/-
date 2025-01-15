import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';

// Configurazioni iniziali
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, author } = require(join(__dirname, './package.json'));
const rl = createInterface(process.stdin, process.stdout);

// Funzione per messaggi animati
const animatedMessage = (text, font = 'block', colors = ['cyan', 'blue'], align = 'center') => {
  cfonts.say(text, {
    font,
    align,
    gradient: colors,
    transitionGradient: true,
  });
};


console.clear();
animatedMessage('333\nBot', 'block', ['magenta', 'cyan']);
console.log('\n🔥 Sistema in avvio...');
console.log('⏳ Preparazione dei moduli...\n');

// Variabile per controllo dello stato
let isRunning = false;

/**
 * Avvia un file JavaScript
 * @param {String} file - Percorso del file da avviare.
 */
function start(file) {
  if (isRunning) return;
  isRunning = true;

  const args = [join(__dirname, file), ...process.argv.slice(2)];

  animatedMessage('Ediz by Gabs', 'console', ['yellow', 'green']);
  console.log('🚀 Inizializzazione completata.\n');

  // Configurazione del cluster
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  });

  let processInstance = fork();

  processInstance.on('message', (data) => {
    console.log('[📩 RICEVUTO]', data);
    switch (data) {
      case 'reset':
        processInstance.kill();
        isRunning = false;
        start(file);
        break;
      case 'uptime':
        processInstance.send(process.uptime());
        break;
    }
  });

  processInstance.on('exit', (_, code) => {
    isRunning = false;
    console.error('❌ Errore inatteso:', code);

    if (code !== 0) {
      watchFile(args[0], () => {
        unwatchFile(args[0]);
        start(file);
      });
    }
  });

  // Gestione input da console
  let opts = new Object(
    yargs(process.argv.slice(2)).exitProcess(false).parse()
  );
  if (!opts['test']) {
    if (!rl.listenerCount('line')) {
      rl.on('line', (line) => {
        processInstance.emit('message', line.trim());
      });
    }
  }
}

// Avvio del file principale
start('main.js');