    import { Component } from '@angular/core';
	  import { BrowserModule } from '@angular/platform-browser';
	  import { FormsModule } from '@angular/forms';
	  import { HttpModule, JsonpModule } from '@angular/http';
    import { Observable } from 'rxjs/Rx';


    @Component({
      selector: 'data-finder',
      template: `
        <section>
          Hello
        </section>
        `
      })
    export class AppComponent { 
      private baseUrl: string = 'http://swapi.co/api';

      constructor(private http : Http){
      }

      
    }