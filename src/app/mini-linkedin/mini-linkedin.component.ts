import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommentDTO, PostDTO } from '../Model/post.model';

import { DataService } from '../services/data.service';
@Component({
  selector: 'app-mini-linkedin',
  templateUrl: './mini-linkedin.component.html',
  styleUrls: ['./mini-linkedin.component.css']
})
export class MiniLinkedinComponent implements OnInit {
  postForm = new FormGroup({})
  lstStatus: PostDTO[] = [];
  newcmnt: CommentDTO = new CommentDTO();
  ImagePath: string = "";
  // public response : { dbPath: ''; } 
  get f() { return this.postForm.controls; }

  constructor(private readonly dataService: DataService<any>) {
    this.initForm()
    this.GetAllStatus()

  }

  public uploadFinished = (event: any) => {
    // this.response = event;
    this.ImagePath = event;
  }
  initForm() {
    this.postForm = new FormGroup({})
    this.postForm = new FormGroup({
      text: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:56337/${serverPath}`;
  }


  GetAllStatus() {
    this.dataService.get(environment.ApiUrl + "MiniLinkedin/GetAllStatus", null)
      .subscribe(
        (data: PostDTO[]) => {
          if (data != null) {
            this.lstStatus = data;
          }
        },
        error => {
        });
  }

  async AddComment(id: string, comment: string) {
    this.newcmnt = new CommentDTO();
    this.newcmnt.pid = Number(id)
    this.newcmnt.Comments = comment;
    (await this.dataService.postData(environment.ApiUrl + 'MiniLinkedin/InsertComment', this.newcmnt)).toPromise().then((res) => {
      if (res != "-1") {
        this.GetAllStatus()
      }
      else {
        alert("Error")
      }
    });

  }
  async AddLike(id: string) {
    (await this.dataService.postData(environment.ApiUrl + 'MiniLinkedin/InserLike?id=' + id, null)).toPromise().then((res) => {
      if (res != "-1") {
        this.GetAllStatus()
      }
      else {
        alert("Error")
      }
    });
  }

  async onSubmit() {
    if (!this.postForm.invalid) {
      const val = this.postForm.value;
      (await this.dataService.postData(environment.ApiUrl + 'MiniLinkedin/InsertPost', { text: val.text, Image: this.ImagePath })).toPromise().then((res) => {
        if (res != "-1") {
          this.initForm()
          this.GetAllStatus()
          this.ImagePath = "";
        }
        else {
          alert("Error")
        }
      });
    }
  }



}
