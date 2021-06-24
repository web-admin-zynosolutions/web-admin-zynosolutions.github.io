gdjs._526_95Infusing_95RVTBICode = {};
gdjs._526_95Infusing_95RVTBICode.GDRestartObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDRestartObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDRestartObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDBolusObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDBolusObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDBolusObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDDeviceObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDDeviceObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDDeviceObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDPowerOnOffObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDPowerOnOffObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDPowerOnOffObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDInfoObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDInfoObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDInfoObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDDownObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDDownObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDDownObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDUpObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDUpObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDUpObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDOKObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDOKObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDOKObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects3= [];
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1= [];
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects2= [];
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects3= [];

gdjs._526_95Infusing_95RVTBICode.conditionTrue_0 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition4IsTrue_0 = {val:false};
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_1 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_1 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_1 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_1 = {val:false};
gdjs._526_95Infusing_95RVTBICode.condition4IsTrue_1 = {val:false};


gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs._526_95Infusing_95RVTBICode.GDRestartObjects1});gdjs._526_95Infusing_95RVTBICode.eventsList0 = function(runtimeScene) {

{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val) {
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


};gdjs._526_95Infusing_95RVTBICode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1 */

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i].hasAnimationEnded() ) {
        gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = true;
        gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[k] = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length = k;}if (gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1});gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1});gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1});gdjs._526_95Infusing_95RVTBICode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(-(2));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(-(1));
}{runtimeScene.getGame().getVariables().getFromIndex(54).setNumber(0);
}}

}


{


{
}

}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51497404);
}
}if (gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "", false, 100, 1);
}}

}


};gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects = Hashtable.newFrom({"RunStop": gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1});gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs._526_95Infusing_95RVTBICode.GDInfoObjects1});gdjs._526_95Infusing_95RVTBICode.eventsList3 = function(runtimeScene) {

{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51825476);
}
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(-(13));
}}

}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(13);
}if ( gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51847308);
}
}}
}
if (gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(52).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Titration_ShiftTotals", true);
}}

}


};gdjs._526_95Infusing_95RVTBICode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs._526_95Infusing_95RVTBICode.GDRestartObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95RVTBICode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49595836);
}
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(52).setNumber(1);
}}

}


{


{
}

}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(49)) == 99;
}if ( gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49823684);
}
}}
}
if (gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1);
{for(var i = 0, len = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i].setAnimationName("RunScreen");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i].isCurrentAnimationName("RunScreen") ) {
        gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = true;
        gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[k] = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length = k;}if (gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95RVTBICode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(49877332);
}
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1);
{for(var i = 0, len = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i].setAnimationName("InfusionComplete");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50361964);
}
}}
}
}
if (gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(99);
}{runtimeScene.getGame().getVariables().getFromIndex(50).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(51).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(99);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects, runtimeScene, true, true);
}if (gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Timer");
}if ( gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(50854316);
}
}}
}
if (gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95RVTBICode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RunStop"), gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDRunStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == -(5);
}if ( gdjs._526_95Infusing_95RVTBICode.condition2IsTrue_0.val ) {
{
{gdjs._526_95Infusing_95RVTBICode.conditionTrue_1 = gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0;
gdjs._526_95Infusing_95RVTBICode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51570500);
}
}}
}
}
if (gdjs._526_95Infusing_95RVTBICode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1);
{for(var i = 0, len = gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length ;i < len;++i) {
    gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1[i].setAnimationName("RunScreen");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs._526_95Infusing_95RVTBICode.GDInfoObjects1);

gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = false;
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = false;
{
gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._526_95Infusing_95RVTBICode.mapOfGDgdjs_46_95526_9595Infusing_9595RVTBICode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs._526_95Infusing_95RVTBICode.condition0IsTrue_0.val ) {
{
gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(52)) == 1;
}}
if (gdjs._526_95Infusing_95RVTBICode.condition1IsTrue_0.val) {

{ //Subevents
gdjs._526_95Infusing_95RVTBICode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs._526_95Infusing_95RVTBICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._526_95Infusing_95RVTBICode.GDRestartObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDRestartObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDRestartObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDBolusObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDBolusObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDBolusObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDDeviceObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDDeviceObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDDeviceObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDPowerOnOffObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDPowerOnOffObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDPowerOnOffObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDInfoObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDInfoObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDInfoObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDDownObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDDownObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDDownObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDUpObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDUpObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDUpObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDOKObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDOKObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDOKObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDRunStopObjects3.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects1.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects2.length = 0;
gdjs._526_95Infusing_95RVTBICode.GDScreenObjects3.length = 0;

gdjs._526_95Infusing_95RVTBICode.eventsList4(runtimeScene);
return;

}

gdjs['_526_95Infusing_95RVTBICode'] = gdjs._526_95Infusing_95RVTBICode;
