function prefix(str) {
    const _s = str.toUpperCase()
    return _s.substr(0,2)+'-'+_s.substr(2)
}

function prefix2str(str) {
    return str.toLowerCase().replace(/-/g, '')
}

function opt(val, _default = {}) {
    return (val == null) ? _default : val
}

const nested_opt = (object, path, defaultValue = null) => path
    .split('.')
    .reduce((o, p) => o ? o[p] : defaultValue, object)


export {
    prefix,
    prefix2str,
    opt,
    nested_opt
}