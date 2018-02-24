const queue = timeout => {
  let callbackId
  let tasks = []

  const add = task => {
    tasks.push(task)
    request()
  }

  const request = () => {
    // request an idle callback
    callbackId = window.requestIdleCallback(
      flush,
      { timeout: timeout || 1000 }
    )
  }

  const flush = deadline => {
    let task

    // run tasks until running out of time or finished
    while (deadline.timeRemaining() > 0 && tasks.length > 0) {
      task = tasks.pop()
      task.func.apply(null, task.params)
    }

    // if running out of time before all tasks are finished,
    if (tasks.length > 0) {
      request()
    }
  }

  return {
    add
  }
}

export default queue
