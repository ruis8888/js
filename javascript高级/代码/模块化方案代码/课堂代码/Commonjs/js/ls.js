
    //实现列表功能
    function list(){
        var common = require("./common/common.js")
        console.log("commonjs -  ls list function,common=" + common())
    }

    //实现添加功能
    function add(){
        var common = require("./common/common.js")
        console.log("commonjs -  ls add function,common=" + common())
    }
    module.exports = {
        list:list,
        add:add
    }
