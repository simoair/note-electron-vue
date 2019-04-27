/*
    说明: 请勿修改 header.js 和 footer.js
    用途: 自动拼接暴露方式
    命令: grunt release 中 concat
*/
(function(global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        var tempIMLib = factory();
        var tempClient = tempIMLib.RongIMClient;
        var isExists = (!!global.RongIMLib);
        if (isExists) {
            var currentClient = RongIMLib.RongIMClient || {};
            for(var key in currentClient){
                tempClient[key] = currentClient[key];
            }
        }
        global.RongIMLib = tempIMLib;
        global.RongIMClient = tempClient;
    }
})(window, function(){

var Polling = {
        SetUserStatusInput: function(){
            var a = {};
            this.setStatus = function(b){
                a.status = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        SetUserStatusOutput: function(){
            var a = {};
            this.setNothing = function(b){
                a.nothing = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        GetUserStatusInput: function(){
            var a = {};
            this.setNothing = function(b){
                a.nothing = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },

        GetUserStatusOutput: function(){
            var a = {};
            this.setStatus = function(b){
                a.status = b;
            };
            this.setSubUserId = function(b){
                a.subUserId = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        VoipDynamicInput: function(){
            var a = {};
            this.setEngineType = function(b){
                a.engineType = b;
            };
            this.setChannelName = function(b){
                a.channelName = b;
            };
            this.setChannelExtra = function(b){
                a.channelExtra = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        VoipDynamicOutput: function(){
            var a = {};
            this.setDynamicKey = function(b){
                a.dynamicKey = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        SubUserStatusInput: function(){
            var a = {};
            this.setUserid = function(b){
                a.userid = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        SubUserStatusOutput: function(){
            var a = {};
            this.setNothing = function(b){
               a.nothing = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        CleanHisMsgInput: function(){
            var a = {};
            this.setTargetId = function(b){
                a.targetId = b;
            };
            this.setDataTime = function(b){
                a.dataTime = b;
            };
            this.setConversationType = function(b){
                a.conversationType = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        DeleteMsgInput:function(){
         var a = {};
         this.setType = function(b){
           a.type = b;
         };
         this.setConversationId = function(b){
           a.conversationId = b;
         };
         this.setMsgs = function(b){
           a.msgs = b;
         };
         this.toArrayBuffer = function () {
             return a;
         }
        },
        DeleteMsg:function(){
          var a = {};
          this.setMsgId = function(b){
            a.msgId = b;
          };
          this.setMsgDataTime = function(b){
            a.msgDataTime = b;
          };
          this.setDirect = function(b){
            a.direct = b;
          };
          this.toArrayBuffer = function () {
              return a;
          }
        },
        DeleteMsgOutput:function(){
         var a = {};
         this.setNothing = function(b){
           a.nothing = b;
         };
         this.toArrayBuffer = function () {
             return a;
         }
        },
        SearchMpInput:function(){
            var a = {};
            this.setType = function (b) {
                a.type = b;
            };
            this.setId = function (b) {
                a.id = b;
            };
            this.toArrayBuffer = function () {
                return a;
            }
        },
        SearchMpOutput:function(){
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b;
            };
            this.setInfo = function (b) {
                a.info = b;
            };
            this.toArrayBuffer = function () {
                return a;
            }
        },
        MpInfo:function(){
            var a = {};
            this.setMpid = function(b){
                a.mpid = b;
            };
            this.setName = function(b){
                a.name = b;
            };
            this.setType = function(b){
                a.type = b;
            };
            this.setTime = function(b){
                a.time = b;
            };
            this.setPortraitUri = function(b){
                a.portraitUrl = b;
            };
            this.setExtra = function(b){
                a.extra = b;
            };
            this.toArrayBuffer = function () {
                return a;
            }
        },
        PullMpInput:function(){
            var a = {};
            this.setMpid = function(b){
                a.mpid = b;
            };
            this.setTime = function(b){
                a.time = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        PullMpOutput:function(){
            var a = {};
            this.setStatus = function(b){
                a.status = b;
            }
            this.setInfo = function(b){
                a.info = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        MPFollowInput:function(){
            var a = {};
            this.setId = function(b){
                a.id = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        MPFollowOutput:function(){
            var a = {};
            this.setNothing = function(b){
                a.nothing = b;
            };
            this.setInfo = function(b){
                a.info = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        NotifyMsg: function () {
            var a = {};
            this.setType = function (b) {
                a.type = b;
            };
            this.setTime = function (b) {
                a.time = b;
            };
            this.setChrmId = function(b){
                a.chrmId = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        SyncRequestMsg: function () {
            var a = {};
            this.setSyncTime = function (b) {
                a.syncTime = b || 0;
            };
            this.setIspolling = function (b) {
                a.ispolling = !!b;
            };
            this.setIsweb = function (b) {
                a.isweb = !!b;
            };
            this.setIsPullSend = function (b) {
                a.isPullSend = !!b;
            };
            this.setSendBoxSyncTime = function (b) {
                a.sendBoxSyncTime = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        UpStreamMessage: function () {
            var a = {};
            this.setSessionId = function (b) {
                a.sessionId = b
            };
            this.setClassname = function (b) {
                a.classname = b
            };
            this.setContent = function (b) {
                if (b) a.content = b;
            };
            this.setPushText = function (b) {
                a.pushText = b
            };
            this.setUserId = function(b){
                a.userId = b;
            };
            this.setAppData = function(b){
                a.appData = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        DownStreamMessages: function () {
            var a = {};
            this.setList = function (b) {
                a.list = b
            };
            this.setSyncTime = function (b) {
                a.syncTime = b;
            };
            this.setFinished = function(b){
                a.finished = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        DownStreamMessage: function () {
            var a = {};
            this.setFromUserId = function (b) {
                a.fromUserId = b
            };
            this.setType = function (b) {
                a.type = b
            };
            this.setGroupId = function (b) {
                a.groupId = b
            };
            this.setClassname = function (b) {
                a.classname = b
            };
            this.setContent = function (b) {
                if (b)
                    a.content = b
            };
            this.setDataTime = function (b) {
                a.dataTime = b;
            };
            this.setStatus = function (b) {
                a.status = b;
            };
            this.setMsgId = function (b) {
                a.msgId = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        CreateDiscussionInput: function () {
            var a = {};
            this.setName = function (b) {
                a.name = b
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        CreateDiscussionOutput: function () {
            var a = {};
            this.setId = function (b) {
                a.id = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        ChannelInvitationInput: function () {
            var a = {};
            this.setUsers = function (b) {
                a.users = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        LeaveChannelInput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        QueryChatroomInfoInput:function(){
            var a = {};
            this.setCount = function (b) {
                a.count = b;
            };
            this.setOrder = function (b) {
                a.order = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        QueryChatroomInfoOutput:function(){
            var a = {};
            this.setUserTotalNums = function (b) {
                a.userTotalNums = b;
            };
            this.setUserInfos = function (b) {
                a.userInfos = b;
            };
            this.toArrayBuffer = function () {
                return a;
            };
        },
        ChannelEvictionInput: function () {
            var a = {};
            this.setUser = function (b) {
                a.user = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        RenameChannelInput: function () {
            var a = {};
            this.setName = function (b) {
                a.name = b
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        ChannelInfoInput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        ChannelInfoOutput: function () {
            var a = {};
            this.setType = function (b) {
                a.type = b
            };
            this.setChannelId = function (b) {
                a.channelId = b
            };
            this.setChannelName = function (b) {
                a.channelName = b
            };
            this.setAdminUserId = function (b) {
                a.adminUserId = b
            };
            this.setFirstTenUserIds = function (b) {
                a.firstTenUserIds = b
            };
            this.setOpenStatus = function (b) {
                a.openStatus = b
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        ChannelInfosInput: function () {
            var a = {};
            this.setPage = function (b) {
                a.page = b
            };
            this.setNumber = function (b) {
                a.number = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        ChannelInfosOutput: function () {
            var a = {};
            this.setChannels = function (b) {
                a.channels = b
            };
            this.setTotal = function (b) {
                a.total = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        MemberInfo: function () {
            var a = {};
            this.setUserId = function (b) {
                a.userId = b
            };
            this.setUserName = function (b) {
                a.userName = b
            };
            this.setUserPortrait = function (b) {
                a.userPortrait = b
            };
            this.setExtension = function (b) {
                a.extension = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupMembersInput: function () {
            var a = {};
            this.setPage = function (b) {
                a.page = b
            };
            this.setNumber = function (b) {
                a.number = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupMembersOutput: function () {
            var a = {};
            this.setMembers = function (b) {
                a.members = b
            };
            this.setTotal = function (b) {
                a.total = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GetUserInfoInput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GetUserInfoOutput: function () {
            var a = {};
            this.setUserId = function (b) {
                a.userId = b
            };
            this.setUserName = function (b) {
                a.userName = b
            };
            this.setUserPortrait = function (b) {
                a.userPortrait = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GetSessionIdInput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GetSessionIdOutput: function () {
            var a = {};
            this.setSessionId = function (b) {
                a.sessionId = b
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GetQNupTokenInput: function () {
            var a = {};
            this.setType = function (b) {
                a.type = b;
            }
            this.toArrayBuffer = function () {
                return a
            }
        },
        GetQNupTokenOutput: function () {
            var a = {};
            this.setDeadline = function (b) {
                a.deadline = b
            };
            this.setToken = function (b) {
                a.token = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        GetQNdownloadUrlInput: function () {
            var a = {};
            this.setType = function (b) {
                a.type = b;
            };
            this.setKey = function (b) {
                a.key = b;
            };
            this.setFileName = function(b){
                a.fileName = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        GetQNdownloadUrlOutput: function () {
            var a = {};
            this.setDownloadUrl = function (b) {
                a.downloadUrl = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        Add2BlackListInput: function () {
            var a = {};
            this.setUserId = function (b) {
                a.userId = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        RemoveFromBlackListInput: function () {
            var a = {};
            this.setUserId = function (b) {
                a.userId = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        QueryBlackListInput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        QueryBlackListOutput: function () {
            var a = {};
            this.setUserIds = function (b) {
                a.userIds = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        BlackListStatusInput: function () {
            var a = {};
            this.setUserId = function (b) {
                a.userId = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        BlockPushInput: function () {
            var a = {};
            this.setBlockeeId = function (b) {
                a.blockeeId = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        ModifyPermissionInput: function () {
            var a = {};
            this.setOpenStatus = function (b) {
                a.openStatus = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupInput: function () {
            var a = {};
            this.setGroupInfo = function (b) {
                for (var i = 0, arr = []; i < b.length; i++) {
                    arr.push({id: b[i].getContent().id, name: b[i].getContent().name})
                }
                a.groupInfo = arr;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupOutput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupInfo: function () {
            var a = {};
            this.setId = function (b) {
                a.id = b;
            };
            this.setName = function (b) {
                a.name = b;
            };
            this.getContent = function () {
                return a;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupHashInput: function () {
            var a = {};
            this.setUserId = function (b) {
                a.userId = b;
            };
            this.setGroupHashCode = function (b) {
                a.groupHashCode = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        GroupHashOutput: function () {
            var a = {};
            this.setResult = function (b) {
                a.result = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        ChrmInput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        ChrmOutput: function () {
            var a = {};
            this.setNothing = function (b) {
                a.nothing = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        ChrmPullMsg: function () {
            var a = {};
            this.setSyncTime = function (b) {
                a.syncTime = b
            };
            this.setCount = function (b) {
                a.count = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        RelationsInput: function () {
            var a = {};
            this.setType = function (b) {
                a.type = b;
            };
            this.setMsg = function(b){
                a.msg = b;
            };
            this.setCount = function(b){
              a.count = b;
            };
            this.toArrayBuffer = function () {
                return a
            };
        },
        RelationsOutput: function () {
            var a = {};
            this.setInfo = function (b) {
                a.info = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        RelationInfo: function () {
            var a = {};
            this.setType = function (b) {
                a.type = b;
            };
            this.setUserId = function (b) {
                a.userId = b;
            };
            this.setMsg = function(b){
                a.msg = b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        HistoryMessageInput: function () {
            var a={};
            this.setTargetId=function(b){
                a.targetId=b;
            };
            this.setDataTime=function(b){
                a.dataTime=b;
            };
            this.setSize=function(b){
                a.size=b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        HistoryMessagesOuput: function () {
            var a={};
            this.setList=function(b){
                a.list=b;
            };
            this.setSyncTime=function(b){
                a.syncTime=b;
            };
            this.setHasMsg=function(b){
                a.hasMsg=b;
            };
            this.toArrayBuffer = function () {
                return a
            }
        },
        HistoryMsgInput: function(){
            var a = {};
            this.setTargetId = function(b){
                a.targetId = b;
            };
            this.setTime = function(b){
                a.time = b;
            };
            this.setCount = function(b){
                a.count = b;
            };
            this.setOrder = function(b){
                a.order = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        },
        HistoryMsgOuput: function(){
            var a = {};
            this.setList = function(b){
                a.list = b;
            };
            this.setSyncTime = function(b){
                a.syncTime = b;
            };
            this.setHasMsg = function(b){
                a.hasMsg = b;
            };
            this.toArrayBuffer = function(){
                return a;
            };
        }
    };
    for (var f in Polling) {
        Polling[f].decode = function (b) {
            var back = {}, val = JSON.parse(b) || eval("(" + b + ")");
            for (var i in val) {
                back[i]=val[i];
                back["get"+ i.charAt(0).toUpperCase()+i.slice(1)]=function(){
                    return val[i];
                }
            }
            return back;
        }
    }

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*jslint bitwise: true */
/*global unescape, define, module */

var md5 = (function () {
    'use strict';

    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << (len % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var i, olda, oldb, oldc, oldd,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }

    function md5(string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            }
            return raw_md5(string);
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        }
        return raw_hmac_md5(key, string);
    }
    return md5;
}());

var RongIMLib;
(function (RongIMLib) {
    (function (MentionedType) {
        MentionedType[MentionedType["ALL"] = 1] = "ALL";
        MentionedType[MentionedType["PART"] = 2] = "PART";
    })(RongIMLib.MentionedType || (RongIMLib.MentionedType = {}));
    var MentionedType = RongIMLib.MentionedType;
    (function (MethodType) {
        MethodType[MethodType["CUSTOMER_SERVICE"] = 1] = "CUSTOMER_SERVICE";
        MethodType[MethodType["RECALL"] = 2] = "RECALL";
    })(RongIMLib.MethodType || (RongIMLib.MethodType = {}));
    var MethodType = RongIMLib.MethodType;
    (function (BlacklistStatus) {
        /**
         * 在黑名单中。
         */
        BlacklistStatus[BlacklistStatus["IN_BLACK_LIST"] = 0] = "IN_BLACK_LIST";
        /**
         * 不在黑名单中。
         */
        BlacklistStatus[BlacklistStatus["NOT_IN_BLACK_LIST"] = 1] = "NOT_IN_BLACK_LIST";
    })(RongIMLib.BlacklistStatus || (RongIMLib.BlacklistStatus = {}));
    var BlacklistStatus = RongIMLib.BlacklistStatus;
    (function (ConnectionChannel) {
        ConnectionChannel[ConnectionChannel["XHR_POLLING"] = 0] = "XHR_POLLING";
        ConnectionChannel[ConnectionChannel["WEBSOCKET"] = 1] = "WEBSOCKET";
        //外部调用
        ConnectionChannel[ConnectionChannel["HTTP"] = 0] = "HTTP";
        //外部调用
        ConnectionChannel[ConnectionChannel["HTTPS"] = 1] = "HTTPS";
    })(RongIMLib.ConnectionChannel || (RongIMLib.ConnectionChannel = {}));
    var ConnectionChannel = RongIMLib.ConnectionChannel;
    (function (CustomerType) {
        CustomerType[CustomerType["ONLY_ROBOT"] = 1] = "ONLY_ROBOT";
        CustomerType[CustomerType["ONLY_HUMAN"] = 2] = "ONLY_HUMAN";
        CustomerType[CustomerType["ROBOT_FIRST"] = 3] = "ROBOT_FIRST";
        CustomerType[CustomerType["HUMAN_FIRST"] = 4] = "HUMAN_FIRST";
    })(RongIMLib.CustomerType || (RongIMLib.CustomerType = {}));
    var CustomerType = RongIMLib.CustomerType;
    (function (GetChatRoomType) {
        GetChatRoomType[GetChatRoomType["NONE"] = 0] = "NONE";
        GetChatRoomType[GetChatRoomType["SQQUENCE"] = 1] = "SQQUENCE";
        GetChatRoomType[GetChatRoomType["REVERSE"] = 2] = "REVERSE";
    })(RongIMLib.GetChatRoomType || (RongIMLib.GetChatRoomType = {}));
    var GetChatRoomType = RongIMLib.GetChatRoomType;
    (function (ConnectionStatus) {
        /**
         * 连接成功。
         */
        ConnectionStatus[ConnectionStatus["CONNECTED"] = 0] = "CONNECTED";
        /**
         * 连接中。
         */
        ConnectionStatus[ConnectionStatus["CONNECTING"] = 1] = "CONNECTING";
        /**
         * 断开连接。
         */
        ConnectionStatus[ConnectionStatus["DISCONNECTED"] = 2] = "DISCONNECTED";
        /**
         * 用户账户在其他设备登录，本机会被踢掉线。
         */
        ConnectionStatus[ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"] = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT";
        /**
         * websocket 连接失败
         */
        ConnectionStatus[ConnectionStatus["WEBSOCKET_UNAVAILABLE"] = 7] = "WEBSOCKET_UNAVAILABLE";
        /**
         * 网络不可用。
         */
        ConnectionStatus[ConnectionStatus["NETWORK_UNAVAILABLE"] = 3] = "NETWORK_UNAVAILABLE";
        /**
         * 域名错误
         */
        ConnectionStatus[ConnectionStatus["DOMAIN_INCORRECT"] = 12] = "DOMAIN_INCORRECT";
        /**
        *  连接关闭。
        */
        ConnectionStatus[ConnectionStatus["CONNECTION_CLOSED"] = 4] = "CONNECTION_CLOSED";
        /*
            互踢次数过多（count > 5），此时可能出现：在其它他设备登陆有 reconnect 逻辑
        */
        ConnectionStatus[ConnectionStatus["ULTRALIMIT"] = 1101] = "ULTRALIMIT";
        /*
            开始请求导航
        */
        ConnectionStatus[ConnectionStatus["REQUEST_NAVI"] = 201] = "REQUEST_NAVI";
        /*
            请求导航结束
        */
        ConnectionStatus[ConnectionStatus["RESPONSE_NAVI"] = 202] = "RESPONSE_NAVI";
    })(RongIMLib.ConnectionStatus || (RongIMLib.ConnectionStatus = {}));
    var ConnectionStatus = RongIMLib.ConnectionStatus;
    (function (ConversationNotificationStatus) {
        /**
         * 免打扰状态，关闭对应会话的通知提醒。
         */
        ConversationNotificationStatus[ConversationNotificationStatus["DO_NOT_DISTURB"] = 0] = "DO_NOT_DISTURB";
        /**
         * 提醒。
         */
        ConversationNotificationStatus[ConversationNotificationStatus["NOTIFY"] = 1] = "NOTIFY";
    })(RongIMLib.ConversationNotificationStatus || (RongIMLib.ConversationNotificationStatus = {}));
    var ConversationNotificationStatus = RongIMLib.ConversationNotificationStatus;
    (function (ConversationType) {
        ConversationType[ConversationType["NONE"] = 0] = "NONE";
        ConversationType[ConversationType["PRIVATE"] = 1] = "PRIVATE";
        ConversationType[ConversationType["DISCUSSION"] = 2] = "DISCUSSION";
        ConversationType[ConversationType["GROUP"] = 3] = "GROUP";
        ConversationType[ConversationType["CHATROOM"] = 4] = "CHATROOM";
        ConversationType[ConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
        ConversationType[ConversationType["SYSTEM"] = 6] = "SYSTEM";
        //默认关注 MC
        ConversationType[ConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
        //手工关注 MP
        ConversationType[ConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    })(RongIMLib.ConversationType || (RongIMLib.ConversationType = {}));
    var ConversationType = RongIMLib.ConversationType;
    (function (DiscussionInviteStatus) {
        /**
         * 开放邀请。
         */
        DiscussionInviteStatus[DiscussionInviteStatus["OPENED"] = 0] = "OPENED";
        /**
         * 关闭邀请。
         */
        DiscussionInviteStatus[DiscussionInviteStatus["CLOSED"] = 1] = "CLOSED";
    })(RongIMLib.DiscussionInviteStatus || (RongIMLib.DiscussionInviteStatus = {}));
    var DiscussionInviteStatus = RongIMLib.DiscussionInviteStatus;
    (function (ErrorCode) {
        ErrorCode[ErrorCode["RECALL_MESSAGE"] = 25101] = "RECALL_MESSAGE";
        /**
         * 发送频率过快
         */
        ErrorCode[ErrorCode["SEND_FREQUENCY_TOO_FAST"] = 20604] = "SEND_FREQUENCY_TOO_FAST";
        ErrorCode[ErrorCode["RC_MSG_UNAUTHORIZED"] = 20406] = "RC_MSG_UNAUTHORIZED";
        /**
         * 群组 Id 无效
         */
        ErrorCode[ErrorCode["RC_DISCUSSION_GROUP_ID_INVALID"] = 20407] = "RC_DISCUSSION_GROUP_ID_INVALID";
        /**
         * 群组被禁言
         */
        ErrorCode[ErrorCode["FORBIDDEN_IN_GROUP"] = 22408] = "FORBIDDEN_IN_GROUP";
        /**
         * 不在讨论组。
         */
        ErrorCode[ErrorCode["NOT_IN_DISCUSSION"] = 21406] = "NOT_IN_DISCUSSION";
        /**
         * 不在群组。
         */
        ErrorCode[ErrorCode["NOT_IN_GROUP"] = 22406] = "NOT_IN_GROUP";
        /**
         * 不在聊天室。
         */
        ErrorCode[ErrorCode["NOT_IN_CHATROOM"] = 23406] = "NOT_IN_CHATROOM";
        /**
         *聊天室被禁言
         */
        ErrorCode[ErrorCode["FORBIDDEN_IN_CHATROOM"] = 23408] = "FORBIDDEN_IN_CHATROOM";
        /**
         * 聊天室中成员被踢出
         */
        ErrorCode[ErrorCode["RC_CHATROOM_USER_KICKED"] = 23409] = "RC_CHATROOM_USER_KICKED";
        /**
         * 聊天室不存在
         */
        ErrorCode[ErrorCode["RC_CHATROOM_NOT_EXIST"] = 23410] = "RC_CHATROOM_NOT_EXIST";
        /**
         * 聊天室成员已满
         */
        ErrorCode[ErrorCode["RC_CHATROOM_IS_FULL"] = 23411] = "RC_CHATROOM_IS_FULL";
        /**
         * 获取聊天室信息参数无效
         */
        ErrorCode[ErrorCode["RC_CHATROOM_PATAMETER_INVALID"] = 23412] = "RC_CHATROOM_PATAMETER_INVALID";
        /**
         * 聊天室异常
         */
        ErrorCode[ErrorCode["CHATROOM_GET_HISTORYMSG_ERROR"] = 23413] = "CHATROOM_GET_HISTORYMSG_ERROR";
        /**
         * 没有打开聊天室消息存储
         */
        ErrorCode[ErrorCode["CHATROOM_NOT_OPEN_HISTORYMSG_STORE"] = 23414] = "CHATROOM_NOT_OPEN_HISTORYMSG_STORE";
        /**
         * 敏感词屏蔽
         */
        ErrorCode[ErrorCode["SENSITIVE_SHIELD"] = 21501] = "SENSITIVE_SHIELD";
        ErrorCode[ErrorCode["SENSITIVE_REPLACE"] = 21502] = "SENSITIVE_REPLACE";
        ErrorCode[ErrorCode["TIMEOUT"] = -1] = "TIMEOUT";
        /**
         * 未知原因失败。
         */
        ErrorCode[ErrorCode["UNKNOWN"] = -2] = "UNKNOWN";
        /**
         * 加入讨论失败
         */
        ErrorCode[ErrorCode["JOIN_IN_DISCUSSION"] = 21407] = "JOIN_IN_DISCUSSION";
        /**
         * 创建讨论组失败
         */
        ErrorCode[ErrorCode["CREATE_DISCUSSION"] = 21408] = "CREATE_DISCUSSION";
        /**
         * 设置讨论组邀请状态失败
         */
        ErrorCode[ErrorCode["INVITE_DICUSSION"] = 21409] = "INVITE_DICUSSION";
        /**
         *获取用户失败
         */
        ErrorCode[ErrorCode["GET_USERINFO_ERROR"] = 23407] = "GET_USERINFO_ERROR";
        /**
         * 在黑名单中。
         */
        ErrorCode[ErrorCode["REJECTED_BY_BLACKLIST"] = 405] = "REJECTED_BY_BLACKLIST";
        /**
         * 通信过程中，当前 Socket 不存在。
         */
        ErrorCode[ErrorCode["RC_NET_CHANNEL_INVALID"] = 30001] = "RC_NET_CHANNEL_INVALID";
        /**
         * Socket 连接不可用。
         */
        ErrorCode[ErrorCode["RC_NET_UNAVAILABLE"] = 30002] = "RC_NET_UNAVAILABLE";
        /**
         * 通信超时。
         */
        ErrorCode[ErrorCode["RC_MSG_RESP_TIMEOUT"] = 30003] = "RC_MSG_RESP_TIMEOUT";
        /**
         * 导航操作时，Http 请求失败。
         */
        ErrorCode[ErrorCode["RC_HTTP_SEND_FAIL"] = 30004] = "RC_HTTP_SEND_FAIL";
        /**
         * HTTP 请求失败。
         */
        ErrorCode[ErrorCode["RC_HTTP_REQ_TIMEOUT"] = 30005] = "RC_HTTP_REQ_TIMEOUT";
        /**
         * HTTP 接收失败。
         */
        ErrorCode[ErrorCode["RC_HTTP_RECV_FAIL"] = 30006] = "RC_HTTP_RECV_FAIL";
        /**
         * 导航操作的 HTTP 请求，返回不是200。
         */
        ErrorCode[ErrorCode["RC_NAVI_RESOURCE_ERROR"] = 30007] = "RC_NAVI_RESOURCE_ERROR";
        /**
         * 导航数据解析后，其中不存在有效数据。
         */
        ErrorCode[ErrorCode["RC_NODE_NOT_FOUND"] = 30008] = "RC_NODE_NOT_FOUND";
        /**
         * 导航数据解析后，其中不存在有效 IP 地址。
         */
        ErrorCode[ErrorCode["RC_DOMAIN_NOT_RESOLVE"] = 30009] = "RC_DOMAIN_NOT_RESOLVE";
        /**
         * 创建 Socket 失败。
         */
        ErrorCode[ErrorCode["RC_SOCKET_NOT_CREATED"] = 30010] = "RC_SOCKET_NOT_CREATED";
        /**
         * Socket 被断开。
         */
        ErrorCode[ErrorCode["RC_SOCKET_DISCONNECTED"] = 30011] = "RC_SOCKET_DISCONNECTED";
        /**
         * PING 操作失败。
         */
        ErrorCode[ErrorCode["RC_PING_SEND_FAIL"] = 30012] = "RC_PING_SEND_FAIL";
        /**
         * PING 超时。
         */
        ErrorCode[ErrorCode["RC_PONG_RECV_FAIL"] = 30013] = "RC_PONG_RECV_FAIL";
        /**
         * 消息发送失败。
         */
        ErrorCode[ErrorCode["RC_MSG_SEND_FAIL"] = 30014] = "RC_MSG_SEND_FAIL";
        /**
         * 做 connect 连接时，收到的 ACK 超时。
         */
        ErrorCode[ErrorCode["RC_CONN_ACK_TIMEOUT"] = 31000] = "RC_CONN_ACK_TIMEOUT";
        /**
         * 参数错误。
         */
        ErrorCode[ErrorCode["RC_CONN_PROTO_VERSION_ERROR"] = 31001] = "RC_CONN_PROTO_VERSION_ERROR";