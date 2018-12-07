var Raven = require('raven');
Raven.config('://c3e048112cb3479d8a57ed0d481c0615:15df9d593f094e2d8b7f7db57c4195c9@localhost:9000/3').install();

try {
    doSomething(a[0]);
    console.log('wrong!!!')
} catch (e) {
    Raven.captureException(e);
}
