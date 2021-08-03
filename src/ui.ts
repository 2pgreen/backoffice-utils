let timeout : number | undefined = undefined

export const delayInput = (callback : any, timer = 750) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback()
    }, timer)
  }