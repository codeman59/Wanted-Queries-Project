module.exports = {
    url:'http://localhost:3000/#/',
    elements: {
        menuButton: {
            selector: ('(//button)[2]'),
            locateStrategy: 'xpath'
        },
        enterWanted: ('p[name="enterOption"]'),
        modifyWanted: ('p[name="modifyOption"]'),
        cancelWanted: ('p[name="cancelOption"]'),
        warrentID: ('input[name="widInput"]'),
        header: ('input[name="hdrInput"]'),
        mke: ('input[name="mkeInput"]'),
        origAgencyId: ('input[name="oriInput""]'),
        name: ('input[name="namInput"]'),
        // enterWanted: ('input[name="enterOption"]'),
        // sex: ('select[name="sexInput"]'),
        race: ('input[name="enterOption"]'),
        height: ('input[name="hgtInput"]'),
        weight: ('input[name="wgtInput"]'),
        hair: ('input[name="haiInput"]'),
        offence: ('input[name="offInput"]'),
        saveButton: {
            selector: ('(//button)[3]'),
            locateStrategy: 'xpath'
        },

    }
}