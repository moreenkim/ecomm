const fs = require('fs');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('creating a repository requires filename');
    }

    this.filename = filename;
    try {
      false.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  async getAll() {
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf8',
    });
    console.log(contents);
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  await repo.getAll();
};

test();
