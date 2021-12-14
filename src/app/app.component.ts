import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  counter = 12;
  customer = {
    name: "Amit",
    age: 23
  };
  changeAngularVersion() {
    this.name = "Angular " + this.counter++;
  }

  updateCustomer() {
    this.customer.age = 34;
  }
}
