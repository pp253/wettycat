webpackJsonp([5],{ai7j:function(e,t){},lqIw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gyMJ"),s={name:"DeviceInsertDataPanel",data:function(){return{valid:!1,deviceId:"",dataList:[]}},methods:{submit:function(){var e={};this.dataList.every(function(t){return e[t.key]=t.value}),i.b.device.insertData(this.deviceId,e)},addData:function(){this.dataList.push({key:"",value:""})},removeData:function(e){this.dataList.splice(e,1)}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[a("h1",[e._v("新增資料")])]),e._v(" "),a("v-card-text",[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-subheader",[e._v("裝置基本資訊")]),e._v(" "),a("v-text-field",{attrs:{label:"裝置ID",required:""},model:{value:e.deviceId,callback:function(t){e.deviceId=t},expression:"deviceId"}}),e._v(" "),a("v-subheader",[e._v("資料")]),e._v(" "),a("v-layout",{attrs:{wrap:""}},[e._l(e.dataList,function(t,i){return[a("v-flex",{key:i+"-key",attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"鍵名"},model:{value:e.dataList[i].key,callback:function(t){e.$set(e.dataList[i],"key",t)},expression:"dataList[index].key"}})],1),e._v(" "),a("v-flex",{key:i+"-value",attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"鍵值"},model:{value:e.dataList[i].value,callback:function(t){e.$set(e.dataList[i],"value",t)},expression:"dataList[index].value"}})],1)]})],2),e._v(" "),a("v-btn",{attrs:{block:""},on:{click:e.addData}},[e._v("新增資料欄位")])],1)],1),e._v(" "),a("v-card-actions",[a("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("新增資料")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(s,v,!1,function(e){a("ai7j")},"data-v-050e6197",null);t.default=d.exports}});
//# sourceMappingURL=5.3be968e893946ee20a6c.js.map