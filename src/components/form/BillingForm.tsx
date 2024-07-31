import { redirect, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function BillingForm() {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Address</CardTitle>
        <CardDescription>
          Fill in the form below to complete your purchase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/success");
          }}
          className="space-y-3 max-w-md"
        >
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="First Name"
              className="input"
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="input"
              required
            />
          </div>
          <Input type="email" placeholder="Email" className="input" required />
          <Input type="number" placeholder="Phone" className="input" required />
          <Input type="text" placeholder="Address" className="input" required />

          <CardTitle className="mt-5">Payment Information</CardTitle>
          <RadioGroup defaultValue="cod" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash On Delivery</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem disabled value="stripe" id="stripe" />
              <Label htmlFor="stripe">Stripe (Not available)</Label>
            </div>
          </RadioGroup>
          <>
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </>
        </form>
      </CardContent>
    </Card>
  );
}
