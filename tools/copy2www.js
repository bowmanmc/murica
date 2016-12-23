const copydir = require('copy-dir');
const mkdirp = require('mkdirp');

const OUT_DIR = 'www/americons';
const folders = ['fonts', 'sass', 'svg'];

mkdirp.sync(OUT_DIR);
folders.forEach(folder => {
    console.log(`Copying ${folder} to ${OUT_DIR}/${folder}`)
    mkdirp.sync(`${OUT_DIR}/${folder}`);
    copydir.sync(folder, `${OUT_DIR}/${folder}`);
});
