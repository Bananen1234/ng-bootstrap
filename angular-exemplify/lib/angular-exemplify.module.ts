import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CodeSnippetComponent } from "./components/code-snippet/code-snippet.component";
import { ExemplifyComponent } from "./components/exemplify/exemplify.component";

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule],
    declarations: [ExemplifyComponent, CodeSnippetComponent],
    exports: [ExemplifyComponent]
  })
  export class AngularExemplifyModule { }