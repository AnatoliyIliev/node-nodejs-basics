import { env } from 'node:process';

const parseEnv = () => {

    const result = [];

    for (const key in env) {
        if (key.includes('RSS_')) {
            result.push(`${key}=${env[key]}`)
        }
    };
    
    console.log(result.join('; '));
};

parseEnv();