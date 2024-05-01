export interface NewTaskArgs {
    name: string;
    description: string;
    dueDate: string;
    priority: number;
}

export interface UserLoginArgs {
    username: string;
    password: string;
}