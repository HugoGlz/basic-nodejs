const cp = require('child_process');

function execCommand(command){
    cp.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log('ERROR', err);
            return;
        }

        if (stdout) {
            console.log('stdout', stdout);
        }

        if (stderr) {
            console.log('stderr', stdout);
        }


    })
}

execCommand('ls -la');
execCommand('node hello.js');