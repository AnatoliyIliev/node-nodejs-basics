import { argv } from 'node:process';

const parseArgs = () => {
    const result = [];

    for (let i = 2; i < argv.length; i += 1) {
        if (argv[i].includes('--')) {
            result.push(`${argv[i].slice(2)} is ${argv[i + 1]}`)
        }
    };

    console.log(result.join(', '));
};

parseArgs();