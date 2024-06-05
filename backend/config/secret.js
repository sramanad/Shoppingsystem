const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(process.cwd(), '.env') })

module.exports.secret = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  db_url: process.env.MONGO_URI,
  token_secret: process.env.TOKEN_SECRET,
  jwt_secret_for_verify: process.env.JWT_SECRET_FOR_VERIFY,

  email_service: process.env.SERVICE,
  email_user: process.env.EMAIL_USER,
  email_pass: process.env.EMAIL_PASS,
  email_host: process.env.HOST,
  email_port: process.env.EMAIL_PORT, 
  
  stripe_key: process.env.STRIPE_KEY, 
  client_url: process.env.STORE_URL, 
  admin_url:process.env.ADMIN_URL, 
}
