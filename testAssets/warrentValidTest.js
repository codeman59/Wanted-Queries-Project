module.exports = (cheesehead, warrentID, name,) => {

    // I'M FROM WISCONSIN

    cheesehead
        .click('@menuButton')
        .click('@modifyWanted')
        .click('@warrentID')
        .setValue('@warrentID', warrentID)
        .click('@name')
        .setValue('@name', name)
        .click('@saveButton')
        .expect.element('@header').text.to.equal(warrentID)
    cheesehead
        .expect.element('@name').value.to.equal(name)
    

}