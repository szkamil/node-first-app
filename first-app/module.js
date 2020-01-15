const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('messageLogged', e => {
    console.log('Listener called', e);
} );



emitter.emit('messageLogged', {id: 1, url: 'my_url_fortest'});