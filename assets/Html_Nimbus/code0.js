gdjs.IntroCode = {};
gdjs.IntroCode.GDRestartObjects1= [];
gdjs.IntroCode.GDRestartObjects2= [];
gdjs.IntroCode.GDBolusObjects1= [];
gdjs.IntroCode.GDBolusObjects2= [];
gdjs.IntroCode.GDPLayObjects1= [];
gdjs.IntroCode.GDPLayObjects2= [];
gdjs.IntroCode.GDImageObjects1= [];
gdjs.IntroCode.GDImageObjects2= [];
gdjs.IntroCode.GDLogoObjects1= [];
gdjs.IntroCode.GDLogoObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.condition3IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};
gdjs.IntroCode.condition3IsTrue_1 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPLayObjects1Objects = Hashtable.newFrom({"PLay": gdjs.IntroCode.GDPLayObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPLayObjects1Objects = Hashtable.newFrom({"PLay": gdjs.IntroCode.GDPLayObjects1});gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.IntroCode.GDImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.IntroCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLogoObjects1[i].playAnimation();
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.IntroCode.GDImageObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDImageObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "IntroAudio_1.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLay"), gdjs.IntroCode.GDPLayObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
gdjs.IntroCode.condition2IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPLayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition1IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition2IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(86332284);
}
}}
}
if (gdjs.IntroCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.IntroCode.GDImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.IntroCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLogoObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.IntroCode.GDImageObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDImageObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLay"), gdjs.IntroCode.GDPLayObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
gdjs.IntroCode.condition2IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPLayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition1IsTrue_0.val ) {
{
gdjs.IntroCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}}
}
if (gdjs.IntroCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(56).setNumber(2);
}}

}


{


{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDRestartObjects1.length = 0;
gdjs.IntroCode.GDRestartObjects2.length = 0;
gdjs.IntroCode.GDBolusObjects1.length = 0;
gdjs.IntroCode.GDBolusObjects2.length = 0;
gdjs.IntroCode.GDPLayObjects1.length = 0;
gdjs.IntroCode.GDPLayObjects2.length = 0;
gdjs.IntroCode.GDImageObjects1.length = 0;
gdjs.IntroCode.GDImageObjects2.length = 0;
gdjs.IntroCode.GDLogoObjects1.length = 0;
gdjs.IntroCode.GDLogoObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
