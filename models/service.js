/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Service = function Service(svcConf){

    if(!svcConf.set){
        throw new Error('Service should have set method (can do nothing if necessary)');
    }
    if(!svcConf.get){
        throw new Error('Service should have get method (can do nothing if necessary)');
    }

    this.set = function set(key, value){
        return svcConf.set(key, value);
    };

    this.get = function get(key){
        return svcConf.get(key);
    }
};