const runButton = document.querySelector('.button')

const shortMom = document.querySelector('.input__shortMom')
const shortShear = document.querySelector('.input__shortShear')

const midMom = document.querySelector('.input__midMom')
const midShear = document.querySelector('.input__midShear')

const longMom = document.querySelector('.input__longMom')
const longShear = document.querySelector('.input__longShear')

const outputMax = document.querySelector('.output__outputMax')

runButton.addEventListener('click', mainScript)

const OneCheck = document.querySelector('#one')
const MaxCheck = document.querySelector('#Max')

const El = document.querySelector('#El')

const radio = document.querySelector('.set__switch')
radio.addEventListener(
    'click',
    () => {
        if (OneCheck.checked) El.readOnly = false
        else {
            El.value = ''
            El.readOnly = true
        }
    }

    //OneCheck.checked ? (El.readOnly = false) : (El.readOnly = true)
)

function mainScript(event) {
    if (OneCheck.checked == true && El.value == '') {
        window.alert('Input Element number and than click Run')
        return
    }

    event.preventDefault()

    var allData = []
    allData.push(engine(shortMom.value))
    allData.push(engine(shortShear.value))
    allData.push(engine(midMom.value))
    allData.push(engine(midShear.value))
    allData.push(engine(longMom.value))
    allData.push(engine(longShear.value))

    let cases = {
        0: 'Short mission moment',
        1: 'Short mission shear',
        2: 'Medium mission moment',
        3: 'Medium mission shear',
        4: 'Long mission moment',
        5: 'Long mission shear',
    }

    console.dir(allData)

    var exectElem = El.value
    var maxfmax,
        maxCase,
        maxCaseD,
        amp,
        maxAmpCase,
        maxAmpElem,
        maxAmpCaseD,
        dataMax,
        dataAmp

    var maxfmaxY,
        maxCaseY,
        maxCaseDY,
        ampY,
        maxAmpCaseY,
        maxAmpElemY,
        maxAmpCaseDY,
        dataMaxY,
        dataAmpY

    var type

    if (OneCheck.checked) {
        for (let m = 0; m < allData.length; m++) {
            for (let l = 0; l < allData[m].length; l++) {
                //var tempo = allData[m][l].type
                if (allData[m][l].type == '1') {
                    if (allData[m][l].number == exectElem) {
                        if (m == 0) {
                            maxCase = m
                            maxfmax = Number(allData[m][l].fmax)
                            amp =
                                Number(allData[m][l].fmax) -
                                Number(allData[m][l].fmin)
                            maxAmpCase = m

                            dataMax = allData[m][l].data
                            dataAmp = allData[m][l].data
                        } else if (maxfmax <= Number(allData[m][l].fmax)) {
                            maxCase = m
                            maxfmax = Number(allData[m][l].fmax)
                            dataMax = allData[m][l].data
                        }
                        if (
                            amp <=
                            Number(allData[m][l].fmax) -
                                Number(allData[m][l].fmin)
                        ) {
                            maxAmpCase = m
                            amp =
                                Number(allData[m][l].fmax) -
                                Number(allData[m][l].fmin)

                            dataAmp = allData[m][l].data
                        }
                    }
                } else if (allData[m][l].type == '2') {
                    type = 2
                    if (allData[m][l].number == exectElem) {
                        if (m == 0) {
                            maxCase = m
                            maxfmax = Number(allData[m][l].fmaxX)
                            amp =
                                Number(allData[m][l].fmaxX) -
                                Number(allData[m][l].fminX)
                            maxAmpCase = m
                            dataMax = allData[m][l].data
                            dataAmp = allData[m][l].data
                        } else if (maxfmax <= Number(allData[m][l].fmaxX)) {
                            maxCase = m
                            maxfmax = Number(allData[m][l].fmaxX)
                            dataMax = allData[m][l].data
                        }
                        if (
                            amp <=
                            Number(allData[m][l].fmaxX) -
                                Number(allData[m][l].fminX)
                        ) {
                            maxAmpCase = m
                            amp =
                                Number(allData[m][l].fmaxX) -
                                Number(allData[m][l].fminX)

                            dataAmp = allData[m][l].data
                        }
                        //Y

                        if (m == 0) {
                            maxCaseY = m
                            maxfmaxY = Number(allData[m][l].fmaxY)
                            ampY =
                                Number(allData[m][l].fmaxY) -
                                Number(allData[m][l].fminY)
                            maxAmpCaseY = m
                            dataMaxY = allData[m][l].data
                            dataAmpY = allData[m][l].data
                        } else if (maxfmaxY <= Number(allData[m][l].fmaxY)) {
                            maxCaseY = m
                            maxfmaxY = Number(allData[m][l].fmaxY)
                            dataMaxY = allData[m][l].data
                        }
                        if (
                            ampY <=
                            Number(allData[m][l].fmaxY) -
                                Number(allData[m][l].fminY)
                        ) {
                            maxAmpCaseY = m
                            ampY =
                                Number(allData[m][l].fmaxY) -
                                Number(allData[m][l].fminY)

                            dataAmpY = allData[m][l].data
                        }
                    }
                }
            }
        }

        for (let key in cases) {
            if (Number(key) == maxCase) maxCaseD = cases[key]
            if (Number(key) == maxAmpCase) maxAmpCaseD = cases[key]
            //Y

            if (Number(key) == maxCaseY) maxCaseDY = cases[key]
            if (Number(key) == maxAmpCaseY) maxAmpCaseDY = cases[key]
        }

        if (maxCase == maxAmpCase)
            outputMax.value =
                '\tHi user! \u{1F590}	\n\n\tThe most critical element for fx direction is: ' +
                exectElem +
                ', Fmax = ' +
                maxfmax +
                ' ksi in ' +
                maxCaseD +
                ' load set.\n\n' +
                topPart +
                '\n\n' +
                dataAmp
        else
            outputMax.value =
                '\tHi user! \u{1F590}	\n\n\tThe most critical element for fx direction is: ' +
                exectElem +
                ', Fmax = ' +
                maxfmax +
                ' ksi in ' +
                maxCaseD +
                ' load case.\n\n' +
                topPart +
                '\n\n' +
                dataMax +
                '\n\n\tAlso, the element : ' +
                exectElem +
                ', has maximum amplitude Amax = ' +
                amp +
                ' ksi in ' +
                maxAmpCaseD +
                ' load set.\n\n' +
                dataAmp
        //Y
        if (type == 2) {
            if (maxCaseY == maxAmpCaseY)
                outputMax.value +=
                    '\n\n\tThe most critical element for fy direction is: ' +
                    exectElem +
                    ', Fmax = ' +
                    maxfmaxY +
                    ' ksi in ' +
                    maxCaseDY +
                    ' load set.\n\n' +
                    dataAmpY
            else
                outputMax.value +=
                    '\n\n\tThe most critical element for fy direction is: ' +
                    exectElem +
                    ', Fmax = ' +
                    maxfmaxY +
                    ' ksi in ' +
                    maxCaseDY +
                    ' load case.\n\n' +
                    topPart +
                    dataMaxY +
                    '\n\n\tAlso, the element : ' +
                    exectElem +
                    ', has maximum amplitude Amax = ' +
                    ampY +
                    ' ksi in ' +
                    maxAmpCaseDY +
                    ' load set.\n\n' +
                    dataAmpY
        }
    } else {
        var maxElem
        for (let m = 0; m < allData.length; m++) {
            for (let l = 0; l < allData[m].length; l++) {
                if (allData[m][l].type == '1') {
                    if ((l == 0) & (m == 0)) {
                        maxCase = m
                        maxElem = allData[m][l].number
                        maxfmax = Number(allData[m][l].fmax)
                        amp =
                            Number(allData[m][l].fmax) -
                            Number(allData[m][l].fmin)
                        maxAmpCase = m
                        maxAmpElem = allData[m][l].number
                        dataMax = allData[m][l].data
                        dataAmp = allData[m][l].data
                    } else if (maxfmax <= Number(allData[m][l].fmax)) {
                        maxCase = m
                        maxElem = allData[m][l].number
                        maxfmax = Number(allData[m][l].fmax)
                        dataMax = allData[m][l].data
                    }
                    if (
                        amp <=
                        Number(allData[m][l].fmax) - Number(allData[m][l].fmin)
                    ) {
                        maxAmpCase = m
                        amp =
                            Number(allData[m][l].fmax) -
                            Number(allData[m][l].fmin)
                        maxAmpElem = allData[m][l].number
                        dataAmp = allData[m][l].data
                    }
                } else if (allData[m][l].type == '2') {
                    type = 2
                    if ((l == 0) & (m == 0)) {
                        maxCase = m
                        maxElem = allData[m][l].number
                        maxfmax = Number(allData[m][l].fmaxX)
                        amp =
                            Number(allData[m][l].fmaxX) -
                            Number(allData[m][l].fminX)
                        maxAmpCase = m
                        maxAmpElem = allData[m][l].number
                        dataMax = allData[m][l].data
                        dataAmp = allData[m][l].data
                    } else if (maxfmax <= Number(allData[m][l].fmaxX)) {
                        maxCase = m
                        maxElem = allData[m][l].number
                        maxfmax = Number(allData[m][l].fmaxX)
                        dataMax = allData[m][l].data
                    }
                    if (
                        amp <=
                        Number(allData[m][l].fmaxX) -
                            Number(allData[m][l].fminX)
                    ) {
                        maxAmpCase = m
                        amp =
                            Number(allData[m][l].fmaxX) -
                            Number(allData[m][l].fminX)
                        maxAmpElem = allData[m][l].number
                        dataAmp = allData[m][l].data
                    }

                    //Y
                    if ((l == 0) & (m == 0)) {
                        maxCaseY = m
                        maxElemY = allData[m][l].number
                        maxfmaxY = Number(allData[m][l].fmaxY)
                        ampY =
                            Number(allData[m][l].fmaxY) -
                            Number(allData[m][l].fminY)
                        maxAmpCaseY = m
                        maxAmpElemY = allData[m][l].number
                        dataMaxY = allData[m][l].data
                        dataAmpY = allData[m][l].data
                    } else if (maxfmaxY <= Number(allData[m][l].fmaxY)) {
                        maxCaseY = m
                        maxElemY = allData[m][l].number
                        maxfmaxY = Number(allData[m][l].fmaxY)
                        dataMaxY = allData[m][l].data
                    }
                    if (
                        ampY <=
                        Number(allData[m][l].fmaxY) -
                            Number(allData[m][l].fminY)
                    ) {
                        maxAmpCaseY = m
                        ampY =
                            Number(allData[m][l].fmaxY) -
                            Number(allData[m][l].fminY)
                        maxAmpElemY = allData[m][l].number
                        dataAmpY = allData[m][l].data
                    }
                }
            }
        }
        for (let key in cases) {
            if (Number(key) == maxCase) maxCaseD = cases[key]
            if (Number(key) == maxAmpCase) maxAmpCaseD = cases[key]
            //Y
            if (Number(key) == maxCaseY) maxCaseDY = cases[key]
            if (Number(key) == maxAmpCaseY) maxAmpCaseDY = cases[key]
        }

        if (maxCase == maxAmpCase && maxElem == maxAmpElem)
            outputMax.value =
                '\tHi user! \u{1F590}	\n\n\tThe most critical element for fx direction is: ' +
                maxElem +
                ', Fmax = ' +
                maxfmax +
                ' ksi in ' +
                maxCaseD +
                ' load set.\n\n' +
                topPart +
                '\n\n' +
                dataAmp
        else
            outputMax.value =
                '\tHi user! \u{1F590}	\n\n\tThe most critical element for fx direction is: ' +
                maxElem +
                ', Fmax = ' +
                maxfmax +
                ' ksi in ' +
                maxCaseD +
                ' load case.\n\n' +
                topPart +
                '\n\n' +
                dataMax +
                '\n\n\tAlso, the element : ' +
                maxAmpElem +
                ', has maximum amplitude Amax = ' +
                amp +
                ' ksi in ' +
                maxAmpCaseD +
                ' load set.\n\n' +
                dataAmp

        if ((type = 2)) {
            if (maxCaseY == maxAmpCaseY && maxElemY == maxAmpElemY)
                outputMax.value +=
                    '\n\n\tThe most critical element for fy direction is: ' +
                    maxElemY +
                    ', Fmax = ' +
                    maxfmaxY +
                    ' ksi in ' +
                    maxCaseDY +
                    ' load set.\n\n' +
                    dataAmpY
            else
                outputMax.value +=
                    '\n\n\tThe most critical element for fy direction is: ' +
                    maxElemY +
                    ', Fmax = ' +
                    maxfmaxY +
                    ' ksi in ' +
                    maxCaseDY +
                    ' load case.\n\n' +
                    dataMaxY +
                    '\n\n\tAlso, the element : ' +
                    maxAmpElemY +
                    ', has maximum amplitude Amax = ' +
                    ampY +
                    ' ksi in ' +
                    maxAmpCaseDY +
                    ' load set.\n\n' +
                    dataAmpY
        }
    }
}
var topPart, topp
function engine(inputString) {
    var stringMod = inputString.split('SET')

    var sPart = stringMod[1].split('').splice(2).join('')
    topp = stringMod[0].split('TEMPLATE')
    topPart = topp[1].split('').splice(131).join('')

    var val = [[], [], []]

    var elem = []

    function Element(number, type, val, data) {
        this.number = number
        this.type = type
        this.val = val
        this.data = data

        if (type == '2') {
            this.fmaxX = val[0][0]
            this.fminX = val[0][1]
            this.gagX = val[0][2]

            this.fmaxY = val[1][0]
            this.fminY = val[1][1]
            this.gagY = val[1][2]

            this.fmaxS = val[2][0]
            this.fminS = val[2][1]
            this.gagS = val[2][2]
        } else {
            this.fmax = val[0][0]
            this.fmin = val[0][1]
            this.gag = val[0][2]
        }
    }

    var noOfEl = parseInt(
        sPart
            .split('')
            .splice(sPart.length - 149, 4)
            .filter((elem) => elem !== ' ')
            .join('')
    )

    var tempNo1 = sPart
        .split('')
        .splice(42, 7)
        .filter((elem) => elem !== ' ')
        .join('')

    var tempNo2 = sPart
        .split('')
        .splice(42 + 150, 7)
        .filter((elem) => elem !== ' ')
        .join('')

    var plIndecator = 1

    if (tempNo1 == tempNo2) plIndecator = 2

    var fmax, fmin, gag, elemData

    if (plIndecator == 1) {
        for (var i = 0; i < noOfEl; i++) {
            var tempNo = sPart
                .split('')
                .splice(42 + 150 * i, 7)
                .filter((elem) => elem !== ' ')
                .join('')

            elemData = sPart
                .split('')
                .splice(150 * i, 150)
                .join('')

            for (var k = 0; k <= 2; k++) {
                if (k == 0) {
                    fmax = sPart
                        .split('')
                        .splice(59 + 150 * i, 5)
                        .filter((elem) => elem !== ' ')
                        .join('')

                    //val[0].push(fmax)
                    val[0][k] = fmax
                }
                if (k == 1) {
                    fmin = sPart
                        .split('')
                        .splice(71 + 150 * i, 6)
                        .filter((elem) => elem !== ' ')
                        .join('')

                    //val[0].push(fmin)
                    val[0][k] = fmin
                }
                if (k == 2) {
                    gag = sPart
                        .split('')
                        .splice(95 + 150 * i, 4)
                        .filter((elem) => elem !== ' ')
                        .join('')

                    //val[0].push(gag)
                    val[0][k] = gag
                }
            }
            elem.push(new Element(tempNo, plIndecator, val, elemData))
            //elem[i] = new Element(tempNo, plIndecator, val)
        }
    } else {
        //let r = 0
        for (var i = 0; i < noOfEl; i++) {
            var tempNo = sPart
                .split('')
                .splice(42 + 150 * i, 7)
                .filter((elem) => elem !== ' ')
                .join('')

            elemData = sPart
                .split('')
                .splice(150 * i, 450)
                .join('')

            for (var j = 0; j <= 2; j++) {
                for (var k = 0; k <= 2; k++) {
                    if (k == 0) {
                        fmax = sPart
                            .split('')
                            .splice(59 + 150 * (i + j), 5)
                            .filter((elem) => elem !== ' ')
                            .join('')

                        val[j][k] = fmax
                    }

                    if (k == 1) {
                        fmin = sPart
                            .split('')
                            .splice(71 + 150 * (i + j), 6)
                            .filter((elem) => elem !== ' ')
                            .join('')

                        val[j][k] = fmin
                    }
                    if (k == 2) {
                        gag = sPart
                            .split('')
                            .splice(95 + 150 * (i + j), 3)
                            .filter((elem) => elem !== ' ')
                            .join('')

                        val[j][k] = gag
                    }
                }

                if (j == 2) {
                    break
                }

                tempNo = sPart
                    .split('')
                    .splice(42 + 150 * (i + j + 1), 7)
                    .filter((elem) => elem !== ' ')
                    .join('')
            }
            i += j
            //elem[r] = new Element(tempNo, plIndecator, val)
            //r++
            elem.push(new Element(tempNo, plIndecator, val, elemData))
        }
    }

    return elem
}
