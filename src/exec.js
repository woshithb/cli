"use strict";
exports.__esModule = true;
var trunk_1 = require("@src/trunk");
var controllers_1 = require("@src/controllers");
var trunkPresenter = new trunk_1.TrunkPresenter({
    beans: [
        controllers_1.CmdController,
        controllers_1.EventController,
        controllers_1.NodeVersionController,
        controllers_1.ParseController
    ]
});
