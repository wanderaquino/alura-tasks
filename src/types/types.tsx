export interface TaskItemProps {
    id: string,
    title: string, 
    time: string,
    isSelected: boolean
};

export interface TaskProps {
    id: string,
    title: string, 
    time: string,
    isSelected: boolean,
    selectFunction: (taskItem : TaskItemProps) => void
};

export interface TaskListProps {
    tasks: Array<TaskItemProps>
};

export interface TaskList extends TaskListProps {
   selectFunction: (taskItem : TaskItemProps) => void
}