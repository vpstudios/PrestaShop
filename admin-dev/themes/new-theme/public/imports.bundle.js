/******/!function(e){// webpackBootstrap
/******/
function t(e){/******/
delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(n)}function r(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=p.p+""+w+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(e){return void t(e)}e(o)}}})}function o(e){var t=A[e];if(!t)return p;var n=function(n){return t.hot.active?(A[n]?A[n].parents.indexOf(e)<0&&A[n].parents.push(e):(F=[e],y=n),t.children.indexOf(n)<0&&t.children.push(n)):F=[],p(n)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r));return n.e=function(e){function t(){I--,"prepare"===O&&(_[e]||d(e),0===I&&0===E&&u())}return"ready"===O&&l("prepare"),I++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:s,apply:f,status:function(e){if(!e)return O;H.push(e)},addStatusHandler:function(e){H.push(e)},removeStatusHandler:function(e){var t=H.indexOf(e);t>=0&&H.splice(t,1)},data:j[e]};return y=void 0,t}function l(e){O=e;for(var t=0;t<H.length;t++)H[t].call(null,e)}function a(e){return+e+""===e?+e:e}function s(e){if("idle"!==O)throw new Error("check() is only allowed in idle status");return b=e,l("check"),r().then(function(e){if(!e)return l("idle"),null;x={},_={},D=e.c,g=e.h,l("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});m={};return d(4),"prepare"===O&&0===I&&0===E&&u(),t})}function c(e,t){if(D[e]&&x[e]){x[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--E&&0===I&&u()}}function d(e){D[e]?(x[e]=!0,E++,n(e)):_[e]=!0}function u(){l("ready");var e=v;if(v=null,e)if(b)f(b).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(a(n));e.resolve(t)}}function f(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==O)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,s,c,d,u={},f=[],h={},y=function(){};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){d=a(v);var b;b=m[v]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),l=i.id,a=i.chain;if((c=A[l])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:l};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:l};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],u=A[d];if(u){if(u.hot._declinedDependencies[l])return{type:"declined",chain:a.concat([d]),moduleId:l,parentId:d};t.indexOf(d)>=0||(u.hot._acceptedDependencies[l]?(n[d]||(n[d]=[]),r(n[d],[l])):(delete n[d],t.push(d),o.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(d):{type:"disposed",moduleId:v};var k=!1,H=!1,E=!1,I="";switch(b.chain&&(I="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+b.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(k=new Error("Aborted because "+d+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(b),H=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),E=!0;break;default:throw new Error("Unexception type "+b.type)}if(k)return l("abort"),Promise.reject(k);if(H){h[d]=m[d],r(f,b.outdatedModules);for(d in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,d)&&(u[d]||(u[d]=[]),r(u[d],b.outdatedDependencies[d]))}E&&(r(f,[b.moduleId]),h[d]=y)}var _=[];for(i=0;i<f.length;i++)d=f[i],A[d]&&A[d].hot._selfAccepted&&_.push({module:d,errorHandler:A[d].hot._selfAccepted});l("dispose"),Object.keys(D).forEach(function(e){!1===D[e]&&t(e)});for(var x,P=f.slice();P.length>0;)if(d=P.pop(),c=A[d]){var C={},U=c.hot._disposeHandlers;for(s=0;s<U.length;s++)(o=U[s])(C);for(j[d]=C,c.hot.active=!1,delete A[d],s=0;s<c.children.length;s++){var T=A[c.children[s]];T&&((x=T.parents.indexOf(d))>=0&&T.parents.splice(x,1))}}var B,M;for(d in u)if(Object.prototype.hasOwnProperty.call(u,d)&&(c=A[d]))for(M=u[d],s=0;s<M.length;s++)B=M[s],(x=c.children.indexOf(B))>=0&&c.children.splice(x,1);l("apply"),w=g;for(d in h)Object.prototype.hasOwnProperty.call(h,d)&&(e[d]=h[d]);var S=null;for(d in u)if(Object.prototype.hasOwnProperty.call(u,d)){c=A[d],M=u[d];var z=[];for(i=0;i<M.length;i++)B=M[i],o=c.hot._acceptedDependencies[B],z.indexOf(o)>=0||z.push(o);for(i=0;i<z.length;i++){o=z[i];try{o(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:M[i],error:e}),n.ignoreErrored||S||(S=e)}}}for(i=0;i<_.length;i++){var q=_[i];d=q.module,F=[d];try{p(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,orginalError:e}),n.ignoreErrored||S||(S=t),S||(S=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||S||(S=e)}}return S?(l("fail"),Promise.reject(S)):(l("idle"),new Promise(function(e){e(f)}))}function p(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:i(t),parents:(k=F,F=[],k),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){c(e,t),h&&h(e,t)};var y,v,m,g,b=!0,w="2c014ffe6bce094e6a75",j={},F=[],k=[],H=[],O="idle",E=0,I=0,_={},x={},D={},A={};p.m=e,p.c=A,p.i=function(e){return e},p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="",p.h=function(){return w},o(366)(p.s=366)}({180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(218);(0,window.$)(function(){(new r.a).init()})},217:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=window.$,l=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){i(".js-entity-select").on("change",this.toggleForm.bind(this)),this.toggleForm()}},{key:"toggleForm",value:function(){var e=i("#entity").find("option:selected"),t=parseInt(e.val()),n=e.text().toLowerCase();this.toggleEntityAlert(t),this.toggleFields(t,n),this.loadAvailableFields(t)}},{key:"toggleEntityAlert",value:function(e){var t=i(".js-entity-alert");[0,1].includes(e)?t.show():t.hide()}},{key:"toggleFields",value:function(e,t){var n=i(".js-truncate-form-group"),r=i(".js-match-ref-form-group"),o=i(".js-regenerate-form-group"),l=i(".js-force-ids-form-group"),a=i(".js-entity-name");8===e?n.hide():n.show(),[1,2].includes(e)?r.show():r.hide(),[0,1,5,6,8].includes(e)?o.show():o.hide(),[0,1,3,4,5,6,8,7].includes(e)?l.show():l.hide(),a.html(t)}},{key:"loadAvailableFields",value:function(e){i.ajax({url:"../../../ajax.php",data:{getAvailableFields:1,entity:e},dataType:"json"}).then(function(e){var t="",n=i(".js-available-fields");n.empty();for(var r=0;r<e.length;r++)t+=e[r].field;n.html(t),n.find('[data-toggle="popover"]').popover()})}}]),e}();t.a=l},218:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(217),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=window.$,a=function(){function e(){r(this,e)}return i(e,[{key:"init",value:function(){var e=this;(new o.a).init(),l(".js-from-files-history-btn").on("click",function(){return e.showFilesHistoryHandler()}),l(".js-close-files-history-block-btn").on("click",function(){return e.closeFilesHistoryHandler()}),l("#fileHistoryTable").on("click",".js-use-file-btn",function(t){return e.useFileFromFilesHistory(t)}),l(".js-change-import-file-btn").on("click",function(){return e.changeImportFileHandler()}),l(".js-import-file").on("change",function(){return e.uploadFile()}),this.toggleSelectedFile()}},{key:"toggleSelectedFile",value:function(){var e=l("#csv").val();e.length>0&&(this.showImportFileAlert(e),this.hideFileUploadBlock())}},{key:"changeImportFileHandler",value:function(){this.hideImportFileAlert(),this.showFileUploadBlock()}},{key:"showFilesHistoryHandler",value:function(){this.showFilesHistory(),this.hideFileUploadBlock()}},{key:"closeFilesHistoryHandler",value:function(){this.closeFilesHistory(),this.showFileUploadBlock()}},{key:"showFilesHistory",value:function(){l(".js-files-history-block").removeClass("d-none")}},{key:"closeFilesHistory",value:function(){l(".js-files-history-block").addClass("d-none")}},{key:"useFileFromFilesHistory",value:function(e){var t=l(e.target).closest(".btn-group").data("file");l(".js-import-file-input").val(t),this.showImportFileAlert(t),this.closeFilesHistory()}},{key:"showImportFileAlert",value:function(e){l(".js-import-file-alert").removeClass("d-none"),l(".js-import-file").text(e)}},{key:"hideImportFileAlert",value:function(){l(".js-import-file-alert").addClass("d-none")}},{key:"hideFileUploadBlock",value:function(){l(".js-file-upload-form-group").addClass("d-none")}},{key:"showFileUploadBlock",value:function(){l(".js-file-upload-form-group").removeClass("d-none")}},{key:"enableFilesHistoryBtn",value:function(){l(".js-from-files-history-btn").removeAttr("disabled")}},{key:"showImportFileError",value:function(e,t,n){var r=l(".js-import-file-error"),o=e+" ("+this.humanizeSize(t)+")";r.find(".js-file-data").html(o),r.find(".js-error-message").html(n),r.removeClass("d-none")}},{key:"hideImportFileError",value:function(){l(".js-import-file-error").addClass("d-none")}},{key:"humanizeSize",value:function(e){return"number"!=typeof e?"":e>=1e9?(e/1e9).toFixed(2)+" GB":e>=1e6?(e/1e6).toFixed(2)+" MB":(e/1e3).toFixed(2)+" KB"}},{key:"uploadFile",value:function(){var e=this;this.hideImportFileError();var t=l("#file"),n=t.prop("files")[0];if(t.data("max-file-upload-size")<n.size)return void this.showImportFileError(n.name,n.size,"File is too large");var r=new FormData;r.append("file",n);var o=l(".js-import-form").data("file-upload-url");l.ajax({type:"POST",url:o,data:r,cache:!1,contentType:!1,processData:!1}).then(function(t){if(t.error)return void e.showImportFileError(n.name,n.size,t.error);var r=t.file.name;l(".js-import-file-input").val(r),e.showImportFileAlert(r),e.hideFileUploadBlock(),e.addFileToHistoryTable(r),e.enableFilesHistoryBtn()})}},{key:"addFileToHistoryTable",value:function(e){var t=l("#fileHistoryTable"),n=t.data("delete-file-url"),r=n+"&filename="+encodeURIComponent(e),o=t.data("download-file-url"),i=o+"&filename="+encodeURIComponent(e),a=t.find("tr:first").clone();a.removeClass("d-none"),a.find("td:first").text(e),a.find(".btn-group").attr("data-file",e),a.find(".js-delete-file-btn").attr("href",r),a.find(".js-download-file-btn").attr("href",i),t.find("tbody").append(a);var s=t.find("tr").length-1;l(".js-files-history-number").text(s)}}]),e}();t.a=a},366:function(e,t,n){e.exports=n(180)}});