/**
 * Created by daniel.irwin on 3/9/16.
 */
module.exports = function(){

    var Auditor = require('../models/auditor').Auditor;
    var auditor = new Auditor();

    var Page = require('../models/page').Page;

    var Model = require('../models/model').Model;
    var Attribute = require('../models/attribute').Attribute;

    var Service = require('../models/service').Service;

    var logElement = function(msg) { console.log('', msg ); };

    var Logger = require('../models/logger').Logger;

    var logger = new Logger({
        log : logElement,
        info : logElement,
        verbose : logElement,
        warn : logElement,
        error : logElement
    });

    var gremlinModel = new Model({
        attributes : {
            name : new Attribute({
                getter : function(){

                },
                setter : function(){

                },
                selector : function(){

                },
                name : 'name'
            }),
            part : new Attribute({
                getter : function(){

                },
                setter : function(){

                },
                selector : function(){

                },
                name : 'part'
            })
        }
    });

    var gremlinService = new Service({
        get : function(){

        },
        set : function(){

        }
    });

    var pages = {
        p1 : new Page({
            logger : logger,
            models : {
                gremlin : gremlinModel
            },
            services : {
                gremlin : gremlinService
            }
        }),
        p2 : new Page({
            models : {

            },
            services : {

            }
        })
    };

    var app = require('../models/app').App({
        auditor : auditor,
        pages : pages
    });




    return app;
};