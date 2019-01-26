export function setItem(key, value) {
  // localStorage.setItem(key, JSON.stringify(value));
  localStorage.setItem(key, value)
}

/**
 *
 * @param key
 * @param _default
 * @returns {Array}
 */
export function getItem(key, _default) {
  const _data = localStorage.getItem(key)
  if (!_data) {
    return _default
  }
  return JSON.parse(_data)
}

export function clearAll() {
  localStorage.clear()
}
