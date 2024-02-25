import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [
    { date: '01/03/2024', user: 'User123', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more comments as needed
  ];
  commentSection!: FormGroup

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.commentSection = this.fb.group({
      comment: ['', Validators.required]
    });

    this.commentSection.valueChanges.subscribe((data) => {
      this.messageService.sendMessage('Comments', data);
    });
  }

}
