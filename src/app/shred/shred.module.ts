//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common"

//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent
    ],
    imports: [
      RouterModule,
      CommonModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
  })

  export class ShredModule {}