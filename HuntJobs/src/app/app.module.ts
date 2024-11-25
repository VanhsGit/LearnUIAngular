import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { JobsComponent } from "./jobs/jobs.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { JobComponent } from "./jobs/job/job.component";
import { DJobsComponent } from "./jobs/djobs/djobs.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { JobItemComponent } from "./jobs/job/job-item/job-item.component";

@NgModule({
    declarations: [
      SidebarComponent,
      JobsComponent, 
      JobComponent,
      DJobsComponent,
      JobItemComponent,
      AppComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  