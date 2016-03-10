/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Inspector = function Inspector(driver, By){
    this.inspect = function inspect(){
        var document = driver.executeScript(function(){
            return window.document;
        });

        var htmlParser = require('html-parser');

        var classes = [];
        var ids = [];
        var names = [];

        htmlParser.parse(document,{
            attribute : function(key, value){
                switch(key){
                    case 'class':
                        classes.push({
                            clazz : value,
                            value : driver.findElement(By.class(value)).getText()
                        });
                        break;
                    case 'id':
                        ids.push({
                            clazz : value,
                            value : driver.findElement(By.id(value)).getText()
                        });
                        break;
                    case 'name':
                        names.push({
                            clazz : value,
                            value : driver.findElement(By.name(value)).getText()
                        });
                        break;
                    default :
                        break;
                }
            }
        });

        return {
            classes : classes,
            ids : ids,
            names : names
        };
    };
};