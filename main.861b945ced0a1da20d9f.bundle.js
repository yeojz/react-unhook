(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(8)),utils_1=__webpack_require__(178),UseCallback=function(_super){function UseCallback(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(UseCallback,_super),UseCallback.prototype.componentDidMount=function(){this.props.fn()},UseCallback.prototype.shouldComponentUpdate=function(nextProps){var _a=this.props.inputs,prevDeps=void 0===_a?null:_a,_b=nextProps.comparator,comparator=void 0===_b?utils_1.areHookInputsEqual:_b,_c=nextProps.inputs,nextDeps=void 0===_c?null:_c;return null===nextDeps||!comparator(nextDeps,prevDeps)},UseCallback.prototype.componentDidUpdate=function(){this.props.fn()},UseCallback.prototype.render=function(){return null},UseCallback}(React.Component);exports.default=UseCallback},178:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var warning_1=__importDefault(__webpack_require__(399)),IS_DEV=!1;exports.noop=function(){},exports.objectIs=function(x,y){return x===y?0!==x||1/x==1/y:x!=x&&y!=y},exports.areHookInputsEqual=function areHookInputsEqual(nextDeps,prevDeps){return null===prevDeps?(IS_DEV&&warning_1.default(!1,'%s received an "inputs" props during this render, but not during the previous render. Even though "inputs" prop is optional, its type cannot change between renders.',"A react-unhook component"),!1):(IS_DEV&&nextDeps.length!==prevDeps.length&&warning_1.default(!1,'The "inputs" props passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s',"a react-unhook component","["+nextDeps.join(", ")+"]","["+prevDeps.join(", ")+"]"),nextDeps.every(function(value,idx){return exports.objectIs(value,prevDeps[idx])}))}},180:function(module,exports,__webpack_require__){__webpack_require__(181),__webpack_require__(259),module.exports=__webpack_require__(260)},260:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(21),__webpack_require__(22),__webpack_require__(20),__webpack_require__(29);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(24);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addParameters)({options:{hierarchyRootSeparator:/\|/,hierarchySeparator:/\//,panelPosition:"bottom",sidebarAnimations:!1,sortStoriesByKind:!1}});var req=__webpack_require__(327);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function(){console.log(req),req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(261)(module))},327:function(module,exports,__webpack_require__){var map={"./UseCallback.story.tsx":328,"./UseEffect.story.tsx":400,"./UseGeolocation.story.tsx":401,"./UseInterval.story.tsx":404,"./UseTimeout.story.tsx":406};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=327},328:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(53).withStorySource,exports.__STORY__="import React, { Fragment } from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport withState from './withState';\nimport UseCallback from '../src/UseCallback';\n\nfunction Example(props: any) {\n  const { count, setCount } = props;\n\n  return (\n    <div>\n      <p>Update {count}</p>\n      <button onClick={() => setCount(count + 1)}>Update Prop</button>\n\n      <UseCallback\n        fn={() => {\n          action('AlwaysCallback')(`You clicked ${count} times`);\n        }}\n      />\n    </div>\n  );\n}\n\nfunction ConditionalExample(props: any) {\n  const { count, setCount } = props;\n\n  return (\n    <div>\n      <p>Update {count}</p>\n      <button onClick={() => setCount(count + 1)}>Update Prop</button>\n\n      <p>Action log should only fire once</p>\n\n      <UseCallback\n        fn={() => {\n          action('ConditionalCallback')(`You clicked ${count} times`);\n        }}\n        inputs={[]}\n      />\n    </div>\n  );\n}\n\nconst AlwaysCallbackDemo = withState('count', 'setCount', 0)(Example);\nconst ConditionalCallbackDemo = withState('count', 'setCount', 0)(ConditionalExample);\n\nstoriesOf('1. Core|UseCallback', module)\n  .add('Always Callback', () => <AlwaysCallbackDemo />)\n  .add('Conditional Callback', () => <ConditionalCallbackDemo />);\n",exports.__ADDS_MAP__={"1-core-usecallback--conditional-callback":{startLoc:{col:7,line:49},endLoc:{col:64,line:49}},"1-core-usecallback--always-callback":{startLoc:{col:7,line:48},endLoc:{col:54,line:48}}};var react_1=__importDefault(__webpack_require__(8)),react_2=__webpack_require__(24),addon_actions_1=__webpack_require__(165),withState_1=__importDefault(__webpack_require__(54)),UseCallback_1=__importDefault(__webpack_require__(177));var AlwaysCallbackDemo=withState_1.default("count","setCount",0)(function Example(props){var count=props.count,setCount=props.setCount;return react_1.default.createElement("div",null,react_1.default.createElement("p",null,"Update ",count),react_1.default.createElement("button",{onClick:function(){return setCount(count+1)}},"Update Prop"),react_1.default.createElement(UseCallback_1.default,{fn:function(){addon_actions_1.action("AlwaysCallback")("You clicked "+count+" times")}}))}),ConditionalCallbackDemo=withState_1.default("count","setCount",0)(function ConditionalExample(props){var count=props.count,setCount=props.setCount;return react_1.default.createElement("div",null,react_1.default.createElement("p",null,"Update ",count),react_1.default.createElement("button",{onClick:function(){return setCount(count+1)}},"Update Prop"),react_1.default.createElement("p",null,"Action log should only fire once"),react_1.default.createElement(UseCallback_1.default,{fn:function(){addon_actions_1.action("ConditionalCallback")("You clicked "+count+" times")},inputs:[]}))});react_2.storiesOf("1. Core|UseCallback",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("Always Callback",function(){return react_1.default.createElement(AlwaysCallbackDemo,null)}).add("Conditional Callback",function(){return react_1.default.createElement(ConditionalCallbackDemo,null)})}).call(this,__webpack_require__(12)(module))},400:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(53).withStorySource,exports.__STORY__="import React, { Fragment } from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport withState from './withState';\nimport UseEffect from '../src/UseEffect';\n\nfunction Example(props: any) {\n  const { count, setCount } = props;\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n\n      <UseEffect\n        fn={() => {\n          action('EffectsWithoutCleanup')(`You clicked ${count} times`);\n        }}\n      />\n    </div>\n  );\n}\n\nconst EffectsWithoutCleanupDemo = withState('count', 'setCount', 0)(Example);\n\nconst ChatAPI = {\n  subscribeToFriendStatus: (id: number, handleStatusChange: Function) => {\n    action('EffectsWithCleanup')(`Subscribed ${id}`);\n    handleStatusChange({ isOnline: true });\n  },\n  unsubscribeFromFriendStatus: (id: number, handleStatusChange: Function) => {\n    action('EffectsWithCleanup')(`Unsubscribed ${id}`);\n    handleStatusChange({ isOnline: false });\n  },\n};\n\nfunction FriendStatus(props: any) {\n  const { isOnline, setIsOnline } = props;\n  return (\n    <Fragment>\n      {isOnline === null ? 'Loading' : isOnline ? 'Online' : 'Offline'}\n\n      <UseEffect\n        fn={() => {\n          function handleStatusChange(status) {\n            setIsOnline(status.isOnline);\n          }\n\n          ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\n          // Specify how to clean up after this effect:\n          return function cleanup() {\n            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\n          };\n        }}\n        inputs={[props.friend.id]}\n      />\n    </Fragment>\n  );\n}\n\nconst EffectsWithCleanup = withState('isOnline', 'setIsOnline', null)(FriendStatus);\n\nconst EffectsWithCleanupDemo = withState('friendID', 'setFriendID', 1)(props => {\n  return (\n    <Fragment>\n      <EffectsWithCleanup friend={{ id: props.friendID }} />\n      <label>Friend ID</label>\n      <br />\n      <input value={props.friendID} onChange={evt => props.setFriendID(evt.target.value)} type=\"number\" />\n    </Fragment>\n  );\n});\n\nstoriesOf('1. Core|UseEffect', module)\n  .add('Effects Without Cleanup', () => <EffectsWithoutCleanupDemo />)\n  .add('Effects With Cleanup', () => <EffectsWithCleanupDemo />);\n",exports.__ADDS_MAP__={"1-core-useeffect--effects-with-cleanup":{startLoc:{col:7,line:76},endLoc:{col:63,line:76}},"1-core-useeffect--effects-without-cleanup":{startLoc:{col:7,line:75},endLoc:{col:69,line:75}}};var react_1=__importStar(__webpack_require__(8)),react_2=__webpack_require__(24),addon_actions_1=__webpack_require__(165),withState_1=__importDefault(__webpack_require__(54)),UseEffect_1=__importDefault(__webpack_require__(78));var EffectsWithoutCleanupDemo=withState_1.default("count","setCount",0)(function Example(props){var count=props.count,setCount=props.setCount;return react_1.default.createElement("div",null,react_1.default.createElement("p",null,"You clicked ",count," times"),react_1.default.createElement("button",{onClick:function(){return setCount(count+1)}},"Click me"),react_1.default.createElement(UseEffect_1.default,{fn:function(){addon_actions_1.action("EffectsWithoutCleanup")("You clicked "+count+" times")}}))}),ChatAPI={subscribeToFriendStatus:function(id,handleStatusChange){addon_actions_1.action("EffectsWithCleanup")("Subscribed "+id),handleStatusChange({isOnline:!0})},unsubscribeFromFriendStatus:function(id,handleStatusChange){addon_actions_1.action("EffectsWithCleanup")("Unsubscribed "+id),handleStatusChange({isOnline:!1})}};var EffectsWithCleanup=withState_1.default("isOnline","setIsOnline",null)(function FriendStatus(props){var isOnline=props.isOnline,setIsOnline=props.setIsOnline;return react_1.default.createElement(react_1.Fragment,null,null===isOnline?"Loading":isOnline?"Online":"Offline",react_1.default.createElement(UseEffect_1.default,{fn:function(){function handleStatusChange(status){setIsOnline(status.isOnline)}return ChatAPI.subscribeToFriendStatus(props.friend.id,handleStatusChange),function cleanup(){ChatAPI.unsubscribeFromFriendStatus(props.friend.id,handleStatusChange)}},inputs:[props.friend.id]}))}),EffectsWithCleanupDemo=withState_1.default("friendID","setFriendID",1)(function(props){return react_1.default.createElement(react_1.Fragment,null,react_1.default.createElement(EffectsWithCleanup,{friend:{id:props.friendID}}),react_1.default.createElement("label",null,"Friend ID"),react_1.default.createElement("br",null),react_1.default.createElement("input",{value:props.friendID,onChange:function(evt){return props.setFriendID(evt.target.value)},type:"number"}))});react_2.storiesOf("1. Core|UseEffect",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("Effects Without Cleanup",function(){return react_1.default.createElement(EffectsWithoutCleanupDemo,null)}).add("Effects With Cleanup",function(){return react_1.default.createElement(EffectsWithCleanupDemo,null)})}).call(this,__webpack_require__(12)(module))},401:function(module,exports,__webpack_require__){"use strict";(function(module){var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(53).withStorySource,exports.__STORY__="import React, { Fragment } from 'react';\nimport { storiesOf } from '@storybook/react';\nimport withState from './withState';\nimport UseGeolocation from '../src/UseGeolocation';\nimport compose from './compose';\n\nfunction Example(props: any) {\n  const { mounted, setMounted, state, setState } = props;\n\n  return (\n    <div>\n      <p>Result:</p>\n      <pre>{JSON.stringify(state, null, 2)}</pre>\n\n      {!mounted && (\n        <Fragment>\n          <button onClick={() => setMounted(true)}>Mount the component.</button>\n          <p>Upon mounting, the browser will ask for geolocation permissions</p>\n        </Fragment>\n      )}\n\n      {mounted && (\n        <UseGeolocation\n          fn={(error, data) => {\n            setState({\n              data,\n              error,\n            });\n          }}\n          watch={props.watch}\n        />\n      )}\n    </div>\n  );\n}\n\nconst Demo = compose(\n  withState('mounted', 'setMounted', false),\n  withState('state', 'setState', {})\n)(Example);\n\nstoriesOf('2. Additional|UseGeolocation', module)\n  .add('No Watcher', () => <Demo />)\n  .add('With Watcher', () => (\n    <Fragment>\n      <Demo watch />\n      <p>\n        <strong>Note:</strong> You'll need to use your browser devtools sensors to simulate location changes.\n      </p>\n    </Fragment>\n  ));\n",exports.__ADDS_MAP__={"2-additional-usegeolocation--with-watcher":{startLoc:{col:7,line:44},endLoc:{col:3,line:51}},"2-additional-usegeolocation--no-watcher":{startLoc:{col:7,line:43},endLoc:{col:35,line:43}}};var react_1=__importStar(__webpack_require__(8)),react_2=__webpack_require__(24),withState_1=__importDefault(__webpack_require__(54)),UseGeolocation_1=__importDefault(__webpack_require__(402));var Demo=__importDefault(__webpack_require__(403)).default(withState_1.default("mounted","setMounted",!1),withState_1.default("state","setState",{}))(function Example(props){var mounted=props.mounted,setMounted=props.setMounted,state=props.state,setState=props.setState;return react_1.default.createElement("div",null,react_1.default.createElement("p",null,"Result:"),react_1.default.createElement("pre",null,JSON.stringify(state,null,2)),!mounted&&react_1.default.createElement(react_1.Fragment,null,react_1.default.createElement("button",{onClick:function(){return setMounted(!0)}},"Mount the component."),react_1.default.createElement("p",null,"Upon mounting, the browser will ask for geolocation permissions")),mounted&&react_1.default.createElement(UseGeolocation_1.default,{fn:function(error,data){setState({data:data,error:error})},watch:props.watch}))});react_2.storiesOf("2. Additional|UseGeolocation",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("No Watcher",function(){return react_1.default.createElement(Demo,null)}).add("With Watcher",function(){return react_1.default.createElement(react_1.Fragment,null,react_1.default.createElement(Demo,{watch:!0}),react_1.default.createElement("p",null,react_1.default.createElement("strong",null,"Note:")," You'll need to use your browser devtools sensors to simulate location changes."))})}).call(this,__webpack_require__(12)(module))},402:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(8)),UseEffect_1=__importDefault(__webpack_require__(78)),UseGeolocation=function(_super){function UseGeolocation(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.handleSuccess=function(evt){_this.props.fn(null,{coords:{accuracy:evt.coords.accuracy,altitude:evt.coords.altitude,altitudeAccuracy:evt.coords.altitudeAccuracy,heading:evt.coords.heading,latitude:evt.coords.latitude,longitude:evt.coords.longitude,speed:evt.coords.speed},timestamp:evt.timestamp})},_this.handleError=function(err){_this.props.fn(err,null)},_this}return __extends(UseGeolocation,_super),UseGeolocation.prototype.render=function(){var _this=this;return react_1.default.createElement(UseEffect_1.default,{fn:function(){var watchID,_a=_this.props,_b=_a.watch,watch=void 0!==_b&&_b,_c=_a.options,options=void 0===_c?{}:_c;return navigator.geolocation.getCurrentPosition(_this.handleSuccess,_this.handleError,options),watch&&(watchID=navigator.geolocation.watchPosition(_this.handleSuccess,_this.handleError,options)),function(){navigator.geolocation.clearWatch(watchID)}},inputs:[],comparator:this.props.comparator})},UseGeolocation}(react_1.default.Component);exports.default=UseGeolocation},403:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){for(var hocs=[],_i=0;_i<arguments.length;_i++)hocs[_i]=arguments[_i];return function(BaseComponent){return hocs.reduceRight(function(a,b){return b(a)},BaseComponent)}}},404:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(53).withStorySource,exports.__STORY__="import React, { Fragment } from 'react';\nimport { storiesOf } from '@storybook/react';\nimport withState from './withState';\nimport UseInterval from '../src/UseInterval';\n\nfunction Example(props: any) {\n  const { count, setCount } = props;\n  const time = 1000;\n\n  return (\n    <div>\n      <p>{`Count: ${count}`}</p>\n      <p>{`(updates every ${time}ms)`}</p>\n\n      <UseInterval\n        fn={() => {\n          setCount(count + 1);\n        }}\n        time={time}\n      />\n    </div>\n  );\n}\n\nconst Demo = withState('count', 'setCount', 0)(Example);\n\nstoriesOf('2. Additional|UseInterval', module).add('Timer', () => <Demo />);\n",exports.__ADDS_MAP__={"2-additional-useinterval--timer":{startLoc:{col:51,line:27},endLoc:{col:74,line:27}}};var react_1=__importDefault(__webpack_require__(8)),react_2=__webpack_require__(24),withState_1=__importDefault(__webpack_require__(54)),UseInterval_1=__importDefault(__webpack_require__(405));var Demo=withState_1.default("count","setCount",0)(function Example(props){var count=props.count,setCount=props.setCount;return react_1.default.createElement("div",null,react_1.default.createElement("p",null,"Count: "+count),react_1.default.createElement("p",null,"(updates every 1000ms)"),react_1.default.createElement(UseInterval_1.default,{fn:function(){setCount(count+1)},time:1e3}))});react_2.storiesOf("2. Additional|UseInterval",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("Timer",function(){return react_1.default.createElement(Demo,null)})}).call(this,__webpack_require__(12)(module))},405:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(8)),UseEffect_1=__importDefault(__webpack_require__(78)),UseInterval=function(_super){function UseInterval(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.run=function(){_this.props.fn()},_this}return __extends(UseInterval,_super),UseInterval.prototype.render=function(){var _this=this;return react_1.default.createElement(UseEffect_1.default,{fn:function(){var t=setInterval(_this.run,_this.props.time);return function(){clearInterval(t)}},inputs:[],comparator:this.props.comparator})},UseInterval}(react_1.default.Component);exports.default=UseInterval},406:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(53).withStorySource,exports.__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport withState from './withState';\nimport UseTimeout from '../src/UseTimeout';\n\nfunction Example(props: any) {\n  const { state, setState } = props;\n  const time = 5000;\n\n  return (\n    <div>\n      <p>{`Called: ${state}`}</p>\n      <p>{`(updates to \"yes\" after ${time}ms)`}</p>\n\n      <UseTimeout\n        fn={() => {\n          setState('yes');\n        }}\n        time={time}\n      />\n    </div>\n  );\n}\n\nconst Demo = withState('state', 'setState', 'no')(Example);\n\nstoriesOf('2. Additional|UseTimeout', module).add('Timer', () => <Demo />);\n",exports.__ADDS_MAP__={"2-additional-usetimeout--timer":{startLoc:{col:50,line:27},endLoc:{col:73,line:27}}};var react_1=__importDefault(__webpack_require__(8)),react_2=__webpack_require__(24),withState_1=__importDefault(__webpack_require__(54)),UseTimeout_1=__importDefault(__webpack_require__(407));var Demo=withState_1.default("state","setState","no")(function Example(props){var state=props.state,setState=props.setState;return react_1.default.createElement("div",null,react_1.default.createElement("p",null,"Called: "+state),react_1.default.createElement("p",null,'(updates to "yes" after 5000ms)'),react_1.default.createElement(UseTimeout_1.default,{fn:function(){setState("yes")},time:5e3}))});react_2.storiesOf("2. Additional|UseTimeout",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("Timer",function(){return react_1.default.createElement(Demo,null)})}).call(this,__webpack_require__(12)(module))},407:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(8)),UseEffect_1=__importDefault(__webpack_require__(78)),UseTimeout=function(_super){function UseTimeout(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.run=function(){_this.props.fn()},_this}return __extends(UseTimeout,_super),UseTimeout.prototype.render=function(){var _this=this;return react_1.default.createElement(UseEffect_1.default,{fn:function(){var t=setTimeout(_this.run,_this.props.time);return function(){clearTimeout(t)}},inputs:[],comparator:this.props.comparator})},UseTimeout}(react_1.default.Component);exports.default=UseTimeout},54:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(8));exports.default=function(stateName,stateUpdaterName,initialState){return function(BaseComponent){return function(_super){function HOCWithState(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.state={stateValue:initialState},_this.updateStateValue=function(value,callback){_this.setState(function(){return{stateValue:value}},callback)},_this}return __extends(HOCWithState,_super),HOCWithState.prototype.render=function(){var _a,props=__assign({},this.props,((_a={})[stateName]=this.state.stateValue,_a[stateUpdaterName]=this.updateStateValue,_a));return react_1.default.createElement(BaseComponent,__assign({},props))},HOCWithState}(react_1.default.Component)}}},78:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(8)),UseCallback_1=__importDefault(__webpack_require__(177)),utils_1=__webpack_require__(178),UseEffect=function(_super){function UseEffect(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.unsub=utils_1.noop,_this.callback=function(){_this.unsub(),_this.unsub=_this.props.fn()||utils_1.noop},_this}return __extends(UseEffect,_super),UseEffect.prototype.componentWillUnmount=function(){this.unsub()},UseEffect.prototype.render=function(){return React.createElement(UseCallback_1.default,{fn:this.callback,inputs:this.props.inputs,comparator:this.props.comparator})},UseEffect}(React.Component);exports.default=UseEffect}},[[180,1,2]]]);
//# sourceMappingURL=main.861b945ced0a1da20d9f.bundle.js.map