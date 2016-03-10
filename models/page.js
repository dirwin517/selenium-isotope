/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports.Page = function Page(pageConf){

    if(!pageConf.models){
        throw new Error('A Page should have models, otherwise what are you testing?');
    }

    if(!pageConf.services){
        throw new Error('A Page should have services, otherwise how are you validating?');
    }

    var models = pageConf.models;
    var services = pageConf.services;

    function validateModelsServices(models, services){
        Object.keys(models).forEach(function(model){
            var found = false;
            Object.keys(services).forEach(function(svc){
                found = found || model === svc;
            });
            if(!found){
                throw new Error('For each Model there should be a corresponding Service');
            }
            if(pageConf.logger){
                pageConf.logger.verbose('found model and service for ' + model);
            }
        });
    }

    validateModelsServices(models, services);

    this.getModels = function getModels(){
        return models;
    };

    this.getModel = function getModel(name){
        return models[name];
    };

    this.getAttribute = function getAttribute(model, key){
        return models[model].getAttribute(key);
    };

    this.setAttribute = function setAttribute(model, key, value){
        return models[model].setAttribute(key, value);
    };

    this.getServices = function getServices(){
        return services;
    };

    this.serviceGet = function serviceGet(model, key){
        return services[model].get(key);
    };

    this.serviceSet = function serviceSet(model, key, value){
        return services[model].set(key, value);
    };

};