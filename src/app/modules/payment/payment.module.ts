import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PaymentLandingComponent } from "./components/payment-landing/payment-landing.component";
import { PaymentCardComponent } from "./components/payment-card/payment-card.component";
import { PaymentService } from "./services/payment.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [PaymentLandingComponent, PaymentCardComponent],
  providers: [PaymentService]
})
export class PaymentModule {}
