const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product }]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = await Category.findByPk(req.params.id, {
      include: [{model: Product }]
    });

    if (!categoryId) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryId);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryId = await Category.create(req.body);
    res.status(200).json(categoryId)
  } catch (err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryId = await Category.update(req.body, {
       where: {
        id: req.params.id
       }
    });
    res.status(200).json(categoryId);

  } catch {
    res.status(400).json(err);
  }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryToDelete = await Category.destroy ({
      where: {
        id: req.params.id,
      },
    })
    if(!categoryToDelete) {
      res.status(404).json({ message: 'No category found with that id.'});
      return;
    }
    res.status(200).json({message: "Success!"})

  } catch (err) {
     res.status(500).json(err);
  }
});

module.exports = router;
