import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public message: string = "";
  public progress: string = "";
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient, private readonly dataService: DataService<any>) { }

  ngOnInit(): void {
  }

  public uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }

    this.dataService.Uploadfile(files)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = 'Upload progress..';
        }
        if (event.type === HttpEventType.Response) {
          this.progress = '';
          alert("Image attached successfully.")
          this.onUploadFinished.emit(event.body.dbPath);
        }
      });
  }
}
