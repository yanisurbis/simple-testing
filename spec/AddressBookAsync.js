describe('Async Address Book', function() {
  var addressBook = new AddressBook();

  beforeEach(function(done) {
    addressBook.getInitialContacts(function() {
      done();
    });
  });

  it('should grab initial contacts', function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
