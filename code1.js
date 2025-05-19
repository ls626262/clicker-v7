gdjs.SHOPCode = {};
gdjs.SHOPCode.localVariables = [];
gdjs.SHOPCode.GDButtonObjects1= [];
gdjs.SHOPCode.GDButtonObjects2= [];
gdjs.SHOPCode.GDwoodObjects1= [];
gdjs.SHOPCode.GDwoodObjects2= [];
gdjs.SHOPCode.GDBack_9595buttonObjects1= [];
gdjs.SHOPCode.GDBack_9595buttonObjects2= [];
gdjs.SHOPCode.GDCPC_9595UpgradeObjects1= [];
gdjs.SHOPCode.GDCPC_9595UpgradeObjects2= [];
gdjs.SHOPCode.GDCPC_9595COUNTObjects1= [];
gdjs.SHOPCode.GDCPC_9595COUNTObjects2= [];
gdjs.SHOPCode.GDCPC_9595COSTObjects1= [];
gdjs.SHOPCode.GDCPC_9595COSTObjects2= [];
gdjs.SHOPCode.GDCLICKSObjects1= [];
gdjs.SHOPCode.GDCLICKSObjects2= [];
gdjs.SHOPCode.GDCPS_9595CountObjects1= [];
gdjs.SHOPCode.GDCPS_9595CountObjects2= [];
gdjs.SHOPCode.GDCPS_9595COSTObjects1= [];
gdjs.SHOPCode.GDCPS_9595COSTObjects2= [];
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1= [];
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects2= [];
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1= [];
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects2= [];
gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects1= [];
gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects2= [];


gdjs.SHOPCode.asyncCallback11534300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SHOPCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Clicker scene", false);
}gdjs.SHOPCode.localVariables.length = 0;
}
gdjs.SHOPCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SHOPCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.SHOPCode.asyncCallback11534300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SHOPCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("wood"), gdjs.SHOPCode.GDwoodObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.SHOPCode.GDwoodObjects1.length !== 0 ? gdjs.SHOPCode.GDwoodObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_button"), gdjs.SHOPCode.GDBack_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SHOPCode.GDBack_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.SHOPCode.GDBack_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SHOPCode.GDBack_9595buttonObjects1[k] = gdjs.SHOPCode.GDBack_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.SHOPCode.GDBack_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click sound.MP3", false, 100, 1);
}
{ //Subevents
gdjs.SHOPCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CLICKS"), gdjs.SHOPCode.GDCLICKSObjects1);
gdjs.copyArray(runtimeScene.getObjects("CPC_COST"), gdjs.SHOPCode.GDCPC_9595COSTObjects1);
gdjs.copyArray(runtimeScene.getObjects("CPC_COUNT"), gdjs.SHOPCode.GDCPC_9595COUNTObjects1);
{for(var i = 0, len = gdjs.SHOPCode.GDCPC_9595COUNTObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDCPC_9595COUNTObjects1[i].getBehavior("Text").setText("CPC: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.SHOPCode.GDCPC_9595COSTObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDCPC_9595COSTObjects1[i].getBehavior("Text").setText("COST: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.SHOPCode.GDCLICKSObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDCLICKSObjects1[i].getBehavior("Text").setText("Clicks: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CPC_Upgrade"), gdjs.SHOPCode.GDCPC_9595UpgradeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SHOPCode.GDCPC_9595UpgradeObjects1.length;i<l;++i) {
    if ( gdjs.SHOPCode.GDCPC_9595UpgradeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SHOPCode.GDCPC_9595UpgradeObjects1[k] = gdjs.SHOPCode.GDCPC_9595UpgradeObjects1[i];
        ++k;
    }
}
gdjs.SHOPCode.GDCPC_9595UpgradeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(50);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CPS_COST"), gdjs.SHOPCode.GDCPS_9595COSTObjects1);
gdjs.copyArray(runtimeScene.getObjects("CPS_Count"), gdjs.SHOPCode.GDCPS_9595CountObjects1);
{for(var i = 0, len = gdjs.SHOPCode.GDCPS_9595CountObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDCPS_9595CountObjects1[i].getBehavior("Text").setText("CPS: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.SHOPCode.GDCPS_9595COSTObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDCPS_9595COSTObjects1[i].getBehavior("Text").setText("COST: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CPS_UPGRADE"), gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1.length;i<l;++i) {
    if ( gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1[k] = gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1[i];
        ++k;
    }
}
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(75);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ULTIMATE_UPGRADE"), gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1.length;i<l;++i) {
    if ( gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1[k] = gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1[i];
        ++k;
    }
}
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(250000);
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(50000);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ULT_UPGRADE_COST"), gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects1);
{for(var i = 0, len = gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}}

}


};

gdjs.SHOPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SHOPCode.GDButtonObjects1.length = 0;
gdjs.SHOPCode.GDButtonObjects2.length = 0;
gdjs.SHOPCode.GDwoodObjects1.length = 0;
gdjs.SHOPCode.GDwoodObjects2.length = 0;
gdjs.SHOPCode.GDBack_9595buttonObjects1.length = 0;
gdjs.SHOPCode.GDBack_9595buttonObjects2.length = 0;
gdjs.SHOPCode.GDCPC_9595UpgradeObjects1.length = 0;
gdjs.SHOPCode.GDCPC_9595UpgradeObjects2.length = 0;
gdjs.SHOPCode.GDCPC_9595COUNTObjects1.length = 0;
gdjs.SHOPCode.GDCPC_9595COUNTObjects2.length = 0;
gdjs.SHOPCode.GDCPC_9595COSTObjects1.length = 0;
gdjs.SHOPCode.GDCPC_9595COSTObjects2.length = 0;
gdjs.SHOPCode.GDCLICKSObjects1.length = 0;
gdjs.SHOPCode.GDCLICKSObjects2.length = 0;
gdjs.SHOPCode.GDCPS_9595CountObjects1.length = 0;
gdjs.SHOPCode.GDCPS_9595CountObjects2.length = 0;
gdjs.SHOPCode.GDCPS_9595COSTObjects1.length = 0;
gdjs.SHOPCode.GDCPS_9595COSTObjects2.length = 0;
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1.length = 0;
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects2.length = 0;
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1.length = 0;
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects2.length = 0;
gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects1.length = 0;
gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects2.length = 0;

gdjs.SHOPCode.eventsList1(runtimeScene);
gdjs.SHOPCode.GDButtonObjects1.length = 0;
gdjs.SHOPCode.GDButtonObjects2.length = 0;
gdjs.SHOPCode.GDwoodObjects1.length = 0;
gdjs.SHOPCode.GDwoodObjects2.length = 0;
gdjs.SHOPCode.GDBack_9595buttonObjects1.length = 0;
gdjs.SHOPCode.GDBack_9595buttonObjects2.length = 0;
gdjs.SHOPCode.GDCPC_9595UpgradeObjects1.length = 0;
gdjs.SHOPCode.GDCPC_9595UpgradeObjects2.length = 0;
gdjs.SHOPCode.GDCPC_9595COUNTObjects1.length = 0;
gdjs.SHOPCode.GDCPC_9595COUNTObjects2.length = 0;
gdjs.SHOPCode.GDCPC_9595COSTObjects1.length = 0;
gdjs.SHOPCode.GDCPC_9595COSTObjects2.length = 0;
gdjs.SHOPCode.GDCLICKSObjects1.length = 0;
gdjs.SHOPCode.GDCLICKSObjects2.length = 0;
gdjs.SHOPCode.GDCPS_9595CountObjects1.length = 0;
gdjs.SHOPCode.GDCPS_9595CountObjects2.length = 0;
gdjs.SHOPCode.GDCPS_9595COSTObjects1.length = 0;
gdjs.SHOPCode.GDCPS_9595COSTObjects2.length = 0;
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects1.length = 0;
gdjs.SHOPCode.GDCPS_9595UPGRADEObjects2.length = 0;
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects1.length = 0;
gdjs.SHOPCode.GDULTIMATE_9595UPGRADEObjects2.length = 0;
gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects1.length = 0;
gdjs.SHOPCode.GDULT_9595UPGRADE_9595COSTObjects2.length = 0;


return;

}

gdjs['SHOPCode'] = gdjs.SHOPCode;
