import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-main-options',
  templateUrl: './main-options.component.html',
  styleUrls: ['./main-options.component.css']
})
export class MainOptionsComponent implements OnInit {
  selectedLanguage: string = 'es'; 
  valido: boolean = false;
  constructor(  private translateService: TranslateService ) {
    this.translateService.setDefaultLang(this.selectedLanguage); 
    this.translateService.use(this.selectedLanguage);
   }

  ngOnInit(): void {
  }

  toogleLanguage(lang: string) {
    if(lang == 'en') {
      this.selectedLanguage = 'en'
      this.translateService.use(lang);
      this.valido = !this.valido
    }
   
    if(!this.valido) {
      this.translateService.use('es');
    }
    
  }
 

}
