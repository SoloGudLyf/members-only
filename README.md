# Members Only (The Exclusive Clubhouse)

A full-stack web application where users can share messages anonymously. While anyone can read the posts, only signed up Members can see who wrote a post and when, and only Admins have the power to delete them.

## 🚀 Features

Authentication: Secure sign-up and login system using Passport.js and Bcryptjs.

### Three-Tier Access Control:

Guest: Can see message content only.

Member: Can see message content, authors, and timestamps.

Admin: Can see everything and has the authority to delete posts.

Secret Passcodes: Users must enter a specific secret phrase to become an Admin during sign up.

Validation & Sanitization: Robust form handling using express-validator to prevent XSS and ensure data integrity.

Database: PostgreSQL integration for persistent storage of users and messages.

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript Templates), CSS3

Database: PostgreSQL

Authentication: Passport.js (Local Strategy)

Environment: ES Modules (ESM)

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v16.x or higher)

PostgreSQL

⚙️ Installation & Setup
Clone the repository:

```Bash
git clone https://github.com/yourusername/members-only.git
cd members-only
Install dependencies:
```

```Bash
npm install
```

Environment Variables: Create a .env file in the root directory and add the following:

Code snippet

DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_random_secret_string
CLUB_PASSCODE=the_secret_to_join
ADMIN_PASSCODE=the_secret_for_admin
Database Setup: Run the following SQL commands in your PostgreSQL terminal to create the necessary tables:

```SQL

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE,
password TEXT,
time DATE,
admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE users_posts (
id SERIAL PRIMARY KEY,
title VARCHAR(255),
post TEXT,
username INTEGER UNIQUE,
date DATE
);
```

Start the application:

```Bash

npm start
```

The app will be running at <http://localhost:3000>.

## 🛡️ Security Features

**Password Hashing:** User passwords are never stored in plain text; they are salted and hashed using bcryptjs.

**Form Validation:** All inputs are checked for proper length and format.

**HTML Sanitization:** Protection against malicious scripts being injected into messages.

**Authorization Middleware:** Custom checks to ensure only Admins can access the delete route.
