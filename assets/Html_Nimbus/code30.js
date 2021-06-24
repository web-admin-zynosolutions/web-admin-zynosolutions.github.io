gdjs._497_95CurrentRx_95RVTBICode = {};
gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDBolusObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDBolusObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDBolusObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDDeviceObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDDeviceObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDDeviceObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDPowerOnOffObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDPowerOnOffObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDPowerOnOffObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects3= [];
gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1= [];
gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2= [];
gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects3= [];

gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_0 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition4IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95RVTBICode.condition4IsTrue_1 = {val:false};


gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects1});gdjs._497_95CurrentRx_95RVTBICode.eventsList0 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(41).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(24).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(28).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(42).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(45).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(46).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(48).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(51).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(52).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(54).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}}

}


};gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1});gdjs._497_95CurrentRx_95RVTBICode.eventsList1 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89549628);
}
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(131);
}}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 131;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89550404);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_RVTBI", true);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(99);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects2Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects2});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1});gdjs._497_95CurrentRx_95RVTBICode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects2);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89552676);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89554828);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1});gdjs._497_95CurrentRx_95RVTBICode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89556908);
}
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(999);
}}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 999;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89558044);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89560140);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects1});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects2});gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1});gdjs._497_95CurrentRx_95RVTBICode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects2);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89567700);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects2[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].isCurrentAnimationName("NewInfusion") ) {
        gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = true;
        gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[k] = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length = k;}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89569852);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(1);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", false);
}}

}


};gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1});gdjs._497_95CurrentRx_95RVTBICode.eventsList5 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89536524);
}
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(54).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95RVTBICode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89538468);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(99);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(99);
}{runtimeScene.getGame().getVariables().getFromIndex(50).setNumber(1);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89541076);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89542876);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(51).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89544948);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_RVTBI", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 99;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(50)) == -(1);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89545980);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(50).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_1.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_1.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
if( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_1.val ) {
    gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = true;
}
}
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
if( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_1.val ) {
    gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95RVTBICode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95RVTBICode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95RVTBICode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89561796);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89563180);
}
}}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89565924);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_RVTBI", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95RVTBICode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1);

gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95RVTBICode.mapOfGDgdjs_46_95497_9595CurrentRx_9595RVTBICode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89571804);
}
}}
}
}
if (gdjs._497_95CurrentRx_95RVTBICode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getGame().getVariables().getFromIndex(50).setNumber(0);
}}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(51)) == 1;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89573740);
}
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(51)) == 0;
}if ( gdjs._497_95CurrentRx_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1 = gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89575132);
}
}}
if (gdjs._497_95CurrentRx_95RVTBICode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(51).setNumber(0);
}}

}


{


{
}

}


};

gdjs._497_95CurrentRx_95RVTBICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDRestartObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDBolusObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDBolusObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDBolusObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDDeviceObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDDeviceObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDDeviceObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDPowerOnOffObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDPowerOnOffObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDPowerOnOffObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDInfoObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDDownObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDUpObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDOKObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDRunStopObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDScreenObjects3.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects1.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects2.length = 0;
gdjs._497_95CurrentRx_95RVTBICode.GDTestObjects3.length = 0;

gdjs._497_95CurrentRx_95RVTBICode.eventsList5(runtimeScene);
return;

}

gdjs['_497_95CurrentRx_95RVTBICode'] = gdjs._497_95CurrentRx_95RVTBICode;
