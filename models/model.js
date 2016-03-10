/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Model = function Model(modelConf){

    if(!modelConf.attributes){
        throw new Error('Model should include Attributes');
    }

    var mapOfAttributes = modelConf.attributes;

    this.getAttribute = function getAttribute(key){
        return mapOfAttributes[key].getter();
    };

    this.setAttribute = function setAttribute(key, value){
        return mapOfAttributes[key].setter(key, value);
    };

    this.getModel = function getModel(){
        var model = {};
        Object.keys(mapOfAttributes).forEach((attribute) => {
            model[attribute] = this.getAttribute(attribute);
        });
        return model;
    };

    this.setModel = function setModel(obj){
        var model = {};
        Object.keys(obj).forEach((attribute) => {
            model[attribute] = this.setAttribute(attribute, obj[attribute]);
        });
        return model;
    };

};