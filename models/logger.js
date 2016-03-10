/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Logger = function Logger(logger){
    this.log = logger.log;
    this.info = logger.info;
    this.error = logger.error;
    this.warn = logger.warn;
    this.verbose = logger.verbose;
};