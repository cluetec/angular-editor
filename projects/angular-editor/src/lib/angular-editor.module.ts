import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AeButtonComponent } from "./ae-button/ae-button.component";
import { AeSelectComponent } from "./ae-select/ae-select.component";
import { AeToolbarSetComponent } from "./ae-toolbar-set/ae-toolbar-set.component";
import { AngularEditorToolbarComponent } from "./angular-editor-toolbar.component";
import { AngularEditorComponent } from "./angular-editor.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AngularEditorComponent,
    AngularEditorToolbarComponent,
    AeSelectComponent,
    AeButtonComponent,
    AeToolbarSetComponent,
  ],
  exports: [
    AngularEditorComponent,
    AngularEditorToolbarComponent,
    AeButtonComponent,
    AeToolbarSetComponent,
  ],
})
export class AngularEditorModule {}
