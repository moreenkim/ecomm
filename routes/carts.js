const express = require('express');
const router = express.Router();

//receive post req to add item to cart
router.post('/cart/products', (req, res) => {
  console.log(req.body.productId);

  res.send('product added to cart');
});
//get req to show items o cart

//post to delete item rfrom caryt

module.exports = router;
