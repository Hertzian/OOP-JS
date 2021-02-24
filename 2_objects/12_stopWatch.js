// my solution
function StopWatch() {
  let start, stop, running, diff = 0

  this.start = function () {
    if (running) throw new Error('StopWatch is running!')

    running = true
    start = Date.now() / 1000
  }

  this.stop = function () {
    if (!running) throw new Error('StopWatch is not running!')

    running = false
    stop = Date.now() / 1000
    duration()
  }

  this.reset = function () {
    diff = 0
  }

  const duration = function () {
    diff = Math.floor(start - stop)
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return Number(diff)
    },
  })
}

let sw = new StopWatch()

function Solution() {
  let startTime,
    endTime,
    running,
    duration = 0

  this.start = function () {
    if (running) {
      throw new Error('Solution has already started.')
    }

    running = true

    startTime = new Date()
  }

  this.stop = function () {
    if (!running) {
      throw new Error('Solution is not started.')
    }

    running = false

    endTime = new Date()

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000
    duration += seconds
  }

  this.reset = function () {
    startTime = null
    endTime = null
    running = false
    duration = 0
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
  })
}

let sl = new Solution()
