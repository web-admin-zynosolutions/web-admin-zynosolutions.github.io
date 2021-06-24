gdjs._497_95CurrentRx_95VTIMECode = {};
gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDBolusObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDBolusObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDBolusObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDDeviceObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDDeviceObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDDeviceObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDPowerOnOffObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDPowerOnOffObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDPowerOnOffObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects3= [];
gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1= [];
gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2= [];
gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects3= [];

gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_0 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition4IsTrue_0 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_1 = {val:false};
gdjs._497_95CurrentRx_95VTIMECode.condition4IsTrue_1 = {val:false};


gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects1});gdjs._497_95CurrentRx_95VTIMECode.eventsList0 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
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


};gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1});gdjs._497_95CurrentRx_95VTIMECode.eventsList1 = function(runtimeScene) {

{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(48870828);
}
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(131);
}}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 131;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51783468);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_VTIME", true);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(89);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects2Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects2});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1});gdjs._497_95CurrentRx_95VTIMECode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects2);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(54867180);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50145404);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1});gdjs._497_95CurrentRx_95VTIMECode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50353172);
}
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(999);
}}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 999;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50422772);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50588188);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects1});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects2});gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1});gdjs._497_95CurrentRx_95VTIMECode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects2);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51789460);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects2[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].isCurrentAnimationName("NewInfusion") ) {
        gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = true;
        gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[k] = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length = k;}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52071124);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(1);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", false);
}}

}


};gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1});gdjs._497_95CurrentRx_95VTIMECode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95VTIMECode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50505564);
}
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(48).setNumber(0);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50718260);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(89);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(89);
}{runtimeScene.getGame().getVariables().getFromIndex(44).setNumber(1);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49735132);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", true);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49262436);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(45).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49047020);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_VTIME", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 89;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(44)) == -(1);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(48924500);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(44).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_1.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_1.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
if( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_1.val ) {
    gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = true;
}
}
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
if( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_1.val ) {
    gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95VTIMECode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95VTIMECode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects, runtimeScene, true, false);
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95VTIMECode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50815980);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(-(1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", true);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51124260);
}
}}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("NewInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51401188);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "46_Infusing_VTIME", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._497_95CurrentRx_95VTIMECode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1);

gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(2);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._497_95CurrentRx_95VTIMECode.mapOfGDgdjs_46_95497_9595CurrentRx_9595VTIMECode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val ) {
{
gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition2IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(52324340);
}
}}
}
}
if (gdjs._497_95CurrentRx_95VTIMECode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getGame().getVariables().getFromIndex(44).setNumber(0);
}}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(45)) == 1;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49123420);
}
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("ResumeInfusion");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = false;
gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val = false;
{
gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(45)) == 0;
}if ( gdjs._497_95CurrentRx_95VTIMECode.condition0IsTrue_0.val ) {
{
{gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1 = gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0;
gdjs._497_95CurrentRx_95VTIMECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53174460);
}
}}
if (gdjs._497_95CurrentRx_95VTIMECode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Test"), gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1);
{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1[i].setAnimationName("NewInfusionOnly");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length ;i < len;++i) {
    gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(45).setNumber(0);
}}

}


{


{
}

}


};

gdjs._497_95CurrentRx_95VTIMECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDRestartObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDBolusObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDBolusObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDBolusObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDDeviceObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDDeviceObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDDeviceObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDPowerOnOffObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDPowerOnOffObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDPowerOnOffObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDInfoObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDDownObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDUpObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDOKObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDRunStopObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDScreenObjects3.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects1.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects2.length = 0;
gdjs._497_95CurrentRx_95VTIMECode.GDTestObjects3.length = 0;

gdjs._497_95CurrentRx_95VTIMECode.eventsList5(runtimeScene);
return;

}

gdjs['_497_95CurrentRx_95VTIMECode'] = gdjs._497_95CurrentRx_95VTIMECode;
