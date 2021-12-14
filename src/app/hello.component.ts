import { ChangeDetectionStrategy } from "@angular/core";
import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  @Input() name: string;
  loading = false;
  @Input() customer: any;
  constructor() {
    console.log("in constructor");
    console.log(this.name);
  }
  helloComponentRendering() {
    console.log("hello component rendering");
  }

  changeMe() {
    this.name = "Angular 11";
  }

  ngOnChanges() {
    console.log("on changes");
    console.log(this.name);
  }
  ngOnInit() {
    console.log("on init");
    console.log(this.name);
    // setTimeout(() => {
    //   this.loading = true;
    // }, 5000);
  }
  ngDoCheck() {
    console.log("Hello component do check");
    console.log("Name changed to : " + this.name);
    console.log(this.customer);
  }
  // ngAfterContentInit() {
  //   console.log("after content init");
  //   console.log(this.name);
  // }
  // ngAfterContentChecked() {
  //   console.log("after content checked");
  //   console.log(this.name);
  // }
  // ngAfterViewInit() {
  //   console.log("after view init");
  //   console.log(this.name);
  // }
  // ngAfterViewChecked() {
  //   console.log("after view checked");
  //   console.log(this.name);
  // }
  // ngOnDestroy() {
  //   console.log("on destroy");
  //   console.log(this.name);
  // }
}
