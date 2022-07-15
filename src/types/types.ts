export interface TaskItemProps {
    id: string,
    title: string, 
    time: string,
    isSelected: boolean
};

export interface SelectableTask extends TaskItemProps {
    selectFunction: (taskItem : TaskItemProps) => void
};

export interface TaskListProps {
    tasks: Array<TaskItemProps>
};

export interface SelectableTaskList extends TaskListProps {
   selectFunction: (taskItem : TaskItemProps) => void
}

export interface FormProps {
    addTask: ({} : TaskItemProps)=>void
}

export interface WatchProps {
    time: string
}

export interface WatchTime {
    startTime: string
}

export interface ButtonProps {
    textButton: string,
    type: "button" | "submit" | "reset",
    onClickFunction: () => void
}
