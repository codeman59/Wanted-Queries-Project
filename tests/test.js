var pageObjects = {}

var validTest1 = require('../testAssets/validTest1')
var warrentValidTest = require('../testAssets/warrentValidTest')

module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.wantedQueriesPO()
        pageObjects.navigate()
        console.log()

    },

    after: browser => {
        browser.end()
    },

    'Valid Test': browser => {
        validTest1(pageObjects, 'wisconsin', '!@#', 'abcabcabc', 'scott', '603', '190', 'bald', 'murder')
    },

    'WarrentTest': browser => {
        warrentValidTest(pageObjects, '1234512345', 'shearer')

    }


}