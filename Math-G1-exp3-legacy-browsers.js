/********************* 
 * Math-G1-Exp3 *
 *********************/


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
    texRes : 128.0, interpolate : true, depth : 0.0 
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
    depth: -1
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
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "exit"
  exitClock = new util.Clock();
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
    console.warn('警告：未找到實驗數據，創建基本數據對象');
    dataObj = [{
      experiment: psychoJS._experiment._experimentName,
      participant: psychoJS._experiment._participant,
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
          experimentID: 'zqejJsvNSVAI', // 您的DataPipe實驗ID
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
    
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    helloComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    exp3_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    exp3_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    exp3_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    exp3_pre_trials.forEach(function() {
      snapshot = exp3_pre_trials.getSnapshot();
    
      exp3_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineBegin(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineEachFrame());
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineEnd(snapshot));
      exp3_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp3_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp3_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_pre_trialsLoopEndIteration(exp3_pre_trialsLoopScheduler, snapshot));
    });
    
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
    exp3_pre_bg.setImage(exp3_pre_stimuli);
    // reset next_page to account for continued clicks & clear times on/off
    next_page.reset()
    psychoJS.experiment.addData('exp3_pre.started', globalClock.getTime());
    exp3_preMaxDuration = null
    // keep track of which components have finished
    exp3_preComponents = [];
    exp3_preComponents.push(exp3_pre_bg);
    exp3_preComponents.push(next_page);
    
    exp3_preComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    exp3_preComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    exp3_preComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    psychoJS.experiment.addData('nextQ.started', globalClock.getTime());
    nextQMaxDuration = null
    // keep track of which components have finished
    nextQComponents = [];
    nextQComponents.push(nextQ_bg);
    
    nextQComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
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
    nextQComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    nextQComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    exitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    exitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    exitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
