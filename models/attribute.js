/**
 * Created by daniel.irwin on 3/9/16.
 */

module.exports.Attribute = function Attribute(attrConf){

    if(!attrConf.name){
        throw new Error('Attribute Must Have Name');
    }
    if(!attrConf.getter){
        throw new Error('Attribute Must Have Getter');
    }
    if(!attrConf.setter){
        throw new Error('Attribute Must Have Setter');
    }
    if(!attrConf.selector){
        throw new Error('Attribute Must Have Selector');
    }

    var storedValue;

    this.getName = function getName(){
        return attrConf.name;
    };

    this.getter = function getter(){
        return attrConf.getter(attrConf.selector());
    };

    this.setter = function setter(value){
        if(attrConf.auditor){
            attrConf.auditor.audit(attrConf.name, value);
        }
        return attrConf.setter(attrConf.selector(), value);
    };

    this.getStoredValue = function getStoredValue(){
        return storedValue;
    };
};