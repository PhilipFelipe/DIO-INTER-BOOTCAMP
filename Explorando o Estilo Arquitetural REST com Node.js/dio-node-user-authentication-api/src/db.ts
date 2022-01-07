import { Pool } from 'pg';

const connectionString = 'postgres://mqvzgzbe:DTowNoaSs4GyYZKBhERIG2guanNT8-pq@kesavan.db.elephantsql.com/mqvzgzbe';
const db = new Pool({ connectionString });



export default db;