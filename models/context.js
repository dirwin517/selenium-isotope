/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Context = function Context(auditor){

    var context = {};

    this.set = function set(key, value){
        auditor.audit(key, value);
        context[key] = value;
    };

    this.get = function get(key){
        return context[key];
    };

};