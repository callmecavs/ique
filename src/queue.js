const queue = timeout => {
  let callbackId

  let tasks = []
  let tasksIndex = 0
  let tasksLength = 0

  const add = task => {
    tasks.push(task)
    request()
  }

  const request = () => {
    // if not already idle, request it
    if (!callbackId) {
      // use timeout option, defaulting to 1000 ms
      window.requestIdleCallback(
        handler,
        { timeout: timeout || 1000 }
      )
    }
  }

  const flush = deadline => {
    while (deadline.timeRemaining() > 0) {

    }
  }
}

export default queue
