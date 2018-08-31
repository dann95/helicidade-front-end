function prefix(str) {
    const _s = str.toUpperCase()
    return _s.substr(0,2)+'-'+_s.substr(2)
}

const prefix2str = str => str.toLowerCase().replace(/-/g, '')

const opt = (val, _default = {}) => (val == null) ? _default : val

const nested_opt = (object, path, defaultValue = null) => path
    .split('.')
    .reduce((o, p) => o ? o[p] : defaultValue, object)

const cloneObject = obj => Object.assign({}, obj)

const dt2br = s => s.split('-').reverse().join('/')

const sumObjProperties = obj => Object.values(obj).reduce((a, b) => a + b)

export {
    prefix,
    prefix2str,
    opt,
    nested_opt,
    dt2br,
    cloneObject,
    sumObjProperties
}