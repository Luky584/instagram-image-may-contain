function get_elements_by_inner(word) {
    res = []
    elems = [...document.getElementsByTagName('img')];
    elems.forEach((elem) => { 
        if(elem.alt.includes(word)) {
            res.push(elem.alt)
        }
    })
    return(res)
}

//Once you are on Instagram page use: get_elements_by_inner("contain")