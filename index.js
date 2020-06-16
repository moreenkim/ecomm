const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <div>
     <form>
      <input placeholder="email"/>
      <input placeholder="Password"/>
      <input placeholder="Password confirmation"/>
      <button>Sign up</button>
     </form>
    </div>
    `);
});

app.listen(3000, () => {
    console.log('listening')
});