BACKEND TASKS / API Contract:

1. POST /new/v1 -> user should be able to create a new task
    req: body: { name, description, dueDate }, params: null
    res: 200 Status OK

2. GET /tasks/v1/:name/:limit -> user should be able to view all tasks created in a list view, showing all the following details
    req: body: null, params: { name, limit }
    res: { name, description, dueDate, createDate, status: { notUrgent, dueSoon, overDue } } & 200 Status OK

3. PATCH /tasks/v1/:id -> user should be able to edit task name, description and due date
    req: { name, description, dueDate, priority }, params: { id }
    res: 200 Status OK

FRONTEND TASKS
1. Implement task creation
2. implement list view
3. edit button of each task
4. implement search bar
5. filtering of search bar
