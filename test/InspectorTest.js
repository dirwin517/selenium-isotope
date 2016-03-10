/**
 * Created by daniel.irwin on 3/9/16.
 */
describe('Inspector Test', function(){

    it('Parse class, id, name', function(){
        global.window = {
            document : '<html><div id="test"></div><span class="fubar"></span></html>'
        };
        var Inspector = require('../models/inspector').Inspector;

        var inspector = new Inspector({
                executeScript : function(callback){
                    return callback();
                },
                findElement : function(locator){
                    return {
                        getText : function(){
                            return locator;
                        },
                        getValue : function(){
                            return locator;
                        }
                    }
                }
            },
            {
                class : function(){},
                id : function(){},
                name : function(){}
            });

        console.log('inspected : ', JSON.stringify(inspector.inspect(), null, 3));
    });
});