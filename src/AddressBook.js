function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  var contacts = this.contacts
  contacts[contacts.length] = contact
}

AddressBook.prototype.getContact = function(index) {
  var contacts = this.contacts
  return contacts[index]
}

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index, 1)
}
