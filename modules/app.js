// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";
import * as constants from './constants.js'
import logger from "./logger/index.js";

// console.log(logger);
console.log(constants);


logger('Test message...', constants.TYPE_LOG)
