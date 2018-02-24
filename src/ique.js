const ique = (timeout = 1000) => {
  let id

  const tasks = []

  const add = task => {
    if (!task.func) throw new Error('ique: task object must have a func property.')

    // add task to queue
    tasks.push(task)

    // put in idle time request
    request()
  }

  // request an idle callback if not already flushing queue
  const request = () => {
    if (id) return

    id = window.requestIdleCallback(
      flush,
      { timeout }
    )
  }

  // flush the queue
  const flush = deadline => {
    let task

    // run tasks until running out of time or finished
    while (deadline.timeRemaining() > 0 && tasks.length > 0) {
      task = tasks.pop()
      task.func.apply(null, task.args)
    }

    // null out callback id
    id = null

    // if out of time before tasks are finished, request more time
    if (tasks.length > 0) {
      request()
    }
  }

  return {
    add
  }
}

export default ique
