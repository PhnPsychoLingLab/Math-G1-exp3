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
    {'name': 'page/homepage.png', 'path': 'page/homepage.png'},
    {'name': 'page/G1_exp3_intro.png', 'path': 'page/G1_exp3_intro.png'},
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
var exitClock;
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
  // Initialize components for Routine "exit"
  exitClock = new util.Clock();
  wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'wait',
    text: 'Please wait while we save your results...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
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
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'mhfpupw5UYEf', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
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
