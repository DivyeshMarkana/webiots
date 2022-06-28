import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/tast';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-dashboard',
  templateUrl: './to-do-dashboard.component.html',
  styleUrls: ['./to-do-dashboard.component.scss']
})

export class ToDoDashboardComponent implements OnInit {

  parsedJson: any;

  constructor(private todoService : ToDoService) { }

  ngOnInit(): void {
    this.loadData()
  }

  tasks: Task[] = [
    // {
    //   title: 'Go home',
    //   isCanceled: false,
    //   isDeleted: false
    // },
  ]

  loadData() {
    const parsedData: string = this.todoService.getData('myData')

    this.parsedJson = JSON.parse(parsedData)

    for (let i in this.parsedJson) {
      let task: Task = <Task>this.parsedJson[i]
      this.tasks.push(task)
    }
  }

  clearToDo() {
    const do_delete = confirm('Are you sure to delete all the task')

    if (do_delete) {
      this.tasks.splice(0);
      this.todoService.clearData()
    }
  }

  addTask(input) {
    let value = input.value;
    input.value = "";

    if (value !== '') {
      this.tasks.push(
        {
          title: value,
          isCanceled: false,
          isDeleted: false
        });
    }
    this.todoService.setData("myData", this.tasks)
  }

  editTask(idx: number) {
    let title = this.tasks[idx].title;
    let result = prompt('Edit Task Title', title)

    if (result !== null) {
      this.tasks[idx].title = result
    }
  }

  cancleTask(idx: number) {
    if (this.tasks[idx].isCanceled) {
      this.tasks[idx].isCanceled = false;
    } else {
      this.tasks[idx].isCanceled = true;
    }
  }

  deleteTask(idx) {
    const do_delete = confirm('Are you sure to delete the task')

    if (do_delete) {
      this.tasks.splice(idx, 1)
      this.todoService.setData("token", this.tasks)
    }
  }

}
