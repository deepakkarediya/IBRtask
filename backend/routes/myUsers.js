const express = require('express');
const myUserController = require('../controllers/myUserController');
const multer = require('multer');
const router = express.Router();

const Storage = multer.diskStorage({
    destination:'uploads' ,
    filename: function (req, file, cb) {      
      cb(null, Date.now()+file.originalname)
    }

  })
const upload = multer({ storage: Storage })


// Create a product
router.post('/',upload.single('photo'), myUserController.createUser);
router.get('/', myUserController.getUser);

// // Get all products
// router.get('/', productController.getAllProducts);

// // Get a product by ID
// router.get('/:productId', productController.getProductById);

// // Update a product by ID
// router.put('/:productId', productController.updateProduct);

// // Delete a product by ID
// router.delete('/:productId', productController.deleteProduct);

module.exports = router;
