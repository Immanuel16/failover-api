import express from 'express';

const router = express.Router();

router.get('/failed', async (req, res) => {
  setTimeout(() => {
    res.status(500).json('Something went wrong');
  }, 5000);
})

router.get('/success', async (req, res) => {
  setTimeout(() => {res.json('ok')}, 4000)
});
export default router;