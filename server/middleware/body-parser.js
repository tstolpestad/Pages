import bodyParser from '@amphibian/server-body-parser';
import server from '../server';

server.registerMiddleware(bodyParser);
