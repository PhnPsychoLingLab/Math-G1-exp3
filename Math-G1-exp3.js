/********************* 
 * Math-G1-Exp3 *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Math-G1-exp3';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(loadingRoutineBegin());
flowScheduler.add(loadingRoutineEachFrame());
flowScheduler.add(loadingRoutineEnd());
flowScheduler.add(helloRoutineBegin());
flowScheduler.add(helloRoutineEachFrame());
flowScheduler.add(helloRoutineEnd());
flowScheduler.add(exp3_introRoutineBegin());
flowScheduler.add(exp3_introRoutineEachFrame());
flowScheduler.add(exp3_introRoutineEnd());
const exp3_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp3_pre_trialsLoopBegin(exp3_pre_trialsLoopScheduler));
flowScheduler.add(exp3_pre_trialsLoopScheduler);
flowScheduler.add(exp3_pre_trialsLoopEnd);



flowScheduler.add(exitRoutineBegin());
flowScheduler.add(exitRoutineEachFrame());
flowScheduler.add(exitRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'pre_exp3.csv', 'path': 'pre_exp3.csv'},
    {'name': './exp3_pre/G1_exp3_pre1.png', 'path': './exp3_pre/G1_exp3_pre1.png'},
    {'name': './exp3_pre/G1_exp3_pre2.png', 'path': './exp3_pre/G1_exp3_pre2.png'},
    {'name': 'page/homepage.png', 'path': 'page/homepage.png'},
    {'name': 'page/G1_exp3_intro.png', 'path': 'page/G1_exp3_intro.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'page/nextQ.png', 'path': 'page/nextQ.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var loadingClock;
var text;
var helloClock;
var hello_np;
var hello_bg;
var exp3_introClock;
var exp3_intro_np;
var exp3_intro_bg;
var exp3_preClock;
var exp3_pre_bg;
var next_page;
var nextQClock;
var nextQ_bg;
var exitClock;
var dataObj;
var wait;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "loading"
  loadingClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: mic_perms_text_string,
    font: 'Noto Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "hello"
  helloClock = new util.Clock();
  hello_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hello_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.22)],
    letterHeight: 0.05,
    size: [0.4, 0.1],
    ori: 0.0
    ,
    depth: 0
  });
  hello_np.clock = new util.Clock();
  
  hello_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'hello_bg', units : undefined, 
    image : 'page/homepage.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp3_intro"
  exp3_introClock = new util.Clock();
  exp3_intro_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp3_intro_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.27)],
    letterHeight: 0.05,
    size: [0.55, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp3_intro_np.clock = new util.Clock();
  
  exp3_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_intro_bg', units : undefined, 
    image : 'page/G1_exp3_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp3_pre"
  exp3_preClock = new util.Clock();
  exp3_pre_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_pre_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_page',
    text: '⮕',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.07,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  next_page.clock = new util.Clock();
  
  // Initialize components for Routine "nextQ"
  nextQClock = new util.Clock();
  nextQ_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextQ_bg', units : undefined, 
    image : 'page/nextQ.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exit"
  exitClock = new util.Clock();
  // 在exit階段的code元件中（Begin Routine）
  // 處理最後一次可能的錄音
  try {
    if (window.mediaRecorder && window.mediaRecorder.state !== 'inactive') {
      window.mediaRecorder.stop();
      console.log("停止最終錄音");
      
      setTimeout(async function() {
        if (window.audioChunks && window.audioChunks.length > 0) {
          const audioBlob = new Blob(window.audioChunks, { type: 'audio/webm' });
          const finalFilename = 'recording_' + 
            expName + "_" + 
            expInfo["participant"] + "_" + 
            "final_" + Date.now() + ".webm";
          
          psychoJS.experiment.addData('final_audio_filename', finalFilename);
          
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = function() {
            const base64Data = reader.result.split(',')[1];
            
            fetch('https://pipe.jspsych.org/api/data', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
              },
              body: JSON.stringify({
                experimentID: 'zqejJsvNSVAI',
                filename: finalFilename,
                data: base64Data,
                datatype: 'audio/webm'
              }),
            })
            .then(response => response.json())
            .then(data => {
              console.log('最終音訊上傳成功:', data);
            })
            .catch(error => {
              console.error('最終音訊上傳失敗:', error);
            });
          };
        }
      }, 100);
    }
  } catch (finalAudioError) {
    console.error("處理最終錄音時出錯:", finalAudioError);
  }
  
  // 禁用瀏覽器下載結果
  psychoJS._saveResults = 0; 
  
  // 為結果生成檔案名稱
  let filename = psychoJS._experiment._experimentName + '_' + 
                 psychoJS._experiment._participant + '_' + 
                 psychoJS._experiment._datetime + '.csv';
  
  // 從實驗中提取數據對象
  let dataObj = psychoJS._experiment._trialsData;
  
  // 檢查是否有有效數據
  if (!dataObj || dataObj.length === 0) {
    console.error('警告：未找到實驗數據');
    dataObj = [{
      experiment: psychoJS._experiment._experimentName,
      participant: psychoJS._experiment._participant,
      session: psychoJS._experiment._session,
      datetime: psychoJS._experiment._datetime
    }];
  }
  
  // 將數據對象轉換為CSV格式
  let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
      return Object.values(it).toString()
  }).join('\n')
  
  // 通過DataPipe將數據發送到OSF
  console.log('保存數據...');
  fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
      },
      body: JSON.stringify({
          experimentID: 'zqejJsvNSVAI',
          filename: filename,
          data: data,
      }),
  }).then(response => response.json()).then(data => {
      console.log('數據保存成功:', data);
      quitPsychoJS();
  }).catch(error => {
      console.error('保存數據時出錯:', error);
      quitPsychoJS();
  });
  wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'wait',
    text: 'Please wait while we save your results...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var loadingMaxDurationReached;
var mic_perms_text_string;
var loadingMaxDuration;
var loadingComponents;
function loadingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loading' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    loadingClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    loadingMaxDurationReached = false;
    // update component parameters for each repeat
    // 在loading階段的code元件中（Begin Routine）
    mic_perms_text_string = "正在獲取麥克風權限，請稍候...";
    let micStream = null;
    
    // 如果瀏覽器支持getUserMedia()
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("瀏覽器支持getUserMedia");
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false,
        })
        .then((stream) => {
          console.log("麥克風權限已授予");
          micStream = stream;
          // 全局保存流，供後續使用
          window.microphoneStream = stream;
          // 自動進入下一階段
          continueRoutine = false;
        })
        .catch((err) => {
          console.error(`獲取麥克風權限時發生錯誤: ${err}`);
          mic_perms_text_string = "麥克風訪問被拒絕。請刷新頁面並授予麥克風權限。";
          setTimeout(() => {
            continueRoutine = false;
          }, 5000);
        });
    } else {
      console.log("不支持getUserMedia");
      mic_perms_text_string = "您的瀏覽器不支持錄音功能。請使用Chrome或Firefox嘗試。";
      setTimeout(() => {
        continueRoutine = false;
      }, 5000);
    }
    
    // 確保10秒後無論如何都繼續
    setTimeout(() => {
      if (continueRoutine) {
        console.log("權限請求超時，強制繼續");
        continueRoutine = false;
      }
    }, 10000);
    psychoJS.experiment.addData('loading.started', globalClock.getTime());
    loadingMaxDuration = null
    // keep track of which components have finished
    loadingComponents = [];
    loadingComponents.push(text);
    
    for (const thisComponent of loadingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function loadingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loading' ---
    // get current time
    t = loadingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of loadingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loadingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loading' ---
    for (const thisComponent of loadingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('loading.stopped', globalClock.getTime());
    if (loadingMaxDurationReached) {
        loadingClock.add(loadingMaxDuration);
    } else {
        loadingClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var helloMaxDurationReached;
var helloMaxDuration;
var helloComponents;
function helloRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hello' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    helloClock.reset();
    routineTimer.reset();
    helloMaxDurationReached = false;
    // update component parameters for each repeat
    // reset hello_np to account for continued clicks & clear times on/off
    hello_np.reset()
    psychoJS.experiment.addData('hello.started', globalClock.getTime());
    helloMaxDuration = null
    // keep track of which components have finished
    helloComponents = [];
    helloComponents.push(hello_np);
    helloComponents.push(hello_bg);
    
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function helloRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hello' ---
    // get current time
    t = helloClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hello_np* updates
    if (t >= 0 && hello_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_np.tStart = t;  // (not accounting for frame time here)
      hello_np.frameNStart = frameN;  // exact frame index
      
      hello_np.setAutoDraw(true);
    }
    
    if (hello_np.status === PsychoJS.Status.STARTED) {
      // check whether hello_np has been pressed
      if (hello_np.isClicked) {
        if (!hello_np.wasClicked) {
          // store time of first click
          hello_np.timesOn.push(hello_np.clock.getTime());
          // store time clicked until
          hello_np.timesOff.push(hello_np.clock.getTime());
        } else {
          // update time clicked until;
          hello_np.timesOff[hello_np.timesOff.length - 1] = hello_np.clock.getTime();
        }
        if (!hello_np.wasClicked) {
          // end routine when hello_np is clicked
          continueRoutine = false;
          
        }
        // if hello_np is still clicked next frame, it is not a new click
        hello_np.wasClicked = true;
      } else {
        // if hello_np is clicked next frame, it is a new click
        hello_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hello_np hasn't started / has finished
      hello_np.clock.reset();
      // if hello_np is clicked next frame, it is a new click
      hello_np.wasClicked = false;
    }
    
    // *hello_bg* updates
    if (t >= 0 && hello_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_bg.tStart = t;  // (not accounting for frame time here)
      hello_bg.frameNStart = frameN;  // exact frame index
      
      hello_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function helloRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hello' ---
    for (const thisComponent of helloComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('hello.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hello_np.numClicks', hello_np.numClicks);
    psychoJS.experiment.addData('hello_np.timesOn', hello_np.timesOn);
    psychoJS.experiment.addData('hello_np.timesOff', hello_np.timesOff);
    // the Routine "hello" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_introMaxDurationReached;
var exp3_introMaxDuration;
var exp3_introComponents;
function exp3_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_introClock.reset();
    routineTimer.reset();
    exp3_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp3_intro_np to account for continued clicks & clear times on/off
    exp3_intro_np.reset()
    psychoJS.experiment.addData('exp3_intro.started', globalClock.getTime());
    exp3_introMaxDuration = null
    // keep track of which components have finished
    exp3_introComponents = [];
    exp3_introComponents.push(exp3_intro_np);
    exp3_introComponents.push(exp3_intro_bg);
    
    for (const thisComponent of exp3_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_intro' ---
    // get current time
    t = exp3_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp3_intro_np* updates
    if (t >= 0 && exp3_intro_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_intro_np.tStart = t;  // (not accounting for frame time here)
      exp3_intro_np.frameNStart = frameN;  // exact frame index
      
      exp3_intro_np.setAutoDraw(true);
    }
    
    if (exp3_intro_np.status === PsychoJS.Status.STARTED) {
      // check whether exp3_intro_np has been pressed
      if (exp3_intro_np.isClicked) {
        if (!exp3_intro_np.wasClicked) {
          // store time of first click
          exp3_intro_np.timesOn.push(exp3_intro_np.clock.getTime());
          // store time clicked until
          exp3_intro_np.timesOff.push(exp3_intro_np.clock.getTime());
        } else {
          // update time clicked until;
          exp3_intro_np.timesOff[exp3_intro_np.timesOff.length - 1] = exp3_intro_np.clock.getTime();
        }
        if (!exp3_intro_np.wasClicked) {
          // end routine when exp3_intro_np is clicked
          continueRoutine = false;
          
        }
        // if exp3_intro_np is still clicked next frame, it is not a new click
        exp3_intro_np.wasClicked = true;
      } else {
        // if exp3_intro_np is clicked next frame, it is a new click
        exp3_intro_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp3_intro_np hasn't started / has finished
      exp3_intro_np.clock.reset();
      // if exp3_intro_np is clicked next frame, it is a new click
      exp3_intro_np.wasClicked = false;
    }
    
    // *exp3_intro_bg* updates
    if (t >= 0.0 && exp3_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp3_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp3_intro_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_intro' ---
    for (const thisComponent of exp3_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp3_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp3_intro_np.numClicks', exp3_intro_np.numClicks);
    psychoJS.experiment.addData('exp3_intro_np.timesOn', exp3_intro_np.timesOn);
    psychoJS.experiment.addData('exp3_intro_np.timesOff', exp3_intro_np.timesOff);
    // the Routine "exp3_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_pre_trials;
function exp3_pre_trialsLoopBegin(exp3_pre_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp3_pre_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pre_exp3.csv',
      seed: undefined, name: 'exp3_pre_trials'
    });
    psychoJS.experiment.addLoop(exp3_pre_trials); // add the loop to the experiment
    currentLoop = exp3_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp3_pre_trial of exp3_pre_trials) {
      snapshot = exp3_pre_trials.getSnapshot();
      exp3_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineBegin(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineEachFrame());
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineEnd(snapshot));
      exp3_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp3_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp3_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_pre_trialsLoopEndIteration(exp3_pre_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp3_pre_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp3_pre_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp3_pre_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp3_preMaxDurationReached;
var exp3_preMaxDuration;
var exp3_preComponents;
function exp3_preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_preClock.reset();
    routineTimer.reset();
    exp3_preMaxDurationReached = false;
    // update component parameters for each repeat
    window.audioChunks = [];
    window.mediaRecorder = null;
    
    try {
      if (window.microphoneStream) {
        // 使用原生MediaRecorder
        window.mediaRecorder = new MediaRecorder(window.microphoneStream);
        
        window.mediaRecorder.ondataavailable = function(e) {
          if (e.data.size > 0) {
            window.audioChunks.push(e.data);
          }
        };
        
        // 開始錄音
        window.mediaRecorder.start();
        console.log("開始錄音 (MediaRecorder)");
        
        // 將錄音狀態保存到實驗數據
        psychoJS.experiment.addData('recording_started', true);
      } else {
        console.error("麥克風流未初始化，無法錄音");
        psychoJS.experiment.addData('recording_started', false);
      }
    } catch (error) {
      console.error("初始化錄音時出錯:", error);
      psychoJS.experiment.addData('recording_error', error.toString());
    }
    exp3_pre_bg.setImage(exp3_pre_stimuli);
    // reset next_page to account for continued clicks & clear times on/off
    next_page.reset()
    psychoJS.experiment.addData('exp3_pre.started', globalClock.getTime());
    exp3_preMaxDuration = null
    // keep track of which components have finished
    exp3_preComponents = [];
    exp3_preComponents.push(exp3_pre_bg);
    exp3_preComponents.push(next_page);
    
    for (const thisComponent of exp3_preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_pre' ---
    // get current time
    t = exp3_preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp3_pre_bg* updates
    if (t >= 0.0 && exp3_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp3_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp3_pre_bg.setAutoDraw(true);
    }
    
    
    // *next_page* updates
    if (t >= 5 && next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_page.tStart = t;  // (not accounting for frame time here)
      next_page.frameNStart = frameN;  // exact frame index
      
      next_page.setAutoDraw(true);
    }
    
    if (next_page.status === PsychoJS.Status.STARTED) {
      // check whether next_page has been pressed
      if (next_page.isClicked) {
        if (!next_page.wasClicked) {
          // store time of first click
          next_page.timesOn.push(next_page.clock.getTime());
          // store time clicked until
          next_page.timesOff.push(next_page.clock.getTime());
        } else {
          // update time clicked until;
          next_page.timesOff[next_page.timesOff.length - 1] = next_page.clock.getTime();
        }
        if (!next_page.wasClicked) {
          // end routine when next_page is clicked
          continueRoutine = false;
          
        }
        // if next_page is still clicked next frame, it is not a new click
        next_page.wasClicked = true;
      } else {
        // if next_page is clicked next frame, it is a new click
        next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_page hasn't started / has finished
      next_page.clock.reset();
      // if next_page is clicked next frame, it is a new click
      next_page.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_pre' ---
    for (const thisComponent of exp3_preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp3_pre.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next_page.numClicks', next_page.numClicks);
    psychoJS.experiment.addData('next_page.timesOn', next_page.timesOn);
    psychoJS.experiment.addData('next_page.timesOff', next_page.timesOff);
    // the Routine "exp3_pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nextQMaxDurationReached;
var nextQMaxDuration;
var nextQComponents;
function nextQRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nextQ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nextQClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    nextQMaxDurationReached = false;
    // update component parameters for each repeat
    try {
      if (window.mediaRecorder && window.mediaRecorder.state !== 'inactive') {
        // 停止錄音
        window.mediaRecorder.stop();
        console.log("停止錄音 (MediaRecorder)");
        
        // 等待100ms確保最後的數據被收集
        setTimeout(async function() {
          try {
            if (window.audioChunks && window.audioChunks.length > 0) {
              // 創建Blob
              const audioBlob = new Blob(window.audioChunks, { type: 'audio/webm' });
              
              // 創建文件名
              const trialNum = psychoJS.experiment.thisN || 0;
              const thisFilename = 'recording_' + 
                expName + "_" + 
                expInfo["participant"] + "_" + 
                "trial_" + trialNum + "_" + 
                Date.now() + ".webm";
              
              // 將文件名添加到實驗數據
              psychoJS.experiment.addData('audio_filename', thisFilename);
              
              // 轉換為base64
              const reader = new FileReader();
              reader.readAsDataURL(audioBlob);
              reader.onloadend = function() {
                // 提取base64數據
                const base64Data = reader.result.split(',')[1];
                
                // 上傳到OSF
                console.log('上傳音訊到OSF...');
                fetch('https://pipe.jspsych.org/api/data', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*',
                  },
                  body: JSON.stringify({
                    experimentID: 'zqejJsvNSVAI', // 您的DataPipe ID
                    filename: thisFilename,
                    data: base64Data,
                    datatype: 'audio/webm'
                  }),
                })
                .then(response => response.json())
                .then(data => {
                  console.log('音訊上傳成功:', data);
                  psychoJS.experiment.addData('audio_upload_success', true);
                })
                .catch(error => {
                  console.error('音訊上傳失敗:', error);
                  psychoJS.experiment.addData('audio_upload_error', error.toString());
                });
              };
              
              // 重置音訊塊，準備下一次錄音
              window.audioChunks = [];
              
              // 為下一次錄音重新啟動MediaRecorder
              if (window.microphoneStream) {
                window.mediaRecorder = new MediaRecorder(window.microphoneStream);
                window.mediaRecorder.ondataavailable = function(e) {
                  if (e.data.size > 0) {
                    window.audioChunks.push(e.data);
                  }
                };
                window.mediaRecorder.start();
                console.log("為下一試次重新開始錄音");
              }
            } else {
              console.warn("沒有收集到音訊數據");
              psychoJS.experiment.addData('audio_data_collected', false);
            }
          } catch (processError) {
            console.error("處理音訊時出錯:", processError);
            psychoJS.experiment.addData('audio_processing_error', processError.toString());
          }
        }, 100);
      } else {
        console.warn("MediaRecorder不存在或未啟動");
        psychoJS.experiment.addData('mediarecorder_status', 'not_active');
      }
    } catch (error) {
      console.error("處理錄音時出錯:", error);
      psychoJS.experiment.addData('audio_stop_error', error.toString());
    }
    psychoJS.experiment.addData('nextQ.started', globalClock.getTime());
    nextQMaxDuration = null
    // keep track of which components have finished
    nextQComponents = [];
    nextQComponents.push(nextQ_bg);
    
    for (const thisComponent of nextQComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nextQRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nextQ' ---
    // get current time
    t = nextQClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nextQ_bg* updates
    if (t >= 0.0 && nextQ_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextQ_bg.tStart = t;  // (not accounting for frame time here)
      nextQ_bg.frameNStart = frameN;  // exact frame index
      
      nextQ_bg.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nextQ_bg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nextQ_bg.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of nextQComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nextQRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nextQ' ---
    for (const thisComponent of nextQComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('nextQ.stopped', globalClock.getTime());
    if (nextQMaxDurationReached) {
        nextQClock.add(nextQMaxDuration);
    } else {
        nextQClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exitMaxDurationReached;
var exitMaxDuration;
var exitComponents;
function exitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exit' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exitClock.reset();
    routineTimer.reset();
    exitMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exit.started', globalClock.getTime());
    exitMaxDuration = null
    // keep track of which components have finished
    exitComponents = [];
    exitComponents.push(wait);
    
    for (const thisComponent of exitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exit' ---
    // get current time
    t = exitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *wait* updates
    if (t >= 0.0 && wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait.tStart = t;  // (not accounting for frame time here)
      wait.frameNStart = frameN;  // exact frame index
      
      wait.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exit' ---
    for (const thisComponent of exitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exit.stopped', globalClock.getTime());
    // the Routine "exit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
