function AddressBook() {
  this.contacts = []
  this.initialComplete = false
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

AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this

  setTimeout(function() {
    self.initialComplete = true
    if (cb) {
      return cb()
    }
  }, 3)
}
