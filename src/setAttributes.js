function setAttributes(element, hash) {
  for (let key in hash) {
    element.setAttribute(key, hash[key]);
  }
}
export { setAttributes }