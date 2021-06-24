gdjs._497_95CurrentRx_9596hCode = {};
gdjs._497_95CurrentRx_9596hCode.GDRestartObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDRestartObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDRestartObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDBolusObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDBolusObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDBolusObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDDeviceObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDDeviceObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDDeviceObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDPowerOnOffObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDPowerOnOffObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDPowerOnOffObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDInfoObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDInfoObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDDownObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDDownObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDDownObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDUpObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDUpObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDUpObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDOKObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDOKObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDOKObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects3= [];
gdjs._497_95CurrentRx_9596hCode.GDTestObjects1= [];
gdjs._497_95CurrentRx_9596hCode.GDTestObjects2= [];
gdjs._497_95CurrentRx_9596hCode.GDTestObjects3= [];

gdjs._497_95CurrentRx_9596hCode.conditionTrue_0 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition4IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9596hCode.condition4IsTrue_1 = {val:false};


gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs._497_95CurrentRx_9596hCode.GDRestartObjects1});gdjs._497_95CurrentRx_9596hCode.eventsList0 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
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


};gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9596hCode.GDOKObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9596hCode.eventsList1 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52856196);
}
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(131);
}}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 131;
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52857228);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_96h", true);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(96);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects2Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9596hCode.GDOKObjects2});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_9596hCode.GDDownObjects1});gdjs._497_95CurrentRx_9596hCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9596hCode.GDOKObjects2);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52858644);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_9596hCode.GDDownObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52862740);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9596hCode.GDOKObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_9596hCode.GDDownObjects1});gdjs._497_95CurrentRx_9596hCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52865180);
}
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(999);
}}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 999;
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52866276);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_9596hCode.GDDownObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52869484);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9596hCode.GDOKObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_9596hCode.GDDownObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects1});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs._497_95CurrentRx_9596hCode.GDUpObjects2});gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9596hCode.GDOKObjects1});gdjs._497_95CurrentRx_9596hCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs._497_95CurrentRx_9596hCode.GDUpObjects2);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52879252);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects2);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects2[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9596hCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].isCurrentAnimationName("NewInfusion") ) {
        gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = true;
        gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[k] = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length = k;}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52882156);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(1);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", false);
}}

}


};gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9596hCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs._497_95CurrentRx_9596hCode.GDRestartObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9596hCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52838132);
}
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(0);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52839700);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(96);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(96);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(1);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9596hCode.GDOKObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52843644);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52845956);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52849884);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_96h", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 96;
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == -(1);
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52851628);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_1.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_1.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
if( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_1.val ) {
    gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = true;
}
}
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
if( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_1.val ) {
    gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9596hCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9596hCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9596hCode.GDOKObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9596hCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9596hCode.GDOKObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52870068);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_9596hCode.GDDownObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52874132);
}
}}
}
if (gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52874716);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_96h", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9596hCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9596hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959596hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9596hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52885012);
}
}}
}
}
if (gdjs._497_95CurrentRx_9596hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(0);
}}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)) == 1;
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52887284);
}
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)) == 0;
}if ( gdjs._497_95CurrentRx_9596hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9596hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9596hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52890900);
}
}}
if (gdjs._497_95CurrentRx_9596hCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9596hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9596hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(0);
}}

}


{


{
}

}


};

gdjs._497_95CurrentRx_9596hCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._497_95CurrentRx_9596hCode.GDRestartObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDRestartObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDRestartObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDBolusObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDBolusObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDBolusObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDDeviceObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDDeviceObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDDeviceObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDPowerOnOffObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDPowerOnOffObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDPowerOnOffObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDInfoObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDInfoObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDInfoObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDDownObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDDownObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDDownObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDUpObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDUpObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDUpObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDOKObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDOKObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDOKObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDRunStopObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDScreenObjects3.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDTestObjects1.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDTestObjects2.length = 0;
gdjs._497_95CurrentRx_9596hCode.GDTestObjects3.length = 0;

gdjs._497_95CurrentRx_9596hCode.eventsList5(runtimeScene);
return;

}

gdjs['_497_95CurrentRx_9596hCode'] = gdjs._497_95CurrentRx_9596hCode;
