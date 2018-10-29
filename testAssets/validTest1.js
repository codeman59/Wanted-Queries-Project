module.exports = (cheesehead, header, mke, origAgencyId, name, height, weight, hair, offence) => {

    // I'M FROM WISCONSIN

    cheesehead
        .click('@menuButton')
        .click('@enterWanted')
        .click('@header')
        .setValue('@header', header)
        .click('@mke')
        .setValue('@mke', mke)
        .click('@origAgencyId')
        .setValue('@origAgencyId', origAgencyId)
        .click('@name')
        .setValue('@name', name)
        .click('@height')
        .setValue('@height', height)
        .click('@weight')
        .setValue('@weight', weight)
        .click('hair')
        .setValue('@hair', hair)
        .click('@offence')
        .setValue('@offence', offence)
        .click('@saveButton')
        .expect.element('@header').text.to.equal(header)
    cheesehead
        .expect.element('@mke').value.to.equal(mke)
    cheesehead
        .expect.element('@origAgencyId').value.to.equal(origAgencyId)
    cheesehead
        .expect.element('@name').value.to.equal(name)
    cheesehead
        .expect.element('@height').value.to.equal(height)
    cheesehead
        .expect.element('@weight').value.to.equal(weight)
    cheesehead
        .expect.element('@hair').value.to.equal(hair)
    cheesehead
        .expect.element('@offence').value.to.equal(offence)

}