/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Navigator = function Navigator(navConf){

    if(!navConf.navigate){
        throw new Error('Navigator Must Contain navigate function');
    }

    this.navigate = function navigate(whereTo){
        navConf.navigate(whereTo);
    };
};