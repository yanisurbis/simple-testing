function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  var contacts = this.contacts
  contacts[contacts.length] = contact
}

AddressBook.prototype.getContact = function(number) {
  var contacts = this.contacts
  return contacts[number]
}
