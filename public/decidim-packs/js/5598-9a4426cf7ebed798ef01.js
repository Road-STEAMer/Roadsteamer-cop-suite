(self.webpackChunkdecidim_app=self.webpackChunkdecidim_app||[]).push([[5598],{19624:function(e,t,n){"use strict";n.d(t,{AP:function(){return o},SB:function(){return l},jC:function(){return i},lO:function(){return c},qA:function(){return a}});var r={};function i(e,t){r[e]=t}var o=function(e){r[e]=null},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.history&&window.history.pushState(t,null,e)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.history&&window.history.replaceState(t,null,e)},l=function(){return window.history?window.history.state:null};window.onpopstate=function(e){if(e.isTrusted)for(var t in r)r.hasOwnProperty(t)&&r[t](e.state)}},97845:function(){$((function(){var e=$(".slug"),t=e.find("input"),n=e.find("span.slug-url-value");t.on("keyup",(function(e){n.html(e.target.value)}))}))},26987:function(e,t,n){"use strict";n(92087),n(84633),n(35666),n(62172),n(85392);var r=n(23972),i=n.n(r);n(39281),n(33390),n(35505),n(19976),n(28285);var o=function(e){var t=document.querySelector(".layout-nav");e.preventDefault(),t.classList.toggle("is-nav-open")};var a=n(64112);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===c(o)?o:String(o)),r)}var i,o}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=u((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),$(t).length>0&&(0,a.Z)(t,n)[0].addEventListener("sortupdate",(function(e){var t=$(e.target).children();n.onSortUpdate&&n.onSortUpdate(t)}))}));function d(e,t){return new s(e,t)}var f=n(7827),p=n(26057),h=n(76620),m=n(50296),v=n(28660);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===b(o)?o:String(o)),r)}var i,o}var g="%count%",S={charactersAtLeast:{one:"at least ".concat(g," character"),other:"at least ".concat(g," characters")},charactersLeft:{one:"".concat(g," character left"),other:"".concat(g," characters left")}},w=S,_=function(){return e=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$input=t,this.$target=$(this.$input.data("remaining-characters")),this.minCharacters=parseInt(this.$input.attr("minlength"),10),this.maxCharacters=parseInt(this.$input.attr("maxlength"),10),this.describeByCounter="undefined"===typeof this.$input.attr("aria-describedby"),this.maxCharacters>10?(this.maxCharacters>100?this.announceThreshold=Math.floor(.1*this.maxCharacters):this.announceThreshold=10,this.announceEveryThreshold=10):(this.announceThreshold=1,this.announceEveryThreshold=1);var r=this.$target.attr("id");"undefined"===typeof r&&(r=this.$input.attr("id")&&this.$input.attr("id").length>0?"".concat(this.$input.attr("id"),"_characters"):"characters_".concat(Math.random().toString(36).substr(2,9))),this.$target.length>0?this.$target.attr("id",r):(this.$target=$('<span id="'.concat(r,'" class="form-input-extra-before" />')),this.$input.parent().is(".editor")?this.$input.parent().after(this.$target):this.$input.parent().is(".columns")&&this.$input.parent().parent().is(".row")?this.$input.parent().parent().after(this.$target):this.$input.after(this.$target)),this.$target.length>0&&(this.maxCharacters>0||this.minCharacters>0)&&(this.$srTarget=$('<span role="status" id="'.concat(r,'_sr" class="show-for-sr remaining-character-count-sr" />')),this.$target.before(this.$srTarget),this.$target.attr("aria-hidden","true"),this.$userInput=this.$input,Quill&&this.$input.parent().is(".editor")?setTimeout((function(){n.editor=Quill.find(n.$input.siblings(".editor-container")[0]),n.$userInput=$(n.editor.root),n.initialize()})):this.initialize())},t=[{key:"initialize",value:function(){this.updateInputLength(),this.previousInputLength=this.inputLength,this.bindEvents(),this.setDescribedBy(!0)}},{key:"setDescribedBy",value:function(e){this.describeByCounter&&(e?this.$userInput.attr("aria-describedby",this.$srTarget.attr("id")):this.$userInput.removeAttr("aria-describedby"))}},{key:"bindEvents",value:function(){var e=this;this.editor?this.editor.on("text-change",(function(){e.handleInput()})):this.$userInput.on("input",(function(){e.handleInput()})),this.$userInput.on("keyup",(function(){e.updateStatus()})),this.$userInput.on("focus",(function(){e.updateScreenReaderStatus()})),this.$userInput.on("blur",(function(){e.updateScreenReaderStatus(),e.setDescribedBy(!0)})),null!==this.$userInput.get(0)&&this.$userInput.get(0).addEventListener("emoji.added",(function(){e.updateStatus()})),this.updateStatus(),this.updateScreenReaderStatus()}},{key:"getInputLength",value:function(){return this.inputLength}},{key:"updateInputLength",value:function(){this.previousInputLength=this.inputLength,this.editor?this.inputLength=this.editor.getLength():this.inputLength=this.$input.val().length}},{key:"handleInput",value:function(){this.updateInputLength(),this.checkScreenReaderUpdate(),this.setDescribedBy(!1)}},{key:"getInputDirection",value:function(){return this.inputLength<this.previousInputLength?"del":"ins"}},{key:"getScreenReaderLength",value:function(){var e=this.getInputLength();if(this.maxCharacters<10)return e;if(this.maxCharacters-e<=this.announceEveryThreshold)return e;var t=e-e%this.announceThreshold;if("del"===this.getInputDirection()){if(t===e)return t;if(this.maxCharacters-t===this.announceThreshold)return this.announcedAt||e;if(t<e)return t+this.announceThreshold}else if(t<this.announcedAt)return this.announcedAt;return t}},{key:"getMessages",value:function(){var e=[],t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t&&(t=this.getInputLength()),this.minCharacters>0){var n=w.charactersAtLeast.other;1===this.minCharacters&&(n=w.charactersAtLeast.one),e.push(n.replace(g,this.minCharacters))}if(this.maxCharacters>0){var r=this.maxCharacters-t,i=w.charactersLeft.other;1===r&&(i=w.charactersLeft.one),this.$input[0].dispatchEvent(new CustomEvent("characterCounter",{detail:{remaining:r}})),e.push(i.replace(g,r))}return e}},{key:"updateStatus",value:function(){this.$target.text(this.getMessages().join(", "))}},{key:"checkScreenReaderUpdate",value:function(){if(!(this.maxCharacters<1)){var e=this.getScreenReaderLength();e!==this.announcedAt&&(this.announcedAt=e,this.updateScreenReaderStatus(e))}}},{key:"updateScreenReaderStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$srTarget.text(this.getMessages(e).join(", "))}}],n=[{key:"configureMessages",value:function(e){w=$.extend(S,e)}}],t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===k(o)?o:String(o)),r)}var i,o}$((function(){$("input[type='text'], textarea, .editor>input[type='hidden']").each((function(e,t){var n=$(t);(n.is("[minlength]")||n.is("[maxlength]"))&&function(e){"undefined"!==typeof e&&e.length&&e.data("remaining-characters-counter",new _(e))}(n)}))}));var T=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.controllerSelect=t.controllerSelect,this.subformWrapperClass=t.subformWrapperClass,this.globalWrapperSelector=t.globalWrapperSelector,this._bindEvent(),this._runAll()},(t=[{key:"_runAll",value:function(){var e=this;this.controllerSelect.each((function(t,n){e.run(n)}))}},{key:"run",value:function(e){var t=$(e),n=this.subformWrapperClass,r=t.val(),i=t.parents(this.globalWrapperSelector).find(".".concat(n)),o=i.filter("#".concat(n,"-").concat(r));i.find("input,textarea,select").prop("disabled",!0),i.hide(),o.find("input,textarea,select").prop("disabled",!1),o.show()}},{key:"_bindEvent",value:function(){var e=this;this.controllerSelect.on("change",(function(t){e.run(t.target)}))}}])&&C(e.prototype,t),n&&C(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===P(o)?o:String(o)),r)}var i,o}window.Decidim=window.Decidim||{},window.Decidim.managedUsersForm=function(){new T({controllerSelect:$("select#impersonate_user_authorization_handler_name"),subformWrapperClass:"authorization-handler",globalWrapperSelector:"form"}).run()},window.Decidim.config=new v.Z,window.Decidim.InputCharacterCounter=_,$((function(){var e;window.theDataPicker=new h.Z($(".data-picker")),$(document).foundation(),(e=document.querySelector(".menu-trigger"))&&e.addEventListener("click",o),d("#steps tbody",{placeholder:$('<tr style="border-style: dashed; border-color: #000"><td colspan="4">&nbsp;</td></tr>')[0],onSortUpdate:function(e){var t=$("#steps tbody").data("sort-url"),n=e.map((function(e,t){return $(t).data("id")})).toArray();$.ajax({method:"POST",url:t,contentType:"application/json",data:JSON.stringify({items_ids:n})})}}),(0,p.Z)(),$(".editor-container").each((function(e,t){(0,f.Z)(t)})),$("form.new_filter").each((function(){new m.Z($(this)).mountComponent()}))}));var x=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.controllerSelect=t.controllerSelect,this.subformWrapperClass=t.subformWrapperClass,this.globalWrapperSelector=t.globalWrapperSelector,this._bindEvent(),this._runAll()},(t=[{key:"_runAll",value:function(){var e=this;this.controllerSelect.each((function(t,n){e.run(n)}))}},{key:"run",value:function(e){var t=$(e),n=this.subformWrapperClass,r=t.val(),i=t.parents(this.globalWrapperSelector).find("#".concat(n,"-").concat(r));t.prop("checked")?(i.find("input,textarea,select").prop("disabled",!1),i.show()):(i.find("input,textarea,select").prop("disabled",!0),i.hide())}},{key:"_bindEvent",value:function(){var e=this;this.controllerSelect.on("change",(function(t){e.run(t.target)}))}}])&&j(e.prototype,t),n&&j(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();$((function(){new x({controllerSelect:$("input[name$=\\[authorization_handlers\\]\\[\\]]"),subformWrapperClass:"authorization-handler",globalWrapperSelector:"fieldset"}).run()}));n(66009),n(67001),n(12093),n(73207);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===E(o)?o:String(o)),r)}var i,o}var O=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ruleCheckboxes=t.ruleCheckboxes,this._runAll()},(t=[{key:"_runAll",value:function(){var e=this;this.ruleCheckboxes.each((function(t,n){e._bindEvent(n),e.run(n)}))}},{key:"_bindEvent",value:function(e){var t=this;$(e).on("change",(function(e){t.run(e.target)}))}},{key:"run",value:function(e){var t=this;this.toggleTextInput(e),$(e).prop("checked")&&this.ruleCheckboxes.filter((function(t,n){return n!==e})).prop("checked",!1).each((function(e,n){t.toggleTextInput(n)}))}},{key:"toggleTextInput",value:function(e){var t=$(e).closest("div");if(!(t.length<1)){var n=t.attr("class").replace(/^vote_rule_/,"vote_").replace(/_enabled_container$/,""),r=$('[class^="'.concat(n,'"][class$="_container"]'));$(e).prop("checked")?r.slideDown():r.slideUp()}}}])&&F(e.prototype,t),n&&F(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===A(o)?o:String(o)),r)}var i,o}$((function(){new O({ruleCheckboxes:$("input[id^='component_settings_vote_rule_']")}).run(),$(".readonly_container input").click((function(e){return e.preventDefault(),!1}));var e=$("input#component_settings_amendments_enabled");if(e.length>0){var t=$(".amendments_wizard_help_text_container, .amendments_visibility_container, .amendment_creation_enabled_container, .amendment_reaction_enabled_container, .amendment_promotion_enabled_container");e.is(":not(:checked)")&&t.hide(),e.click((function(){t.toggle()}))}}));var I=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.hideOnFirstSelector=t.hideOnFirstSelector,this.hideOnLastSelector=t.hideOnLastSelector,this.run()},(t=[{key:"run",value:function(){var e=$(this.listSelector),t=this.hideOnFirstSelector,n=this.hideOnLastSelector;if(1===e.length){var r=e.first();r.find(t).hide(),r.find(n).hide()}else e.each((function(r,i){i.id===e.first().attr("id")?($(i).find(t).hide(),$(i).find(n).show()):i.id===e.last().attr("id")?($(i).find(n).hide(),$(i).find(t).show()):($(i).find(n).show(),$(i).find(t).show())}))}}])&&D(e.prototype,t),n&&D(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===L(o)?o:String(o)),r)}var i,o}var U=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.labelSelector=t.labelSelector,this.onPositionComputed=t.onPositionComputed,this.run()},(t=[{key:"run",value:function(){var e=this;$(this.listSelector).each((function(t,n){var r=$(n).find(e.labelSelector),i=r.html();i.match(/#(\d+)/)?r.html(i.replace(/#(\d+)/,"#".concat(t+1))):r.html("".concat(i," #").concat(t+1)),e.onPositionComputed&&e.onPositionComputed(n,t)}))}}])&&B(e.prototype,t),n&&B(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===M(o)?o:String(o)),r)}var i,o}var R=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapperSelector=t.wrapperSelector,this.containerSelector=t.containerSelector,this.fieldSelector=t.fieldSelector,this.addFieldButtonSelector=t.addFieldButtonSelector,this.addSeparatorButtonSelector=t.addSeparatorButtonSelector,this.addTitleAndDescriptionButtonSelector=t.addTitleAndDescriptionButtonSelector,this.fieldTemplateSelector=t.fieldTemplateSelector,this.separatorTemplateSelector=t.separatorTemplateSelector,this.TitleAndDescriptionTemplateSelector=t.TitleAndDescriptionTemplateSelector,this.removeFieldButtonSelector=t.removeFieldButtonSelector,this.moveUpFieldButtonSelector=t.moveUpFieldButtonSelector,this.moveDownFieldButtonSelector=t.moveDownFieldButtonSelector,this.onAddField=t.onAddField,this.onRemoveField=t.onRemoveField,this.onMoveUpField=t.onMoveUpField,this.onMoveDownField=t.onMoveDownField,this.placeholderId=t.placeholderId,this.elementCounter=0,this._enableInterpolation(),this._activateFields(),this._bindEvents()},t=[{key:"_enableInterpolation",value:function(){$.fn.replaceAttribute=function(e,t,n){return $(this).find("[".concat(e,"*=").concat(t,"]")).addBack("[".concat(e,"*=").concat(t,"]")).each((function(r,i){$(i).attr(e,$(i).attr(e).replace(t,n))})),this},$.fn.template=function(e,t){var n=$(this).find("template, .decidim-template");n.length>0&&n.html((function(n,r){return $(r).template(e,t)[0].outerHTML}));var r=$(this).find("[data-template]");return r.length>0&&r.each((function(n,r){var i=$(r),o=$(i.data("template")),a=$(o[0].outerHTML),c="".concat(o.attr("id"),"-").concat(t),l="#".concat(c);a.attr("id",c),i.attr("data-template",l).data("template",l),o.after(a),a.html((function(n,r){return $(r).template(e,t)[0].outerHTML}))})),$(this).replaceAttribute("id",e,t),$(this).replaceAttribute("name",e,t),$(this).replaceAttribute("data-tabs-content",e,t),$(this).replaceAttribute("for",e,t),$(this).replaceAttribute("tabs_id",e,t),$(this).replaceAttribute("href",e,t),$(this).replaceAttribute("value",e,t),this}}},{key:"_bindEvents",value:function(){var e=this;$(this.wrapperSelector).on("click",this.addFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.fieldTemplateSelector)}))})),this.addSeparatorButtonSelector&&$(this.wrapperSelector).on("click",this.addSeparatorButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.separatorTemplateSelector)}))})),this.addTitleAndDescriptionButtonSelector&&$(this.wrapperSelector).on("click",this.addTitleAndDescriptionButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.TitleAndDescriptionTemplateSelector)}))})),$(this.wrapperSelector).on("click",this.removeFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._removeField(t)}))})),this.moveUpFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveUpFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveUpField(t)}))})),this.moveDownFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveDownFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveDownField(t)}))}))}},{key:"_bindSafeEvent",value:function(e,t){e.preventDefault(),e.stopPropagation();try{return t(e.target)}catch(n){return console.error(n),n}}},{key:"_addField",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".decidim-template",t=$(this.wrapperSelector),n=t.find(this.containerSelector),r=t.data("template"),i=null;r&&(i=$(r)),(null===i||i.length<1)&&(i=t.children("template, ".concat(e)));var o=$(i.html()).template(this.placeholderId,this._getUID());o.find("ul.tabs").attr("data-tabs",!0);var a=n.find(this.fieldSelector).last();a.length>0?a.after(o):o.appendTo(n),o.foundation(),this.onAddField&&this.onAddField(o)}},{key:"_removeField",value:function(e){var t=$(e).parents(this.fieldSelector);if(t.find("input").filter((function(e,t){return t.name.match(/id/)})).length>0){var n=t.find("input").filter((function(e,t){return t.name.match(/delete/)}));n.length>0&&$(n[0]).val(!0),t.addClass("hidden"),t.hide()}else t.remove();this.onRemoveField&&this.onRemoveField(t)}},{key:"_moveUpField",value:function(e){var t=$(e).parents(this.fieldSelector);t.prev().before(t),this.onMoveUpField&&this.onMoveUpField(t)}},{key:"_moveDownField",value:function(e){var t=$(e).parents(this.fieldSelector);t.next().after(t),this.onMoveDownField&&this.onMoveDownField(t)}},{key:"_activateFields",value:function(){var e=this,t=$(this.wrapperSelector).find(this.containerSelector);t.append(t.find("script")),$(this.fieldSelector).each((function(t,n){$(n).template(e.placeholderId,e._getUID()),$(n).find("ul.tabs").attr("data-tabs",!0)}))}},{key:"_getUID",value:function(){return this.elementCounter+=1,(new Date).getTime()+this.elementCounter}}],t&&z(e.prototype,t),n&&z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}();$((function(){[{placeHolderId:"external-domain-id",wrapperSelector:".external-domains",fieldSelector:".external-domain",addFieldSelector:".add-external-domain"}].forEach((function(e){var t,n=e.fieldSelector.replace(".",""),r=new I({listSelector:"".concat(e.fieldSelector,":not(.hidden)"),hideOnFirstSelector:".move-up-question",hideOnLastSelector:".move-down-question"}),i=new U({listSelector:"".concat(e.fieldSelector,":not(.hidden)"),labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find("input[name$=\\[position\\]]").val(t)}}),o=function(){d(".external-domains-list:not(.published)",{handle:".external-domain-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){i.run(),r.run()}})};t={placeholderId:e.placeHolderId,wrapperSelector:e.wrapperSelector,containerSelector:"".concat(e.wrapperSelector,"-list"),fieldSelector:e.fieldSelector,addFieldButtonSelector:e.addFieldSelector,removeFieldButtonSelector:".remove-".concat(n),moveUpFieldButtonSelector:".move-up-question",moveDownFieldButtonSelector:".move-down-question",onAddField:function(){o(),i.run(),r.run()},onRemoveField:function(e){i.run(),r.run(),$("input",e).removeAttr("required")},onMoveUpField:function(){i.run(),r.run()},onMoveDownField:function(){i.run(),r.run()}},new R(t),o(),$(e.fieldSelector).each((function(e,t){!function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide(),$("input",e).removeAttr("required"))}($(t))})),i.run(),r.run()}))}));n(19204);function W(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}$((function(){var e=$(".draggable-list"),t=[];e.each((function(e,n){t=[].concat(W(t),[".".concat(n.className.split(" ").filter((function(e){return/js-list.*/.test(e)}))[0])])})),document.addEventListener("drag",(function(t){e.not(t.target.parentElement).addClass("dragging")})),document.addEventListener("dragend",(function(){e.removeClass("dragging")})),d(t.join(", "),{handle:"li",forcePlaceholderSize:!0,connectWith:".js-connect"})})),$((function(){var e=".js-sortable";$(e).each((function(t,n){d(n.id?"#".concat(n.id):e,{handle:"li",forcePlaceholderSize:!0,placeholderClass:"sort-placeholder"})}))}));n(91185),n(29044),n(92536),n(94625),n(82068),n(42536),n(41356),n(96102),n(73796),n(97845),n(52981);var q=n(9093);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Z(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}$((function(){var e=$("[data-autocomplete]");e.length<1||e.each((function(e,t){!function(e){var t=JSON.parse(e.dataset.autocomplete),n=new URL(t.searchURL),r=document.createElement("input");r.type="text",r.className="autocomplete-input",e.appendChild(r);var i=t.mode||"sticky",o=null;if(t.selected)switch(i){case"multi":o=t.selected.map((function(e){return{key:"label",value:{value:e.value,label:e.label}}}));break;case"sticky":o={key:"label",value:t.options[t.options.length-1]};break;default:o=t.selected}new q.Z(r,{name:t.name,placeholder:t.placeholder,selected:o,mode:i,searchPrompt:!0,searchPromptText:t.searchPromptText,threshold:3,dataMatchKeys:["label"],dataSource:function(e,t){var r=new URLSearchParams(J(J({},Object.fromEntries(n.searchParams)),{},{term:e}));fetch("".concat(n.origin).concat(n.pathname,"?").concat(r.toString()),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e)}))}})}(t)}))})),i().start(),window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("select.language-change").forEach((function(e){e.addEventListener("change",(function(){var t=e.value,n=e.parentElement.parentElement.nextElementSibling;n.querySelector(".is-active").classList.remove("is-active"),n.querySelector(t).classList.add("is-active")}))}))}))},29044:function(){$((function(){var e=$(".moderation-details"),t=e.find(".toggle-content"),n=e.find(".reported-content"),r=n.find(".current"),i=n.find(".original");i.hide(),t.on("click",(function(){r.toggle(),i.toggle(),r.is(":hidden")?t.html(t.data("see-current-button-label")):t.html(t.data("see-original-button-label"))}))}))},67001:function(){$((function(){var e=$(".form.newsletter_deliver");if(e.length>0){var t=e.find("#send_newsletter_to_all_users"),n=e.find("#send_newsletter_to_followers"),r=e.find("#send_newsletter_to_participants"),i=e.find("#participatory_spaces_for_select"),o=n.find("input[type='checkbox']").prop("checked"),a=r.find("input[type='checkbox']").prop("checked");t.on("change",(function(e){var t=e.target.checked;t?(n.find("input[type='checkbox']").prop("checked",!t),r.find("input[type='checkbox']").prop("checked",!t),i.hide()):(n.find("input[type='checkbox']").prop("checked",!t),r.find("input[type='checkbox']").prop("checked",!t),i.show())})),n.on("change",(function(e){var n=e.target.checked,o=r.find("input[type='checkbox']").prop("checked");n?(t.find("input[type='checkbox']").prop("checked",!n),i.show()):o||(t.find("input[type='checkbox']").prop("checked",!0),i.hide())})),r.on("change",(function(e){var r=e.target.checked,o=n.find("input[type='checkbox']").prop("checked");r?(t.find("input[type='checkbox']").prop("checked",!r),i.show()):o||(t.find("input[type='checkbox']").prop("checked",!0),i.hide())})),o||a?i.show():i.hide(),$(".form .spaces-block-tag").each((function(e,t){var n=$(t).find(".chosen-select");n.change((function(){var e=n.find("option:selected").val();"all"===e?(n.find("option").not(":first").prop("selected",!0),n.find("option[value='all']").prop("selected",!1)):""===e&&n.find("option").not(":first").prop("selected",!1)}))})),e.on("change",(function(){var t=e.serializeJSON().newsletter,n=e.data("recipients-count-newsletter-path"),r=$("#recipients_count_spinner");r.removeClass("hide"),$.get(n,{data:t},(function(e){$("#recipients_count").text(e)})).always((function(){r.addClass("hide")}))}))}}))},96102:function(){$((function(){var e=$("#show-email-modal");if(0!==e.length){var t=$("[data-open=user_email]",e),n=$("#user_email",e),r=$("#user_full_name",e);$("[data-toggle=show-email-modal]").on("click",(function(e){e.preventDefault(),t.show(),t.attr("data-open-url",e.currentTarget.href),r.text($(e.currentTarget).data("full-name")),n.html("")}))}}))},73207:function(){$((function(){var e=$("label[for='component_settings_proposal_edit_time_limited']"),t=$("#component_settings_proposal_edit_time_limited"),n=$("#component_settings_proposal_edit_time_infinite"),r=$(".proposal_edit_before_minutes_container");r.detach().appendTo(e),n.is(":checked")&&r.hide(),t.on("click",(function(){r.show()})),n.on("click",(function(){r.hide()}))}))},12093:function(){$((function(){var e=$("#component_settings_scopes_enabled"),t=$("#component_settings_scope_id");$(".edit_component, .new_component").length>0&&(e.on("change",(function(e){var n=e.target.checked;window.theDataPicker.enabled(t,n)})),window.theDataPicker.enabled(t,e.prop("checked")))}))},28285:function(){$((function(){$("[data-tabs]").on("change.zf.tabs",(function(e){var t=$(e.target).next(".tabs-content .tabs-panel.is-active"),n=t.find(".editor .ql-editor");(n.length>0||(n=t.find("input:first")).length>0)&&n.focus()}))}))},66009:function(){$((function(){var e=$("#welcome-notification-details"),t=$("#organization_send_welcome_notification",e),n=$("#organization_customize_welcome_notification",e),r=function(){t.is(":checked")?$(".send-welcome-notification-details",e).show():$(".send-welcome-notification-details",e).hide(),n.is(":checked")?$(".customize-welcome-notification-details",e).show():$(".customize-welcome-notification-details",e).hide()};$(t).click((function(){return r()})),$(n).click((function(){return r()})),r()}))}}]);
//# sourceMappingURL=5598-9a4426cf7ebed798ef01.js.map