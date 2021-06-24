gdjs.evtsExt__DoubleClick__DoubleClickCondition = {};

gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition5IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition5IsTrue_1 = {val:false};


gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_LeftClickTimer");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89618044);
}
}}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "_DBLCLICKEXT_LeftClickTimer");
}{runtimeScene.getVariables().get("_DBLCLICKEXT_LeftCount").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89619500);
}
}}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("_DBLCLICKEXT_LeftReleased").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_LeftClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_LeftCount")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_LeftReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89621180);
}
}}
}
}
}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "_DBLCLICKEXT_LeftClickTimer");
}{runtimeScene.getVariables().get("_DBLCLICKEXT_LeftCount").add(1);
}{runtimeScene.getVariables().get("_DBLCLICKEXT_LeftReleased").setNumber(1);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_LeftClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_LeftCount")) == 1;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_LeftReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89623260);
}
}}
}
}
}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{runtimeScene.getVariables().get("_DBLCLICKEXT_LeftReleased").setNumber(1);
}}

}


};gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_MiddleClickTimer");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89624524);
}
}}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "_DBLCLICKEXT_MiddleClickTimer");
}{runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleCount").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Middle");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89626092);
}
}}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleReleased").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_MiddleClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleCount")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89627780);
}
}}
}
}
}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "_DBLCLICKEXT_MiddleClickTimer");
}{runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleCount").add(1);
}{runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleReleased").setNumber(1);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_MiddleClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleCount")) == 1;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89629868);
}
}}
}
}
}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{runtimeScene.getVariables().get("_DBLCLICKEXT_MiddleReleased").setNumber(1);
}}

}


};gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_RightClickTimer");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89631148);
}
}}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "_DBLCLICKEXT_RightClickTimer");
}{runtimeScene.getVariables().get("_DBLCLICKEXT_RightCount").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89632716);
}
}}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("_DBLCLICKEXT_RightReleased").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_RightClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_RightCount")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_RightReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89634404);
}
}}
}
}
}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "_DBLCLICKEXT_RightClickTimer");
}{runtimeScene.getVariables().get("_DBLCLICKEXT_RightCount").add(1);
}{runtimeScene.getVariables().get("_DBLCLICKEXT_RightReleased").setNumber(1);
}}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ClickTimer")) || 0 : 0), "_DBLCLICKEXT_RightClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_RightCount")) == 1;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("_DBLCLICKEXT_RightReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition3IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(89636492);
}
}}
}
}
}
if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition4IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{runtimeScene.getVariables().get("_DBLCLICKEXT_RightReleased").setNumber(1);
}}

}


};gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MouseButton") : "") == "Left");
}
}if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MouseButton") : "") == "Middle");
}
}if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1 = gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0;
gdjs.evtsExt__DoubleClick__DoubleClickCondition.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MouseButton") : "") == "Right");
}
}if (gdjs.evtsExt__DoubleClick__DoubleClickCondition.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DoubleClick__DoubleClickCondition.func = function(runtimeScene, ClickTimer, MouseButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ClickTimer") return ClickTimer;
if (argName === "MouseButton") return MouseButton;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleClick__DoubleClickCondition.eventsList3(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

