gdjs.ClinicalCodeCode = {};
gdjs.ClinicalCodeCode.GDRestartObjects1= [];
gdjs.ClinicalCodeCode.GDRestartObjects2= [];
gdjs.ClinicalCodeCode.GDRestartObjects3= [];
gdjs.ClinicalCodeCode.GDBolusObjects1= [];
gdjs.ClinicalCodeCode.GDBolusObjects2= [];
gdjs.ClinicalCodeCode.GDBolusObjects3= [];
gdjs.ClinicalCodeCode.GDDeviceObjects1= [];
gdjs.ClinicalCodeCode.GDDeviceObjects2= [];
gdjs.ClinicalCodeCode.GDDeviceObjects3= [];
gdjs.ClinicalCodeCode.GDPowerOnOffObjects1= [];
gdjs.ClinicalCodeCode.GDPowerOnOffObjects2= [];
gdjs.ClinicalCodeCode.GDPowerOnOffObjects3= [];
gdjs.ClinicalCodeCode.GDInfoObjects1= [];
gdjs.ClinicalCodeCode.GDInfoObjects2= [];
gdjs.ClinicalCodeCode.GDInfoObjects3= [];
gdjs.ClinicalCodeCode.GDDownObjects1= [];
gdjs.ClinicalCodeCode.GDDownObjects2= [];
gdjs.ClinicalCodeCode.GDDownObjects3= [];
gdjs.ClinicalCodeCode.GDUpObjects1= [];
gdjs.ClinicalCodeCode.GDUpObjects2= [];
gdjs.ClinicalCodeCode.GDUpObjects3= [];
gdjs.ClinicalCodeCode.GDOKObjects1= [];
gdjs.ClinicalCodeCode.GDOKObjects2= [];
gdjs.ClinicalCodeCode.GDOKObjects3= [];
gdjs.ClinicalCodeCode.GDRunStopObjects1= [];
gdjs.ClinicalCodeCode.GDRunStopObjects2= [];
gdjs.ClinicalCodeCode.GDRunStopObjects3= [];
gdjs.ClinicalCodeCode.GDScreenObjects1= [];
gdjs.ClinicalCodeCode.GDScreenObjects2= [];
gdjs.ClinicalCodeCode.GDScreenObjects3= [];
gdjs.ClinicalCodeCode.GDT1Code3Objects1= [];
gdjs.ClinicalCodeCode.GDT1Code3Objects2= [];
gdjs.ClinicalCodeCode.GDT1Code3Objects3= [];
gdjs.ClinicalCodeCode.GDT1Code2Objects1= [];
gdjs.ClinicalCodeCode.GDT1Code2Objects2= [];
gdjs.ClinicalCodeCode.GDT1Code2Objects3= [];
gdjs.ClinicalCodeCode.GDT1CodeObjects1= [];
gdjs.ClinicalCodeCode.GDT1CodeObjects2= [];
gdjs.ClinicalCodeCode.GDT1CodeObjects3= [];
gdjs.ClinicalCodeCode.GDBlackRec3Objects1= [];
gdjs.ClinicalCodeCode.GDBlackRec3Objects2= [];
gdjs.ClinicalCodeCode.GDBlackRec3Objects3= [];
gdjs.ClinicalCodeCode.GDBlackRec2Objects1= [];
gdjs.ClinicalCodeCode.GDBlackRec2Objects2= [];
gdjs.ClinicalCodeCode.GDBlackRec2Objects3= [];
gdjs.ClinicalCodeCode.GDBlackRec1Objects1= [];
gdjs.ClinicalCodeCode.GDBlackRec1Objects2= [];
gdjs.ClinicalCodeCode.GDBlackRec1Objects3= [];

gdjs.ClinicalCodeCode.conditionTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition0IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition1IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition2IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition3IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition4IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition5IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition6IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition7IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.condition8IsTrue_0 = {val:false};
gdjs.ClinicalCodeCode.conditionTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition0IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition1IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition2IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition3IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition4IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition5IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition6IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition7IsTrue_1 = {val:false};
gdjs.ClinicalCodeCode.condition8IsTrue_1 = {val:false};


gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.ClinicalCodeCode.GDRestartObjects1});gdjs.ClinicalCodeCode.eventsList0 = function(runtimeScene) {

{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition1IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs.ClinicalCodeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs.ClinicalCodeCode.condition2IsTrue_0.val) {
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


};gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.ClinicalCodeCode.GDDownObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.ClinicalCodeCode.GDUpObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.ClinicalCodeCode.GDUpObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.ClinicalCodeCode.GDDownObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.ClinicalCodeCode.GDOKObjects1});gdjs.ClinicalCodeCode.eventsList1 = function(runtimeScene) {

{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition1IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(77765628);
}
}}
if (gdjs.ClinicalCodeCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).setNumber(4);
}}

}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 4;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(86118436);
}
}}
}
if (gdjs.ClinicalCodeCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.ClinicalCodeCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.ClinicalCodeCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.ClinicalCodeCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects1);
{runtimeScene.getVariables().getFromIndex(4).setNumber(5);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1CodeObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec1Objects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}}

}


};gdjs.ClinicalCodeCode.eventsList2 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.ClinicalCodeCode.GDDownObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(86011884);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.ClinicalCodeCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(1).setNumber(10);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.ClinicalCodeCode.GDUpObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(87055356);
}
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.ClinicalCodeCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(1).setNumber(-(1));
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.ClinicalCodeCode.GDUpObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 9;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(71302740);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.ClinicalCodeCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.ClinicalCodeCode.GDDownObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(84208844);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.ClinicalCodeCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.ClinicalCodeCode.GDOKObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if (gdjs.ClinicalCodeCode.condition0IsTrue_0.val) {
{}
{ //Subevents
gdjs.ClinicalCodeCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.ClinicalCodeCode.GDDownObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.ClinicalCodeCode.GDUpObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.ClinicalCodeCode.GDUpObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.ClinicalCodeCode.GDDownObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.ClinicalCodeCode.GDOKObjects1});gdjs.ClinicalCodeCode.eventsList3 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.ClinicalCodeCode.GDDownObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(86319908);
}
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(2).setNumber(10);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.ClinicalCodeCode.GDUpObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(71257404);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.ClinicalCodeCode.GDUpObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) != 9;
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(70428716);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(2).add(1);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.ClinicalCodeCode.GDDownObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) != 0;
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(85476148);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(2).sub(1);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.ClinicalCodeCode.GDOKObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(71386300);
}
}}
}
if (gdjs.ClinicalCodeCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(6);
}}

}


};gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.ClinicalCodeCode.GDDownObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.ClinicalCodeCode.GDUpObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.ClinicalCodeCode.GDUpObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.ClinicalCodeCode.GDDownObjects2});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.ClinicalCodeCode.GDOKObjects1});gdjs.ClinicalCodeCode.eventsList4 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.ClinicalCodeCode.GDDownObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(84275516);
}
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.ClinicalCodeCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(3).setNumber(10);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.ClinicalCodeCode.GDUpObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(81957812);
}
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.ClinicalCodeCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(3).setNumber(-(1));
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.ClinicalCodeCode.GDUpObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 9;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(83184428);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.ClinicalCodeCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(3).add(1);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.ClinicalCodeCode.GDDownObjects2);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 0;
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(81609308);
}
}}
}
}
if (gdjs.ClinicalCodeCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.ClinicalCodeCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(3).sub(1);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.ClinicalCodeCode.GDOKObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(82494308);
}
}}
}
if (gdjs.ClinicalCodeCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(8);
}{}}

}


};gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.ClinicalCodeCode.GDInfoObjects1});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.ClinicalCodeCode.GDOKObjects1});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.ClinicalCodeCode.GDOKObjects1});gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.ClinicalCodeCode.GDOKObjects1});gdjs.ClinicalCodeCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.ClinicalCodeCode.GDRestartObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs.ClinicalCodeCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.ClinicalCodeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ClinicalCodeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.ClinicalCodeCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.ClinicalCodeCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.ClinicalCodeCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.ClinicalCodeCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.ClinicalCodeCode.GDT1Code3Objects1);
{runtimeScene.getVariables().getFromIndex(5).setNumber(6);
}{}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1CodeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(3);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDScreenObjects1[i].setAnimationName("ClinicalCode");
}
}}

}


{


{
}

}


{



}


{



}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 3;
}if (gdjs.ClinicalCodeCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ClinicalCodeCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 5;
}if (gdjs.ClinicalCodeCode.condition0IsTrue_0.val) {
{}
{ //Subevents
gdjs.ClinicalCodeCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 6;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition2IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(86708460);
}
}}
}
if (gdjs.ClinicalCodeCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.ClinicalCodeCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.ClinicalCodeCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.ClinicalCodeCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.ClinicalCodeCode.GDT1Code3Objects1);
{runtimeScene.getVariables().getFromIndex(4).setNumber(7);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code3Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDT1Code2Objects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 7;
}if (gdjs.ClinicalCodeCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ClinicalCodeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.ClinicalCodeCode.GDInfoObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition4IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Info")) == 1;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 6;
}if ( gdjs.ClinicalCodeCode.condition3IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition4IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(83335100);
}
}}
}
}
}
if (gdjs.ClinicalCodeCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.ClinicalCodeCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.ClinicalCodeCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.ClinicalCodeCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.ClinicalCodeCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDBlackRec2Objects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(5).setNumber(5);
}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDScreenObjects1[i].setAnimationName("Rx2");
}
}{}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.ClinicalCodeCode.GDOKObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition4IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition5IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition6IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition7IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 8;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 6;
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.ClinicalCodeCode.condition3IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.ClinicalCodeCode.condition4IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 9;
}if ( gdjs.ClinicalCodeCode.condition5IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition6IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ClinicalCodeCode.condition6IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition7IsTrue_0;
gdjs.ClinicalCodeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(76867140);
}
}}
}
}
}
}
}
}
if (gdjs.ClinicalCodeCode.condition7IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.ClinicalCodeCode.GDScreenObjects1);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDScreenObjects1[i].setAnimationName("Twenty4");
}
}{runtimeScene.getVariables().getFromIndex(5).setNumber(8);
}{runtimeScene.getVariables().get("Rx").setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.ClinicalCodeCode.GDOKObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition3IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition4IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 6;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 8;
}if ( gdjs.ClinicalCodeCode.condition2IsTrue_0.val ) {
{
{gdjs.ClinicalCodeCode.conditionTrue_1 = gdjs.ClinicalCodeCode.condition3IsTrue_0;
gdjs.ClinicalCodeCode.condition0IsTrue_1.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_1.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_1.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) != 9;
if( gdjs.ClinicalCodeCode.condition0IsTrue_1.val ) {
    gdjs.ClinicalCodeCode.conditionTrue_1.val = true;
}
}
{
gdjs.ClinicalCodeCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) != 1;
if( gdjs.ClinicalCodeCode.condition1IsTrue_1.val ) {
    gdjs.ClinicalCodeCode.conditionTrue_1.val = true;
}
}
{
gdjs.ClinicalCodeCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
if( gdjs.ClinicalCodeCode.condition2IsTrue_1.val ) {
    gdjs.ClinicalCodeCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.ClinicalCodeCode.condition3IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition4IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
if (gdjs.ClinicalCodeCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.ClinicalCodeCode.GDScreenObjects1);
{}{for(var i = 0, len = gdjs.ClinicalCodeCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.ClinicalCodeCode.GDScreenObjects1[i].setAnimationName("Rx2");
}
}{runtimeScene.getVariables().getFromIndex(5).setNumber(5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ClinicalCode", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.ClinicalCodeCode.GDOKObjects1);

gdjs.ClinicalCodeCode.condition0IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = false;
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = false;
{
gdjs.ClinicalCodeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClinicalCodeCode.mapOfGDgdjs_46ClinicalCodeCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClinicalCodeCode.condition0IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Rx")) == 2;
}if ( gdjs.ClinicalCodeCode.condition1IsTrue_0.val ) {
{
gdjs.ClinicalCodeCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.ClinicalCodeCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("Rx").setNumber(3);
}}

}


{


{
}

}


};

gdjs.ClinicalCodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClinicalCodeCode.GDRestartObjects1.length = 0;
gdjs.ClinicalCodeCode.GDRestartObjects2.length = 0;
gdjs.ClinicalCodeCode.GDRestartObjects3.length = 0;
gdjs.ClinicalCodeCode.GDBolusObjects1.length = 0;
gdjs.ClinicalCodeCode.GDBolusObjects2.length = 0;
gdjs.ClinicalCodeCode.GDBolusObjects3.length = 0;
gdjs.ClinicalCodeCode.GDDeviceObjects1.length = 0;
gdjs.ClinicalCodeCode.GDDeviceObjects2.length = 0;
gdjs.ClinicalCodeCode.GDDeviceObjects3.length = 0;
gdjs.ClinicalCodeCode.GDPowerOnOffObjects1.length = 0;
gdjs.ClinicalCodeCode.GDPowerOnOffObjects2.length = 0;
gdjs.ClinicalCodeCode.GDPowerOnOffObjects3.length = 0;
gdjs.ClinicalCodeCode.GDInfoObjects1.length = 0;
gdjs.ClinicalCodeCode.GDInfoObjects2.length = 0;
gdjs.ClinicalCodeCode.GDInfoObjects3.length = 0;
gdjs.ClinicalCodeCode.GDDownObjects1.length = 0;
gdjs.ClinicalCodeCode.GDDownObjects2.length = 0;
gdjs.ClinicalCodeCode.GDDownObjects3.length = 0;
gdjs.ClinicalCodeCode.GDUpObjects1.length = 0;
gdjs.ClinicalCodeCode.GDUpObjects2.length = 0;
gdjs.ClinicalCodeCode.GDUpObjects3.length = 0;
gdjs.ClinicalCodeCode.GDOKObjects1.length = 0;
gdjs.ClinicalCodeCode.GDOKObjects2.length = 0;
gdjs.ClinicalCodeCode.GDOKObjects3.length = 0;
gdjs.ClinicalCodeCode.GDRunStopObjects1.length = 0;
gdjs.ClinicalCodeCode.GDRunStopObjects2.length = 0;
gdjs.ClinicalCodeCode.GDRunStopObjects3.length = 0;
gdjs.ClinicalCodeCode.GDScreenObjects1.length = 0;
gdjs.ClinicalCodeCode.GDScreenObjects2.length = 0;
gdjs.ClinicalCodeCode.GDScreenObjects3.length = 0;
gdjs.ClinicalCodeCode.GDT1Code3Objects1.length = 0;
gdjs.ClinicalCodeCode.GDT1Code3Objects2.length = 0;
gdjs.ClinicalCodeCode.GDT1Code3Objects3.length = 0;
gdjs.ClinicalCodeCode.GDT1Code2Objects1.length = 0;
gdjs.ClinicalCodeCode.GDT1Code2Objects2.length = 0;
gdjs.ClinicalCodeCode.GDT1Code2Objects3.length = 0;
gdjs.ClinicalCodeCode.GDT1CodeObjects1.length = 0;
gdjs.ClinicalCodeCode.GDT1CodeObjects2.length = 0;
gdjs.ClinicalCodeCode.GDT1CodeObjects3.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec3Objects1.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec3Objects2.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec3Objects3.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec2Objects1.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec2Objects2.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec2Objects3.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec1Objects1.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec1Objects2.length = 0;
gdjs.ClinicalCodeCode.GDBlackRec1Objects3.length = 0;

gdjs.ClinicalCodeCode.eventsList5(runtimeScene);
return;

}

gdjs['ClinicalCodeCode'] = gdjs.ClinicalCodeCode;
