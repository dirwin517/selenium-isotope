/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.App = function App(appConfig){

    if(!appConfig.auditor){
        throw new Error('App must have an auditor');
    }

    var Context = require('./context').Context;

    this.auditor = appConfig.auditor;

    this.context = new Context(this.auditor);

    this.pages = appConfig.pages;

    this.getAttribute = function(page, model, key){
        return this.context.get(page + '.' + model + '.' + key);
    };

    this.setAttribute = function(page, model, key, value){
        return this.context.set(page + '.' + model + '.' + key, value);
    };

    this.serviceGet = function serviceGet(page, model, key){
        return this.pages[page].serviceGet(model, key);
    };

    this.serviceSet = function serviceSet(page, model, key, value){
        return this.pages[page].serviceSet(model, key, value);
    };

};