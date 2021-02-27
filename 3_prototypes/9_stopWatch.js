// my solution
function StopWatch() {
  let start,
    stop,
    running,
    diff = 0

  // const duration = function () {
  //   diff = Math.floor(start - stop)
  // }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return Number(diff)
    },
  })

  Object.defineProperty(this, 'start', {
    get: function () {
      return start
    },
  })

  Object.defineProperty(this, 'stop', {
    get: function () {
      return stop
    },
  })

  Object.defineProperty(this, 'running', {
    get: function () {
      return running
    },
  })
}

StopWatch.prototype.start = function () {
  if (this.running) throw new Error('StopWatch is running!')

  this.running = true
  start = Date.now() / 1000
}

StopWatch.prototype.stop = function () {
  if (!this.running) throw new Error('StopWatch is not running!')

  this.running = false
  this.stop = Date.now() / 1000
  this.duration()
}

StopWatch.prototype.duration = function () {
  this.diff = Math.floor(this.start - this.stop)
}

StopWatch.prototype.reset = function () {
  this.diff = 0
}

let sw = new StopWatch()

function Solution() {
  let startTime,
    endTime,
    running,
    duration = 0

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
    set: function (value) {
      duration = value
    },
  })

  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime
    },
  })

  Object.defineProperty(this, 'endTime', {
    get: function () {
      return endTime
    },
  })

  Object.defineProperty(this, 'running', {
    get: function () {
      return running
    },
  })
}

Solution.prototype.start = function () {
  if (this.running) {
    throw new Error('Solution has already started.')
  }

  this.running = true
  this.startTime = new Date()
}

Solution.prototype.stop = function () {
  if (!this.running) {
    throw new Error('Solution is not started.')
  }

  this.running = false
  this.endTime = new Date()

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000
  this.duration += seconds // to works it need a setter
}

Solution.prototype.reset = function () {
  this.startTime = null
  this.endTime = null
  this.running = false
  this.duration = 0
}

let sl = new Solution()
sl.duration = 10 // this not supose to happen!
// "Premature optimization is the root of all evils"
