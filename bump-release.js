const fs = require('fs');
const path = require('path');
const eitriAppConf = require('./eitri-app.conf.js');

const eitriVersion = eitriAppConf.version;

const newEitriVersion = eitriVersion.split('.').map((v, i) => {
    if (i === 2) {
        return parseInt(v) + 1;
    }
    return v;
}
).join('.');
console.log(`Bumping eitri version from ${eitriVersion} to ${newEitriVersion}`);

eitriAppConf.version = newEitriVersion;

fs.writeFileSync(path.join(__dirname, 'eitri-app.conf.js'), "module.exports = " + JSON.stringify(eitriAppConf, null, 2));

console.log('Version bumped successfully');