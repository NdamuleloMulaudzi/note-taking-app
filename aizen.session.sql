Create TABLE notes (note_id SERIAL PRIMARY KEY,
user_id INT,
note_description VARCHAR(1500),
time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

