function prefix(str) {
    const _s = str.toUpperCase()
    return _s.substr(0,2)+'-'+_s.substr(2)
}

function prefix2str(str) {
    return str.toLowerCase().replace(/-/g, '')
}

export {
    prefix,
    prefix2str
}