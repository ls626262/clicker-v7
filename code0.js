gdjs.Clicker_32sceneCode = {};
gdjs.Clicker_32sceneCode.localVariables = [];
gdjs.Clicker_32sceneCode.GDbackgroundObjects1= [];
gdjs.Clicker_32sceneCode.GDbackgroundObjects2= [];
gdjs.Clicker_32sceneCode.GDbackgroundObjects3= [];
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects1= [];
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects2= [];
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects3= [];
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1= [];
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2= [];
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects3= [];
gdjs.Clicker_32sceneCode.GDClicks2Objects1= [];
gdjs.Clicker_32sceneCode.GDClicks2Objects2= [];
gdjs.Clicker_32sceneCode.GDClicks2Objects3= [];
gdjs.Clicker_32sceneCode.GDCPC2Objects1= [];
gdjs.Clicker_32sceneCode.GDCPC2Objects2= [];
gdjs.Clicker_32sceneCode.GDCPC2Objects3= [];
gdjs.Clicker_32sceneCode.GDCPS2Objects1= [];
gdjs.Clicker_32sceneCode.GDCPS2Objects2= [];
gdjs.Clicker_32sceneCode.GDCPS2Objects3= [];
gdjs.Clicker_32sceneCode.GDSHOPObjects1= [];
gdjs.Clicker_32sceneCode.GDSHOPObjects2= [];
gdjs.Clicker_32sceneCode.GDSHOPObjects3= [];
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects1= [];
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects2= [];
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects3= [];
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects1= [];
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects2= [];
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects3= [];


gdjs.Clicker_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SHOP"), gdjs.Clicker_32sceneCode.GDSHOPObjects1);
gdjs.copyArray(runtimeScene.getObjects("click_me_button"), gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1);
{for(var i = 0, len = gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1[i].setPosition(840,490);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1.length !== 0 ? gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Clicker_32sceneCode.GDSHOPObjects1.length ;i < len;++i) {
    gdjs.Clicker_32sceneCode.GDSHOPObjects1[i].setPosition(1664,64);
}
}}

}


};gdjs.Clicker_32sceneCode.asyncCallback12465556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Clicker_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SHOP", false);
}gdjs.Clicker_32sceneCode.localVariables.length = 0;
}
gdjs.Clicker_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Clicker_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Clicker_32sceneCode.asyncCallback12465556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Clicker_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("click_me_button"), gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2[k] = gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.sound.playSound(runtimeScene, "click sound.MP3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SHOP"), gdjs.Clicker_32sceneCode.GDSHOPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Clicker_32sceneCode.GDSHOPObjects2.length;i<l;++i) {
    if ( gdjs.Clicker_32sceneCode.GDSHOPObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Clicker_32sceneCode.GDSHOPObjects2[k] = gdjs.Clicker_32sceneCode.GDSHOPObjects2[i];
        ++k;
    }
}
gdjs.Clicker_32sceneCode.GDSHOPObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click sound.MP3", false, 100, 1);
}
{ //Subevents
gdjs.Clicker_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CPC2"), gdjs.Clicker_32sceneCode.GDCPC2Objects2);
gdjs.copyArray(runtimeScene.getObjects("CPS2"), gdjs.Clicker_32sceneCode.GDCPS2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Clicks2"), gdjs.Clicker_32sceneCode.GDClicks2Objects2);
{for(var i = 0, len = gdjs.Clicker_32sceneCode.GDClicks2Objects2.length ;i < len;++i) {
    gdjs.Clicker_32sceneCode.GDClicks2Objects2[i].getBehavior("Text").setText("Clicks: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.Clicker_32sceneCode.GDCPC2Objects2.length ;i < len;++i) {
    gdjs.Clicker_32sceneCode.GDCPC2Objects2[i].getBehavior("Text").setText("CPC: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.Clicker_32sceneCode.GDCPS2Objects2.length ;i < len;++i) {
    gdjs.Clicker_32sceneCode.GDCPS2Objects2[i].getBehavior("Text").setText("CPS: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Autoclick") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Autoclick");
}}

}


};gdjs.Clicker_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Autoclick");
}}

}


};gdjs.Clicker_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("clicker", "clicks", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}{gdjs.evtTools.storage.writeStringInJSONFile("clicker", "cps", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}{gdjs.evtTools.storage.writeStringInJSONFile("clicker", "cpc", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}{gdjs.evtTools.storage.writeStringInJSONFile("clicker", "cpc_cost", runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}{gdjs.evtTools.storage.writeStringInJSONFile("clicker", "cps_cost", runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}{gdjs.evtTools.storage.writeStringInJSONFile("clicker", "ultimateupgradecost", runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("clicker", "clicks", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readStringFromJSONFile("clicker", "cps", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.readStringFromJSONFile("clicker", "cpc", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readStringFromJSONFile("clicker", "cpc_cost", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{gdjs.evtTools.storage.readStringFromJSONFile("clicker", "cps_cost", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.storage.readStringFromJSONFile("clicker", "ultimateupgradecost", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


};gdjs.Clicker_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Clicker_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Clicker_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Clicker_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Clicker_32sceneCode.eventsList4(runtimeScene);
}


};

gdjs.Clicker_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Clicker_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDClicks2Objects1.length = 0;
gdjs.Clicker_32sceneCode.GDClicks2Objects2.length = 0;
gdjs.Clicker_32sceneCode.GDClicks2Objects3.length = 0;
gdjs.Clicker_32sceneCode.GDCPC2Objects1.length = 0;
gdjs.Clicker_32sceneCode.GDCPC2Objects2.length = 0;
gdjs.Clicker_32sceneCode.GDCPC2Objects3.length = 0;
gdjs.Clicker_32sceneCode.GDCPS2Objects1.length = 0;
gdjs.Clicker_32sceneCode.GDCPS2Objects2.length = 0;
gdjs.Clicker_32sceneCode.GDCPS2Objects3.length = 0;
gdjs.Clicker_32sceneCode.GDSHOPObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDSHOPObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDSHOPObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects3.length = 0;

gdjs.Clicker_32sceneCode.eventsList5(runtimeScene);
gdjs.Clicker_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDClick_9595me_9595buttonObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDclick_9595me_9595buttonObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDClicks2Objects1.length = 0;
gdjs.Clicker_32sceneCode.GDClicks2Objects2.length = 0;
gdjs.Clicker_32sceneCode.GDClicks2Objects3.length = 0;
gdjs.Clicker_32sceneCode.GDCPC2Objects1.length = 0;
gdjs.Clicker_32sceneCode.GDCPC2Objects2.length = 0;
gdjs.Clicker_32sceneCode.GDCPC2Objects3.length = 0;
gdjs.Clicker_32sceneCode.GDCPS2Objects1.length = 0;
gdjs.Clicker_32sceneCode.GDCPS2Objects2.length = 0;
gdjs.Clicker_32sceneCode.GDCPS2Objects3.length = 0;
gdjs.Clicker_32sceneCode.GDSHOPObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDSHOPObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDSHOPObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDmade_9595by_9595textObjects3.length = 0;
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects1.length = 0;
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects2.length = 0;
gdjs.Clicker_32sceneCode.GDsave_9595infoObjects3.length = 0;


return;

}

gdjs['Clicker_32sceneCode'] = gdjs.Clicker_32sceneCode;
