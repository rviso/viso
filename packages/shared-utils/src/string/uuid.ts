export function uuidv4() {
  let d = new Date().getTime()
  const uuid = 'xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16)
  })
  return uuid
}

export function generateUid() {
  let d = new Date().getTime()
  const uid = 'xxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16)
  })
  return uid
}
