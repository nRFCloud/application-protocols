const fs = require('fs');
const path = require('path');
import { sync as globSync } from 'glob';
import AppProtocol from '../index';

const examples = globSync(
    path.join(path.resolve(__dirname, '..', 'examples'), '*', '*.json'),
);

examples.forEach(example => {
    const app = path.parse(example).name;
    describe(app, () => {
        const data = JSON.parse(fs.readFileSync(example, 'utf-8'));
        test(`${data.appId}: ${data.messageType} ${
            data.data ? JSON.stringify(data.data) : ''
        }`, () => expect(AppProtocol.isValidMessage(data)).toBe(true));
    });
});
