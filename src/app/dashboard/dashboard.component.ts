import { Component, OnInit } from '@angular/core';
import { Message, TreeNode } from 'primeng/api';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [MessageService],
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;

  chartOptions: any;

  subscription: Subscription;

  basicData: any;

  basicOptions: any;

  orgChart: TreeNode[];

  selectedNode: TreeNode;
  messages: Message[];
  constructor() {}

  ngOnInit() {
    this.orgChart = [
      {
        label: 'CEO',
        type: 'person',
        styleClass: 'ui-person',
        expanded: true,
        data: { name: 'Walter White', avatar: 'walter.jpg' },
        children: [
          {
            label: 'CFO',
            type: 'person',
            styleClass: 'ui-person',
            expanded: true,
            data: { name: 'Saul Goodman', avatar: 'saul.jpg' },
            children: [
              {
                label: 'Tax',
                styleClass: 'department-cfo',
              },
              {
                label: 'Legal',
                styleClass: 'department-cfo',
              },
            ],
          },
          {
            label: 'COO',
            type: 'person',
            styleClass: 'ui-person',
            expanded: true,
            data: { name: 'Mike E.', avatar: 'mike.jpg' },
            children: [
              {
                label: 'Operations',
                styleClass: 'department-coo',
              },
            ],
          },
          {
            label: 'CTO',
            type: 'person',
            styleClass: 'ui-person',
            expanded: true,
            data: { name: 'Jesse Pinkman', avatar: 'jesse.jpg' },
            children: [
              {
                label: 'Development',
                styleClass: 'department-cto',
                expanded: true,
                children: [
                  {
                    label: 'Analysis',
                    styleClass: 'department-cto',
                  },
                  {
                    label: 'Front End',
                    styleClass: 'department-cto',
                  },
                  {
                    label: 'Back End',
                    styleClass: 'department-cto',
                  },
                ],
              },
              {
                label: 'QA',
                styleClass: 'department-cto',
              },
              {
                label: 'R&D',
                styleClass: 'department-cto',
              },
            ],
          },
        ],
      },
    ];
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.data = {
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            '#42A5F5',
            '#66BB6A',
            '#FFA726',
            '#26C6DA',
            '#7E57C2',
          ],
          label: 'My dataset',
        },
      ],
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    };
  }
  onNodeSelect(event) {
    this.messages = [
      {
        severity: 'success',
        summary: 'Node Selected',
        detail: event.node.label,
      },
    ];
  }
  data1: number = 40;
}
