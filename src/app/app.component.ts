import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yebelotechnologyAssignment';
  Submission! :FormGroup;
  submitted=false;
  public jsonData: any;
  public jsonDataGlobal: any;
  selected=true;
filtered :any;
categoriesList:any;
myControl = new FormControl();
  constructor(private formBuilder: FormBuilder,
    private jsonService: JsonService) {
  }
  
  public ngOnInit(): void {
    this.jsonService.getData()
      .subscribe((data: any): void => {
        console.info(data);
        this.jsonData = data;
        this.jsonDataGlobal=data;
        this.selectCategories();
      });
      this.myControl.valueChanges.subscribe(val=>{
       
        this. onOptionsSelected(val);
      })
      
      ;
   
  }
  onOptionsSelected(val:any) {
debugger;
    this.jsonData=val=="All"?this.jsonDataGlobal:this.jsonDataGlobal.filter((t:any)=>t.p_category==val)

  }
  selectCategories(){
    this.categoriesList=[];
    this.jsonDataGlobal.forEach((element:any) => {
      debugger;
      if(element.p_category){
        this.categoriesList.push(element.p_category)
      }
    });
  }
  AddQuantity(){
    this.jsonDataGlobal.forEach((e:any) => {
      debugger;
     e.quantity ="";
    });
  }
  savedata(){
    // console.log(this.jsonData);
    console.log(this.jsonDataGlobal)
    window.alert(JSON.stringify(this.jsonDataGlobal));
  }
}
