gdjs.SceneCode = {};
gdjs.SceneCode.GDRestartObjects1= [];
gdjs.SceneCode.GDRestartObjects2= [];
gdjs.SceneCode.GDRestartObjects3= [];
gdjs.SceneCode.GDBolusObjects1= [];
gdjs.SceneCode.GDBolusObjects2= [];
gdjs.SceneCode.GDBolusObjects3= [];
gdjs.SceneCode.GDDeviceObjects1= [];
gdjs.SceneCode.GDDeviceObjects2= [];
gdjs.SceneCode.GDDeviceObjects3= [];
gdjs.SceneCode.GDPowerOnOffObjects1= [];
gdjs.SceneCode.GDPowerOnOffObjects2= [];
gdjs.SceneCode.GDPowerOnOffObjects3= [];
gdjs.SceneCode.GDInfoObjects1= [];
gdjs.SceneCode.GDInfoObjects2= [];
gdjs.SceneCode.GDInfoObjects3= [];
gdjs.SceneCode.GDDownObjects1= [];
gdjs.SceneCode.GDDownObjects2= [];
gdjs.SceneCode.GDDownObjects3= [];
gdjs.SceneCode.GDUpObjects1= [];
gdjs.SceneCode.GDUpObjects2= [];
gdjs.SceneCode.GDUpObjects3= [];
gdjs.SceneCode.GDOKObjects1= [];
gdjs.SceneCode.GDOKObjects2= [];
gdjs.SceneCode.GDOKObjects3= [];
gdjs.SceneCode.GDRunStopObjects1= [];
gdjs.SceneCode.GDRunStopObjects2= [];
gdjs.SceneCode.GDRunStopObjects3= [];
gdjs.SceneCode.GDScreenObjects1= [];
gdjs.SceneCode.GDScreenObjects2= [];
gdjs.SceneCode.GDScreenObjects3= [];
gdjs.SceneCode.GDLEDObjects1= [];
gdjs.SceneCode.GDLEDObjects2= [];
gdjs.SceneCode.GDLEDObjects3= [];
gdjs.SceneCode.GDT1Code3Objects1= [];
gdjs.SceneCode.GDT1Code3Objects2= [];
gdjs.SceneCode.GDT1Code3Objects3= [];
gdjs.SceneCode.GDT1Code2Objects1= [];
gdjs.SceneCode.GDT1Code2Objects2= [];
gdjs.SceneCode.GDT1Code2Objects3= [];
gdjs.SceneCode.GDT1CodeObjects1= [];
gdjs.SceneCode.GDT1CodeObjects2= [];
gdjs.SceneCode.GDT1CodeObjects3= [];
gdjs.SceneCode.GDBlackRec3Objects1= [];
gdjs.SceneCode.GDBlackRec3Objects2= [];
gdjs.SceneCode.GDBlackRec3Objects3= [];
gdjs.SceneCode.GDBlackRec2Objects1= [];
gdjs.SceneCode.GDBlackRec2Objects2= [];
gdjs.SceneCode.GDBlackRec2Objects3= [];
gdjs.SceneCode.GDBlackRec1Objects1= [];
gdjs.SceneCode.GDBlackRec1Objects2= [];
gdjs.SceneCode.GDBlackRec1Objects3= [];
gdjs.SceneCode.GDInstructionsObjects1= [];
gdjs.SceneCode.GDInstructionsObjects2= [];
gdjs.SceneCode.GDInstructionsObjects3= [];

gdjs.SceneCode.conditionTrue_0 = {val:false};
gdjs.SceneCode.condition0IsTrue_0 = {val:false};
gdjs.SceneCode.condition1IsTrue_0 = {val:false};
gdjs.SceneCode.condition2IsTrue_0 = {val:false};
gdjs.SceneCode.condition3IsTrue_0 = {val:false};
gdjs.SceneCode.condition4IsTrue_0 = {val:false};
gdjs.SceneCode.condition5IsTrue_0 = {val:false};
gdjs.SceneCode.condition6IsTrue_0 = {val:false};
gdjs.SceneCode.condition7IsTrue_0 = {val:false};
gdjs.SceneCode.conditionTrue_1 = {val:false};
gdjs.SceneCode.condition0IsTrue_1 = {val:false};
gdjs.SceneCode.condition1IsTrue_1 = {val:false};
gdjs.SceneCode.condition2IsTrue_1 = {val:false};
gdjs.SceneCode.condition3IsTrue_1 = {val:false};
gdjs.SceneCode.condition4IsTrue_1 = {val:false};
gdjs.SceneCode.condition5IsTrue_1 = {val:false};
gdjs.SceneCode.condition6IsTrue_1 = {val:false};
gdjs.SceneCode.condition7IsTrue_1 = {val:false};


gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInstructionsObjects1Objects = Hashtable.newFrom({"Instructions": gdjs.SceneCode.GDInstructionsObjects1});gdjs.SceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
gdjs.SceneCode.condition3IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) == 4;
}if ( gdjs.SceneCode.condition0IsTrue_1.val ) {
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) == 8;
}if ( gdjs.SceneCode.condition1IsTrue_1.val ) {
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time3")) > 0;
}if ( gdjs.SceneCode.condition2IsTrue_1.val ) {
{
gdjs.SceneCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time4")) == 0;
}}
}
}
gdjs.SceneCode.conditionTrue_1.val = true && gdjs.SceneCode.condition0IsTrue_1.val && gdjs.SceneCode.condition1IsTrue_1.val && gdjs.SceneCode.condition2IsTrue_1.val && gdjs.SceneCode.condition3IsTrue_1.val;
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{runtimeScene.getVariables().get("SceneController").setNumber(-(3));
}{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{gdjs.evtTools.sound.playSound(runtimeScene, "SmallBeepDouble.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("TimeOut");
}
}{}{}{}{}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) <= 4;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) <= 8;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time3")) == 0;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time4")) == 0;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{runtimeScene.getVariables().get("SceneController").setNumber(2);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "RecT1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "TextEditing");
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("24T");
}
}{}{gdjs.evtTools.camera.showLayer(runtimeScene, "TimeText2");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "VTBIText2");
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) <= 4;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) <= 8;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time3")) < 0;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time4")) < 0;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{runtimeScene.getVariables().get("SceneController").setNumber(2);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "RecT1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "TextEditing");
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("24T");
}
}{}{gdjs.evtTools.camera.showLayer(runtimeScene, "TimeText2");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "VTBIText2");
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
gdjs.SceneCode.condition3IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) == 4;
}if ( gdjs.SceneCode.condition0IsTrue_1.val ) {
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) == 8;
}if ( gdjs.SceneCode.condition1IsTrue_1.val ) {
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time3")) > 0;
}if ( gdjs.SceneCode.condition2IsTrue_1.val ) {
{
gdjs.SceneCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time4")) > 0;
}}
}
}
gdjs.SceneCode.conditionTrue_1.val = true && gdjs.SceneCode.condition0IsTrue_1.val && gdjs.SceneCode.condition1IsTrue_1.val && gdjs.SceneCode.condition2IsTrue_1.val && gdjs.SceneCode.condition3IsTrue_1.val;
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "SmallBeepDouble.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("TimeOut");
}
}{}{}{}{runtimeScene.getVariables().get("SceneController").setNumber(-(3));
}{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{}{gdjs.evtTools.camera.hideLayer(runtimeScene, "VTBIText2");
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) > 4;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("TimeOut");
}
}{}{}{}{runtimeScene.getVariables().get("SceneController").setNumber(-(3));
}{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{gdjs.evtTools.sound.playSound(runtimeScene, "SmallBeepDouble.mp3", false, 100, 1);
}{}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
gdjs.SceneCode.condition3IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) == 4;
}if ( gdjs.SceneCode.condition0IsTrue_1.val ) {
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) == 8;
}if ( gdjs.SceneCode.condition1IsTrue_1.val ) {
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time3")) == 0;
}if ( gdjs.SceneCode.condition2IsTrue_1.val ) {
{
gdjs.SceneCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time4")) > 0;
}}
}
}
gdjs.SceneCode.conditionTrue_1.val = true && gdjs.SceneCode.condition0IsTrue_1.val && gdjs.SceneCode.condition1IsTrue_1.val && gdjs.SceneCode.condition2IsTrue_1.val && gdjs.SceneCode.condition3IsTrue_1.val;
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("TimeOut");
}
}{}{}{}{runtimeScene.getVariables().get("SceneController").setNumber(-(3));
}{gdjs.evtTools.sound.playSound(runtimeScene, "SmallBeepDouble.mp3", false, 100, 1);
}{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "VTBIText2");
}{}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) == 4;
}if ( gdjs.SceneCode.condition0IsTrue_1.val ) {
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) > 8;
}}
gdjs.SceneCode.conditionTrue_1.val = true && gdjs.SceneCode.condition0IsTrue_1.val && gdjs.SceneCode.condition1IsTrue_1.val;
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "SmallBeepDouble.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("TimeOut");
}
}{}{}{}{runtimeScene.getVariables().get("SceneController").setNumber(-(3));
}{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) <= 4;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) < 8;
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{runtimeScene.getVariables().get("SceneController").setNumber(2);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "RecT1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "TextEditing");
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("24T");
}
}{}{gdjs.evtTools.camera.showLayer(runtimeScene, "TimeText2");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "VTBIText2");
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time1")) < 4;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Time2")) <= 8;
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects2);
{runtimeScene.getVariables().get("TDigits").setNumber(6);
}{runtimeScene.getVariables().get("SceneController").setNumber(2);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "RecT1");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "TextEditing");
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects2[i].setAnimationName("24T");
}
}{}{gdjs.evtTools.camera.showLayer(runtimeScene, "TimeText2");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "VTBIText2");
}}

}


{


{
}

}


};gdjs.SceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(87312572);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(15).setNumber(123);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(15)) == 123;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(71085804);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDInstructionsObjects1 */
{for(var i = 0, len = gdjs.SceneCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDInstructionsObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(56).setNumber(3);
}
{ //Subevents
gdjs.SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPowerOnOffObjects1Objects = Hashtable.newFrom({"PowerOnOff": gdjs.SceneCode.GDPowerOnOffObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPowerOnOffObjects1Objects = Hashtable.newFrom({"PowerOnOff": gdjs.SceneCode.GDPowerOnOffObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPowerOnOffObjects1Objects = Hashtable.newFrom({"PowerOnOff": gdjs.SceneCode.GDPowerOnOffObjects1});gdjs.SceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition0IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47268004);
}
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "TurnONBeep_withSmallBeeps.mp3", 1, false, 100, 1);
}}

}


};gdjs.SceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "SceneTimer");
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LED"), gdjs.SceneCode.GDLEDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Loading Screen");
}
}{for(var i = 0, len = gdjs.SceneCode.GDLEDObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDLEDObjects1[i].setAnimationName("Animation");
}
}
{ //Subevents
gdjs.SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.SceneCode.GDScreenObjects1 */

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].hasAnimationEnded() ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(2);
}{}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList5 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(81417148);
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(4).setNumber(10);
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(82462164);
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 9;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(4).setNumber(-(1));
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) != 9;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(84939692);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) != 0;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47301820);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects2);
{runtimeScene.getVariables().getFromIndex(4).sub(1);
}{}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(70834084);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(4);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList6 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(81312732);
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(5).setNumber(10);
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 9;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47307404);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) != 9;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(70797628);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(5).add(1);
}{}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) != 0;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(81521068);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects2);
{runtimeScene.getVariables().getFromIndex(5).sub(1);
}{}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(77232148);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(6);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects2});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList7 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(86536628);
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(6).setNumber(10);
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(85097612);
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 9;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(6).setNumber(-(1));
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) != 9;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(85049956);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(6).add(1);
}{}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects2);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) != 0;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47320020);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects2);
{runtimeScene.getVariables().getFromIndex(6).sub(1);
}{}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects2.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(82272492);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(8);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47340332);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47341180);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("24");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(4);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(2);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47343172);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("46");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(3);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.eventsList10 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47344748);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(46);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 46;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47345572);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("48");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(4);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.eventsList11 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47347420);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("72");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(5);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
gdjs.SceneCode.condition3IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if( gdjs.SceneCode.condition0IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if( gdjs.SceneCode.condition1IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 1;
if( gdjs.SceneCode.condition2IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == 1;
if( gdjs.SceneCode.condition3IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
gdjs.SceneCode.condition3IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 2;
if( gdjs.SceneCode.condition0IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 3;
if( gdjs.SceneCode.condition1IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 4;
if( gdjs.SceneCode.condition2IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 5;
if( gdjs.SceneCode.condition3IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Twenty4");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(3);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList13 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47358556);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(1111);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 1111;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(70865788);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDScreenObjects1 */
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("96");
}
}{runtimeScene.getVariables().getFromIndex(11).setNumber(2);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(0);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.eventsList14 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47361404);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("120");
}
}{runtimeScene.getVariables().getFromIndex(11).setNumber(3);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.eventsList15 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 10000000000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47362924);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("168");
}
}{runtimeScene.getVariables().getFromIndex(11).setNumber(4);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.eventsList16 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47364540);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("120");
}
}{runtimeScene.getVariables().getFromIndex(11).setNumber(3);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.eventsList17 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 10000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47366148);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("96");
}
}{runtimeScene.getVariables().getFromIndex(11).setNumber(2);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.eventsList18 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47367764);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Ninty6");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(11).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList19 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47369828);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(73);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 73;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(79724724);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDScreenObjects1 */
{runtimeScene.getVariables().getFromIndex(12).setNumber(2);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("VTime");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(6);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects = Hashtable.newFrom({"Down": gdjs.SceneCode.GDDownObjects1});gdjs.SceneCode.eventsList20 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47372692);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("RTime");
}
}{runtimeScene.getVariables().getFromIndex(12).setNumber(3);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.SceneCode.GDUpObjects1});gdjs.SceneCode.eventsList21 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47374148);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("VTime");
}
}{runtimeScene.getVariables().getFromIndex(12).setNumber(2);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.eventsList22 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Contiuous");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(12).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(10);
}}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList23 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-24Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-24Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList24 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47378340);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47379164);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList25 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-46Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList26 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47383572);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47384396);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList27 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-48Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-48Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList28 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47388804);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47389628);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList29 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(23)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-72Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(23)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-72Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList30 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47394036);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47394860);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList31 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(29)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(29)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-96Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList32 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47398732);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47399556);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList33 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-120Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-120Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList34 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47403428);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47404252);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList35 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(41)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-168Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(41)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-168Hour", true);
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList36 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47408124);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47408948);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList35(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList37 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(47)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", true);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(47)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-VTIME", true);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList38 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47412820);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47413644);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList37(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList39 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(53)) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(2);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(53)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "18Rx-RVTBI", true);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(2);
}}

}


};gdjs.SceneCode.eventsList40 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47417516);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(14).setNumber(24);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47418340);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList39(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.SceneCode.GDInfoObjects1});gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects = Hashtable.newFrom({"OK": gdjs.SceneCode.GDOKObjects1});gdjs.SceneCode.eventsList41 = function(runtimeScene) {

{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47468276);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_24h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 24;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47469796);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_24h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 46;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47470356);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_46h", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 46;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47472252);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_46h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 48;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47473628);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_48h", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 48;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47474820);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_48h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 72;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47476196);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_72h", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 72;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47477388);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_72h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 96;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47478764);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_96h", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 96;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47479956);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_96h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 120;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(32)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47481332);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_120h", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 120;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(32)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47482652);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_120h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 168;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47483684);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_168h", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 168;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47485004);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_168h", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 89;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(44)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47486036);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_VTIME", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 89;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(44)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47487228);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_VTIME", false);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 99;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(50)) == -(1);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47488604);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_RVTBI", false);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 99;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(50)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47489796);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "17_CurrentRx_RVTBI", false);
}}

}


};gdjs.SceneCode.eventsList42 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.SceneCode.GDRestartObjects1});gdjs.SceneCode.eventsList43 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89600652);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(55).setNumber(1313);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 1313;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(89601444);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
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


};gdjs.SceneCode.eventsList44 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(81024324);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.SceneCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.SceneCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDInstructionsObjects1[i].hide();
}
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 2;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47238476);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.SceneCode.GDInstructionsObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDInstructionsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.SceneCode.GDInstructionsObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInstructionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PowerOnOff"), gdjs.SceneCode.GDPowerOnOffObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPowerOnOffObjects1Objects, runtimeScene, true, true);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SceneTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerOnOff"), gdjs.SceneCode.GDPowerOnOffObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPowerOnOffObjects1Objects, runtimeScene, true, false);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47262756);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SceneTimer");
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47264076);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Still");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PowerOnOff"), gdjs.SceneCode.GDPowerOnOffObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPowerOnOffObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "SceneTimer");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(55)) == 0;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47265492);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
{}
{ //Subevents
gdjs.SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("Loading Screen") ) {
        gdjs.SceneCode.condition0IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(76001652);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx2");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 5;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(77846804);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47274108);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(6);
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("ClinicalCode");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
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
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(24).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(29).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(28).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(41).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(42).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(45).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(46).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(48).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(47).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(51).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(53).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(52).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(54).setNumber(0);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47295860);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide(false);
}
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47304364);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(5);
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide();
}
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 5;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 6;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47313348);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{runtimeScene.getVariables().getFromIndex(3).setNumber(7);
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 7;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 1;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 6;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47322724);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(5);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx2");
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
gdjs.SceneCode.condition5IsTrue_0.val = false;
gdjs.SceneCode.condition6IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 6;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.SceneCode.condition4IsTrue_0.val ) {
{
gdjs.SceneCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 9;
}if ( gdjs.SceneCode.condition5IsTrue_0.val ) {
{
gdjs.SceneCode.condition6IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
}
}
}
if (gdjs.SceneCode.condition6IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Twenty4");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(8);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(2);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 6;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 8;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) != 9;
if( gdjs.SceneCode.condition0IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) != 1;
if( gdjs.SceneCode.condition1IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) != 0;
if( gdjs.SceneCode.condition2IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx2");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 2;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(8).setNumber(3);
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("Twenty4") ) {
        gdjs.SceneCode.condition4IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDScreenObjects1 */
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Ninty6");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Contiuous");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 10;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Ninty6");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Twenty4");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 2;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.condition0IsTrue_1.val = false;
gdjs.SceneCode.condition1IsTrue_1.val = false;
gdjs.SceneCode.condition2IsTrue_1.val = false;
gdjs.SceneCode.condition3IsTrue_1.val = false;
{
gdjs.SceneCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
if( gdjs.SceneCode.condition0IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
if( gdjs.SceneCode.condition1IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 10;
if( gdjs.SceneCode.condition2IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
gdjs.SceneCode.condition3IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
if( gdjs.SceneCode.condition3IsTrue_1.val ) {
    gdjs.SceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 1000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackRec1"), gdjs.SceneCode.GDBlackRec1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec2"), gdjs.SceneCode.GDBlackRec2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRec3"), gdjs.SceneCode.GDBlackRec3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code"), gdjs.SceneCode.GDT1CodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code2"), gdjs.SceneCode.GDT1Code2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T1Code3"), gdjs.SceneCode.GDT1Code3Objects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("ClinicalCode");
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SceneCode.GDBlackRec1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].setColor("0;0;0");
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SceneCode.GDBlackRec3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDBlackRec3Objects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(6);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1Code2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1Code2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.SceneCode.GDT1CodeObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDT1CodeObjects1[i].setColor("255;255;255");
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



}


{



}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 8;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 2;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 3;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47348660);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("48");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 10000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47349924);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("46");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtsExt__DoubleClick__DoubleClickCondition.func(runtimeScene, 10000, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47351428);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("24");
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(2);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 9;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("Ninty6") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 2;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 3;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 10;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("Contiuous") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.SceneCode.GDDownObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDDownObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 6;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(12)) == 2;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.SceneCode.GDUpObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDUpObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(12)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 6;
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 6;
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList22(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
gdjs.SceneCode.condition5IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(13)) == 1;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 2;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("24") ) {
        gdjs.SceneCode.condition4IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition4IsTrue_0.val ) {
{
gdjs.SceneCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
}
}
}
}
if (gdjs.SceneCode.condition5IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
gdjs.SceneCode.condition5IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(13)) == 1;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 3;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("46") ) {
        gdjs.SceneCode.condition4IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition4IsTrue_0.val ) {
{
gdjs.SceneCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
}
}
}
}
if (gdjs.SceneCode.condition5IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
gdjs.SceneCode.condition5IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(13)) == 1;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 4;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("48") ) {
        gdjs.SceneCode.condition4IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition4IsTrue_0.val ) {
{
gdjs.SceneCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 1;
}}
}
}
}
}
if (gdjs.SceneCode.condition5IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
gdjs.SceneCode.condition5IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(13)) == 1;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 4;
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("72") ) {
        gdjs.SceneCode.condition4IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition4IsTrue_0.val ) {
{
gdjs.SceneCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == 1;
}}
}
}
}
}
if (gdjs.SceneCode.condition5IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList30(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 2;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("96") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == 1;
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList32(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 3;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("120") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) == 1;
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList34(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 4;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 5;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("168") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) == 1;
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList36(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(12)) == 2;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 6;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("VTime") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == 1;
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList38(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("OK"), gdjs.SceneCode.GDOKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(12)) == 3;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 6;
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDOKObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SceneCode.GDScreenObjects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDScreenObjects1[i].isCurrentAnimationName("RTime") ) {
        gdjs.SceneCode.condition3IsTrue_0.val = true;
        gdjs.SceneCode.GDScreenObjects1[k] = gdjs.SceneCode.GDScreenObjects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDScreenObjects1.length = k;}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
gdjs.SceneCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(49)) == 1;
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList40(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition3IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9131644);
}
}}
}
}
if (gdjs.SceneCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("24");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(2);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47423204);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("46");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9165956);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("48");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(4);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47426076);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("72");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9312228);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("96");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(11).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47428948);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("120");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(11).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9391684);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("168");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(11).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47431820);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("VTime");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(12).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9467284);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("VTime");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(12).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.SceneCode.GDInfoObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
gdjs.SceneCode.condition3IsTrue_0.val = false;
gdjs.SceneCode.condition4IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(49)) == -(1);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDInfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
gdjs.SceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition2IsTrue_0.val ) {
{
gdjs.SceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 4;
}if ( gdjs.SceneCode.condition3IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition4IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47434692);
}
}}
}
}
}
if (gdjs.SceneCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("RTime");
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(12).setNumber(3);
}}

}


{


{
}

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


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47436788);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47437844);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().get("PR46").setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47438900);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47439956);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47441012);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47442068);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47443124);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47444180);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(49)) == -(3);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47445236);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}}

}


{


{
}

}


{



}


{


{
}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 24;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(24);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(24);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(24);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 46;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(46);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == -(46);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(46);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 48;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(48);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == -(48);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(48);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == -(72);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(72);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == 72;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(72);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(1);
}}

}


{


{
}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == 96;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(96);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(25)) == -(96);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(96);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) == 120;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(120);
}{runtimeScene.getGame().getVariables().getFromIndex(32).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) == -(120);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(120);
}{runtimeScene.getGame().getVariables().getFromIndex(32).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) == 168;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(168);
}{runtimeScene.getGame().getVariables().getFromIndex(38).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) == -(168);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(168);
}{runtimeScene.getGame().getVariables().getFromIndex(38).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == 89;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(89);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(43)) == -(89);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(89);
}{runtimeScene.getGame().getVariables().getFromIndex(43).setNumber(-(1));
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(49)) == 99;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(99);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(49)) == -(99);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Screen"), gdjs.SceneCode.GDScreenObjects1);
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.SceneCode.GDScreenObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScreenObjects1[i].setAnimationName("Rx");
}
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(99);
}{runtimeScene.getGame().getVariables().getFromIndex(49).setNumber(-(1));
}}

}


{


{
}

}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
gdjs.SceneCode.condition2IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition2IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(47467100);
}
}}
}
if (gdjs.SceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList42(runtimeScene);} //End of subevents
}

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

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.SceneCode.GDRestartObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
gdjs.SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(56)) == 3;
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList43(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SceneCode.GDRestartObjects1.length = 0;
gdjs.SceneCode.GDRestartObjects2.length = 0;
gdjs.SceneCode.GDRestartObjects3.length = 0;
gdjs.SceneCode.GDBolusObjects1.length = 0;
gdjs.SceneCode.GDBolusObjects2.length = 0;
gdjs.SceneCode.GDBolusObjects3.length = 0;
gdjs.SceneCode.GDDeviceObjects1.length = 0;
gdjs.SceneCode.GDDeviceObjects2.length = 0;
gdjs.SceneCode.GDDeviceObjects3.length = 0;
gdjs.SceneCode.GDPowerOnOffObjects1.length = 0;
gdjs.SceneCode.GDPowerOnOffObjects2.length = 0;
gdjs.SceneCode.GDPowerOnOffObjects3.length = 0;
gdjs.SceneCode.GDInfoObjects1.length = 0;
gdjs.SceneCode.GDInfoObjects2.length = 0;
gdjs.SceneCode.GDInfoObjects3.length = 0;
gdjs.SceneCode.GDDownObjects1.length = 0;
gdjs.SceneCode.GDDownObjects2.length = 0;
gdjs.SceneCode.GDDownObjects3.length = 0;
gdjs.SceneCode.GDUpObjects1.length = 0;
gdjs.SceneCode.GDUpObjects2.length = 0;
gdjs.SceneCode.GDUpObjects3.length = 0;
gdjs.SceneCode.GDOKObjects1.length = 0;
gdjs.SceneCode.GDOKObjects2.length = 0;
gdjs.SceneCode.GDOKObjects3.length = 0;
gdjs.SceneCode.GDRunStopObjects1.length = 0;
gdjs.SceneCode.GDRunStopObjects2.length = 0;
gdjs.SceneCode.GDRunStopObjects3.length = 0;
gdjs.SceneCode.GDScreenObjects1.length = 0;
gdjs.SceneCode.GDScreenObjects2.length = 0;
gdjs.SceneCode.GDScreenObjects3.length = 0;
gdjs.SceneCode.GDLEDObjects1.length = 0;
gdjs.SceneCode.GDLEDObjects2.length = 0;
gdjs.SceneCode.GDLEDObjects3.length = 0;
gdjs.SceneCode.GDT1Code3Objects1.length = 0;
gdjs.SceneCode.GDT1Code3Objects2.length = 0;
gdjs.SceneCode.GDT1Code3Objects3.length = 0;
gdjs.SceneCode.GDT1Code2Objects1.length = 0;
gdjs.SceneCode.GDT1Code2Objects2.length = 0;
gdjs.SceneCode.GDT1Code2Objects3.length = 0;
gdjs.SceneCode.GDT1CodeObjects1.length = 0;
gdjs.SceneCode.GDT1CodeObjects2.length = 0;
gdjs.SceneCode.GDT1CodeObjects3.length = 0;
gdjs.SceneCode.GDBlackRec3Objects1.length = 0;
gdjs.SceneCode.GDBlackRec3Objects2.length = 0;
gdjs.SceneCode.GDBlackRec3Objects3.length = 0;
gdjs.SceneCode.GDBlackRec2Objects1.length = 0;
gdjs.SceneCode.GDBlackRec2Objects2.length = 0;
gdjs.SceneCode.GDBlackRec2Objects3.length = 0;
gdjs.SceneCode.GDBlackRec1Objects1.length = 0;
gdjs.SceneCode.GDBlackRec1Objects2.length = 0;
gdjs.SceneCode.GDBlackRec1Objects3.length = 0;
gdjs.SceneCode.GDInstructionsObjects1.length = 0;
gdjs.SceneCode.GDInstructionsObjects2.length = 0;
gdjs.SceneCode.GDInstructionsObjects3.length = 0;

gdjs.SceneCode.eventsList44(runtimeScene);
return;

}

gdjs['SceneCode'] = gdjs.SceneCode;
