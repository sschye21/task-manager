export const SQL_STATEMENTS = {
    insertTask: `
        INSERT INTO tasks (name, description, dueDate, createDate, status)
        VALUES ($1, $2, $3, $4, $5)`,
    selectAllTasks: `
        SELECT * 
        FROM tasks`,
    searchTasks: `
        SELECT * 
        FROM tasks
        WHERE name LIKE $1 || '%'`,
    updateTask: `
        UPDATE tasks
        SET 
            name = COALESCE($1, name), 
            description = COALESCE($2, description), 
            dueDate = COALESCE($3, dueDate),
            status = COALESCE($4, status)
        WHERE id = $5`,
    login: `
    `,
    register: `
        INSERT INTO users (id, username, password)
        VALUES ($1, $2, $3)
    `,
    updateUser: `
        UPDATE users
        SET
            username = COALESCE($1, username)
            password = COALESCE($2, password)
        WHERE id = $3
    `
}