import program = require('commander');

program
  .version('0.2.7')
  .usage('new <name> [property:type...]')
  .command('new <name> [property:type...]', 'generate a Web Component');

program.parse(process.argv);
