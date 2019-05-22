const fs = require('fs');
const path = require('path');
const { find } = require('find-in-files');
const ncp = require('ncp');

// These paths are relative to the project root
// Do not include leading or trailing slashes
// Do not use path.resolve and friends
const SITE_ROOT = 'static/semantic-ui';
const SEMANTIC_ROOT = 'node_modules/semantic-ui-less';

console.log('Running semantic-ui-setup script...');

// If the SITE_ROOT doesn't exist, copy the _site folder over
new Promise((resolve, reject) => {
  console.log('Checking', SITE_ROOT);
  fs.access(SITE_ROOT, fs.F_OK, (err) => {
    if (err) {
      if (err.code !== 'ENOENT') return reject(err);
      console.log('  Creating site root folder: ', SITE_ROOT);
      SITE_ROOT.split('/').reduce((parentDir, childDir) => {
        const curDir = path.resolve(parentDir, childDir);
        if (!fs.existsSync(curDir)) {
          fs.mkdirSync(curDir);
        }
        return curDir;
      }, process.cwd());
      return ncp(SEMANTIC_ROOT + '/_site', SITE_ROOT, (err) => {
        if (err) return reject(err);
        resolve();
      });
    }
    resolve();
  });
}).then(() => new Promise((resolve, reject) => {
  // Copy the theme.config.example to the site root
  const file = SITE_ROOT + '/theme.config';
  console.log('Checking', file);
  fs.access(file, fs.F_OK, (err) => {
    if (err) {
      if (err.code !== 'ENOENT') return reject(err);
      console.log('  Creating ' + file);
      let content = fs.readFileSync(SEMANTIC_ROOT + '/theme.config.example', 'utf8');
      // Update the @themesFolder and @siteFolder paths
      const depth = SITE_ROOT.split('/').length;
      const prefix = new Array(depth + 1).join('../');
      content = content.replace(/(@themesFolder\s*\:\s*['"]).*(['"])/, `$1${prefix + SEMANTIC_ROOT}/themes$2`)
      content = content.replace(/(@siteFolder\s*\:\s*['"]).*(['"])/, `$1${prefix + SITE_ROOT}$2`)
      fs.writeFileSync(file, content, 'utf8');
    }
    resolve();
  });
})).then(() => new Promise((resolve, reject) => {
  // Copy the theme.less to the site root
  const file = SITE_ROOT + '/theme.less';
  console.log('Checking', file);
  fs.access(file, fs.F_OK, (err) => {
    if (err) {
      if (err.code !== 'ENOENT') return reject(err);
      console.log('  Creating ' + file);
      const content = fs.readFileSync(SEMANTIC_ROOT + '/theme.less', 'utf8');
      fs.writeFileSync(file, content, 'utf8');
    }
    resolve();
  });
})).then(() => new Promise((resolve, reject) => {
  // All of the less files reference a theme.config file which does not
  // exist. So we create the file and use it as a proxy to our own.
  const file = SEMANTIC_ROOT + '/theme.config';
  console.log('Checking', file);
  fs.access(file, fs.F_OK, (err) => {
    if (err) {
      if (err.code !== 'ENOENT') return reject(err);
      console.log('  Creating theme.config file inside of semantic-ui-less');
      fs.writeFileSync(
        file,
        `@import "../../${SITE_ROOT}/theme.config";\n`,
        'utf8'
      );
    }
    resolve();
  });
})).then(() => {
  // finally, replace ../../themes with ../../../themes for all font paths
  const REG_FONT_PATH = /(@fontPath\s*\:\s*['"])(\.\.\/\.\.\/themes)/g;
  console.log('Checking font paths');
  return find('../../themes/', SEMANTIC_ROOT + '/themes', /\.(variables|overrides)$/).then(results => {
    for(let filename in results) {
      const content = fs.readFileSync(filename, 'utf8');
      if (REG_FONT_PATH.test(content)) {
        console.log('  Updating font paths inside', filename);
        const newContent = content.replace(
          REG_FONT_PATH,
          '$1../$2'
        );
        fs.writeFileSync(filename, newContent, 'utf8');
      }
    }
  })
}).catch(err => {
  console.log('Error setting up semantic-ui-less:', err);
});