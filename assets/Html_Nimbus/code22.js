gdjs._526_95Infusing_95168hCode = {};
gdjs._526_95Infusing_95168hCode.GDRestartObjects1= [];
gdjs._526_95Infusing_95168hCode.GDRestartObjects2= [];
gdjs._526_95Infusing_95168hCode.GDRestartObjects3= [];
gdjs._526_95Infusing_95168hCode.GDBolusObjects1= [];
gdjs._526_95Infusing_95168hCode.GDBolusObjects2= [];
gdjs._526_95Infusing_95168hCode.GDBolusObjects3= [];
gdjs._526_95Infusing_95168hCode.GDDeviceObjects1= [];
gdjs._526_95Infusing_95168hCode.GDDeviceObjects2= [];
gdjs._526_95Infusing_95168hCode.GDDeviceObjects3= [];
gdjs._526_95Infusing_95168hCode.GDPowerOnOffObjects1= [];
gdjs._526_95Infusing_95168hCode.GDPowerOnOffObjects2= [];
gdjs._526_95Infusing_95168hCode.GDPowerOnOffObjects3= [];
gdjs._526_95Infusing_95168hCode.GDInfoObjects1= [];
gdjs._526_95Infusing_95168hCode.GDInfoObjects2= [];
gdjs._526_95Infusing_95168hCode.GDInfoObjects3= [];
gdjs._526_95Infusing_95168hCode.GDDownObjects1= [];
gdjs._526_95Infusing_95168hCode.GDDownObjects2= [];
gdjs._526_95Infusing_95168hCode.GDDownObjects3= [];
gdjs._526_95Infusing_95168hCode.GDUpObjects1= [];
gdjs._526_95Infusing_95168hCode.GDUpObjects2= [];
gdjs._526_95Infusing_95168hCode.GDUpObjects3= [];
gdjs._526_95Infusing_95168hCode.GDOKObjects1= [];
gdjs._526_95Infusing_95168hCode.GDOKObjects2= [];
gdjs._526_95Infusing_95168hCode.GDOKObjects3= [];
gdjs._526_95Infusing_95168hCode.GDRunStopObjects1= [];
gdjs._526_95Infusing_95168hCode.GDRunStopObjects2= [];
gdjs._526_95Infusing_95168hCode.GDRunStopObjects3= [];
gdjs._526_95Infusing_95168hCode.GDScreenObjects1= [];
gdjs._526_95Infusing_95168hCode.GDScreenObjects2= [];
gdjs._526_95Infusing_95168hCode.GDScreenObjects3= [];

gdjs._526_95Infusing_95168hCode.conditionTrue_0 = {val:false};
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0 = {val:false};
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0 = {val:false};
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0 = {val:false};
gdjs._526_95Infusing_95168hCode.condition3IsTrue_0 = {val:false};
gdjs._526_95Infusing_95168hCode.condition4IsTrue_0 = {val:false};
gdjs._526_95Infusing_95168hCode.conditionTrue_1 = {val:false};
gdjs._526_95Infusing_95168hCode.condition0IsTrue_1 = {val:false};
gdjs._526_95Infusing_95168hCode.condition1IsTrue_1 = {val:false};
gdjs._526_95Infusing_95168hCode.condition2IsTrue_1 = {val:false};
gdjs._526_95Infusing_95168hCode.condition3IsTrue_1 = {val:false};
gdjs._526_95Infusing_95168hCode.condition4IsTrue_1 = {val:false};


gdjs._526_95Infusing_95168hCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs._526_95Infusing_95168hCode.GDScreenObjects1 */

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i].hasAnimationEnded() ) {
        gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = true;
        gdjs._526_95Infusing_95168hCode.GDScreenObjects1[k] = gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length = k;}if (gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95168hCode.GDRunStopObjects1});gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95168hCode.GDRunStopObjects1});gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95168hCode.GDRunStopObjects1});gdjs._526_95Infusing_95168hCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-168Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(41).setNumber(-(1));
}{runtimeScene.getGame().getVariables().getFromIndex(42).setNumber(0);
}}

}


{


{
}

}


{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition0IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53894628);
}
}if (gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "", false, 100, 1);
}}

}


};gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95168hCode.GDRunStopObjects1});gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._526_95Infusing_95168hCode.GDInfoObjects1});gdjs._526_95Infusing_95168hCode.eventsList2 = function(runtimeScene) {

{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition1IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53898316);
}
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(-(13));
}}

}


{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(13);
}if ( gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition2IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53899284);
}
}}
}
if (gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Titration_ShiftTotals", true);
}}

}


};gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs._526_95Infusing_95168hCode.GDRestartObjects1});gdjs._526_95Infusing_95168hCode.eventsList3 = function(runtimeScene) {

{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition1IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition2IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val) {
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


};gdjs._526_95Infusing_95168hCode.eventsList4 = function(runtimeScene) {

{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition1IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53878572);
}
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(1);
}}

}


{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) == 168;
}if ( gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition2IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53879324);
}
}}
}
if (gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95168hCode.GDScreenObjects1);
{for(var i = 0, len = gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i].setAnimationName("RunScreen");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95168hCode.GDScreenObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i].isCurrentAnimationName("RunScreen") ) {
        gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = true;
        gdjs._526_95Infusing_95168hCode.GDScreenObjects1[k] = gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length = k;}if (gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95168hCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition1IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53882036);
}
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95168hCode.GDScreenObjects1);
{for(var i = 0, len = gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i].setAnimationName("InfusionComplete");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95168hCode.GDRunStopObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition3IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition3IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53885084);
}
}}
}
}
if (gdjs._526_95Infusing_95168hCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(168);
}{runtimeScene.getGame().getVariables().getFromIndex(38).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(168);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95168hCode.GDRunStopObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects, runtimeScene, true, true);
}if (gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95168hCode.GDRunStopObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Timer");
}if ( gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition2IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53888308);
}
}}
}
if (gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95168hCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95168hCode.GDRunStopObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition3IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(5);
}if ( gdjs._526_95Infusing_95168hCode.condition2IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95168hCode.conditionTrue_1 = gdjs._526_95Infusing_95168hCode.condition3IsTrue_0;
gdjs._526_95Infusing_95168hCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(53883740);
}
}}
}
}
if (gdjs._526_95Infusing_95168hCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95168hCode.GDScreenObjects1);
{for(var i = 0, len = gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._526_95Infusing_95168hCode.GDScreenObjects1[i].setAnimationName("RunScreen");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._526_95Infusing_95168hCode.GDInfoObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(40)) == 1;
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95168hCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs._526_95Infusing_95168hCode.GDRestartObjects1);

gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95168hCode.mapOfGDgdjs_46_95526_9595Infusing_9595168hCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95168hCode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs._526_95Infusing_95168hCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95168hCode.eventsList3(runtimeScene);} //End of subevents
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


};

gdjs._526_95Infusing_95168hCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._526_95Infusing_95168hCode.GDRestartObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDRestartObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDRestartObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDBolusObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDBolusObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDBolusObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDDeviceObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDDeviceObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDDeviceObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDPowerOnOffObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDPowerOnOffObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDPowerOnOffObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDInfoObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDInfoObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDInfoObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDDownObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDDownObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDDownObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDUpObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDUpObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDUpObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDOKObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDOKObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDOKObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDRunStopObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDRunStopObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDRunStopObjects3.length = 0;
gdjs._526_95Infusing_95168hCode.GDScreenObjects1.length = 0;
gdjs._526_95Infusing_95168hCode.GDScreenObjects2.length = 0;
gdjs._526_95Infusing_95168hCode.GDScreenObjects3.length = 0;

gdjs._526_95Infusing_95168hCode.eventsList4(runtimeScene);
return;

}

gdjs['_526_95Infusing_95168hCode'] = gdjs._526_95Infusing_95168hCode;
