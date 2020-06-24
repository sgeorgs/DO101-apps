require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@localhost:5432/contacts';
import { Pool } from 'pg';

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

export default { pgconn }