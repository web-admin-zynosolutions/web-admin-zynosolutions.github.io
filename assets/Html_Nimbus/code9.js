gdjs._497_95CurrentRx_9546hCode = {};
gdjs._497_95CurrentRx_9546hCode.GDRestartObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDRestartObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDRestartObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDBolusObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDBolusObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDBolusObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDDeviceObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDDeviceObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDDeviceObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDPowerOnOffObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDPowerOnOffObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDPowerOnOffObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDInfoObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDInfoObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDDownObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDDownObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDDownObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDUpObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDUpObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDUpObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDOKObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDOKObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDOKObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects3= [];
gdjs._497_95CurrentRx_9546hCode.GDTestObjects1= [];
gdjs._497_95CurrentRx_9546hCode.GDTestObjects2= [];
gdjs._497_95CurrentRx_9546hCode.GDTestObjects3= [];

gdjs._497_95CurrentRx_9546hCode.conditionTrue_0 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition4IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_9546hCode.condition4IsTrue_1 = {val:false};


gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs._497_95CurrentRx_9546hCode.GDRestartObjects1});gdjs._497_95CurrentRx_9546hCode.eventsList0 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
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


};gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9546hCode.GDOKObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9546hCode.eventsList1 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49826604);
}
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(131);
}}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 131;
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49827636);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_46h", true);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(46);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects2Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9546hCode.GDOKObjects2});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_9546hCode.GDDownObjects1});gdjs._497_95CurrentRx_9546hCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9546hCode.GDOKObjects2);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49829052);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_9546hCode.GDDownObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49833148);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9546hCode.GDOKObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_9546hCode.GDDownObjects1});gdjs._497_95CurrentRx_9546hCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49835588);
}
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(999);
}}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 999;
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49836684);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_9546hCode.GDDownObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49839892);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9546hCode.GDOKObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_9546hCode.GDDownObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects1});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs._497_95CurrentRx_9546hCode.GDUpObjects2});gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_9546hCode.GDOKObjects1});gdjs._497_95CurrentRx_9546hCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs._497_95CurrentRx_9546hCode.GDUpObjects2);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49849660);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects2);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects2[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9546hCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].isCurrentAnimationName("NewInfusion") ) {
        gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = true;
        gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[k] = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length = k;}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49852564);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", false);
}}

}


};gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1});gdjs._497_95CurrentRx_9546hCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs._497_95CurrentRx_9546hCode.GDRestartObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9546hCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49808540);
}
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49810108);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(46);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(46);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9546hCode.GDOKObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49814052);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49816364);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49820292);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_46h", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 46;
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == -(1);
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49822036);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_1.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_1.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
if( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_1.val ) {
    gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = true;
}
}
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
if( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_1.val ) {
    gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9546hCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9546hCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9546hCode.GDOKObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9546hCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_9546hCode.GDOKObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49840476);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_9546hCode.GDDownObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49844540);
}
}}
}
if (gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49845124);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_46h", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_9546hCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1);

gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_9546hCode.mapOfGDgdjs_46_95497_9595CurrentRx_959546hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_9546hCode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49855420);
}
}}
}
}
if (gdjs._497_95CurrentRx_9546hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49857692);
}
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if ( gdjs._497_95CurrentRx_9546hCode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_9546hCode.conditionTrue_1 = gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0;
gdjs._497_95CurrentRx_9546hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49861308);
}
}}
if (gdjs._497_95CurrentRx_9546hCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_9546hCode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_9546hCode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}}

}


{


{
}

}


};

gdjs._497_95CurrentRx_9546hCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._497_95CurrentRx_9546hCode.GDRestartObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDRestartObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDRestartObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDBolusObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDBolusObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDBolusObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDDeviceObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDDeviceObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDDeviceObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDPowerOnOffObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDPowerOnOffObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDPowerOnOffObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDInfoObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDInfoObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDInfoObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDDownObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDDownObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDDownObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDUpObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDUpObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDUpObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDOKObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDOKObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDOKObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDRunStopObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDScreenObjects3.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDTestObjects1.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDTestObjects2.length = 0;
gdjs._497_95CurrentRx_9546hCode.GDTestObjects3.length = 0;

gdjs._497_95CurrentRx_9546hCode.eventsList5(runtimeScene);
return;

}

gdjs['_497_95CurrentRx_9546hCode'] = gdjs._497_95CurrentRx_9546hCode;
