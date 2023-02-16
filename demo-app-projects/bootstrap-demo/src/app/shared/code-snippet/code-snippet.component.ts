import { Component, Input, OnInit } from '@angular/core';
import 'prismjs';
import * as fs from 'fs';
declare var Prism: any;

@Component({
  selector: ' app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
})
export class CodeSnippetComponent implements OnInit {
  get language(): string {
    return this._language;
  }

  get path(): string {
    return this._path;
  }

  @Input() set language(value: string) {
    this._language = value;
  }

  @Input() set path(value: string) {    
    console.log(value);
    this._path = fs.readFileSync(value, 'utf-8');
    console.log(this._path);
  }

  private _path: string;
  private _language = 'markup';
  constructor() {}

  ngOnInit(): void {}
}
