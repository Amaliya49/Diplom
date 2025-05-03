import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  try {
    const client = await pool.connect();

    // Получаем юзеров
    const userResult = await client.query('SELECT * FROM customer');
    const customers = userResult.rows;

    // Получаем конвертацию
    const conversionResult = await client.query('SELECT * FROM conversion');
    const conversions = conversionResult.rows;
    
    // Получаем избранное
    const favoriteResult = await client.query('SELECT * FROM favoriteSize');
    const favoriteSizes = favoriteResult.rows;

    // Получаем регионы
    const regionsResult = await client.query('SELECT * FROM region');
    const regions = regionsResult.rows;
    
    // Получаем категории
    const categoriesResult = await client.query('SELECT * FROM category');
    const categories = categoriesResult.rows;
    
    // Получаем размеры
    const sizesResult = await client.query('SELECT * FROM size');
    const sizes = sizesResult.rows;
    
    client.release();
    
    res.status(200).json({ customers, conversions, favoriteSizes, regions, categories, sizes });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}