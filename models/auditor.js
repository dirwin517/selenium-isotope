/**
 * Created by daniel.irwin on 3/9/16.
 */

module.exports.Auditor = function Auditor(){

    var log = [];

    var firstValueMap = {};
    var prevValueMap = {};
    var currentValueMap = {};

    /**
     * Shitty Copy Function
     * @param value
     * @returns {*}
     */
    function clone(value){
        return JSON.parse(JSON.stringify(value));
    }

    this.getCurrentValue = function getCurrentValue(key){
        return currentValueMap[key];
    };

    this.getLastValue = function getLastValue(key){
        return prevValueMap[key];
    };

    this.getFirstValue = function getFirstValue(key){
        return firstValueMap[key];
    };

    this.getLog = function(){
      return log;
    };

    this.audit = function audit(key, value){

        if(firstValueMap[key] !== undefined){
            firstValueMap[key] = clone(value);
        }

        prevValueMap[key] = clone(currentValueMap[key]);

        currentValueMap[key] = clone(value);

        log.push({
            ts : new Date().getTime(),
            key : key,
            value : value
        });
    };
};