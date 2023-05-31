const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Guilherme',
    email: 'guilherme@gmail.com',
    phone: '62986292640',
    category: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
