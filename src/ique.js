const ique = (timeout = 1000) => {
  if (!window.requestIdleCallback) throw new Error('ique: window.requestIdleCallback not found.')

  let id
  let tasks = []

  const add = task => {
    if (!task.func) throw new Error('ique: task object must have a func property.')

    // add task to queue
    tasks.push(task)

    // put in idle time request
    request()

    return instance
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
    // run tasks until running out of time or finished
    while (deadline.timeRemaining() > 0 && tasks.length) {
      let { func, args } = tasks.shift()
      func.apply(null, args)
    }

    // null out callback id
    id = null

    // if out of time before tasks are finished, request more time
    if (tasks.length) request()
  }

  const instance = {
    add
  }

  return instance
}

export default ique
