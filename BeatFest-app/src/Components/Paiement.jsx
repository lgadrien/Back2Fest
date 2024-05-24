import React, { useState } from 'react';
import {
  CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card,
  RadioGroupItem, RadioGroup, Label, Input, SelectValue, SelectTrigger, SelectItem, SelectContent, Select, Button
} from "@/components/ui";
import { CreditCardIcon, WalletCardsIcon, BanknoteIcon } from 'your-icon-library'; // Adjust the import based on your setup

export default function PaymentComponent() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Payment processed:', data);
      // Handle success (e.g., navigate to a confirmation page)
    } catch (error) {
      console.error('Payment processing error:', error);
      // Handle error
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Choisissez votre mode de paiement</CardTitle>
        <CardDescription>Sélectionnez votre méthode de paiement préférée pour finaliser votre achat.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <RadioGroup
          className="grid grid-cols-3 gap-4"
          defaultValue="card"
          onValueChange={(value) => handleSelectChange('paymentMethod', value)}
        >
          <div>
            <RadioGroupItem className="peer sr-only" id="card" value="card" />
            <Label htmlFor="card" className="flex flex-col items-center">
              <CreditCardIcon className="mb-3 h-6 w-6" />
              Carte bancaire
            </Label>
          </div>
          <div>
            <RadioGroupItem className="peer sr-only" id="wallet" value="wallet" />
            <Label htmlFor="wallet" className="flex flex-col items-center">
              <WalletCardsIcon className="mb-3 h-6 w-6" />
              Portefeuille numérique
            </Label>
          </div>
          <div>
            <RadioGroupItem className="peer sr-only" id="bank" value="bank" />
            <Label htmlFor="bank" className="flex flex-col items-center">
              <BanknoteIcon className="mb-3 h-6 w-6" />
              Virement bancaire
            </Label>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Prénom Nom" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Numéro de carte</Label>
          <Input id="number" name="number" value={formData.number} onChange={handleInputChange} placeholder="" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Expire</Label>
            <Select onValueChange={(value) => handleSelectChange('month', value)}>
              <SelectTrigger id="month">
                <SelectValue placeholder="Mois" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(12).keys()].map(i => (
                  <SelectItem key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="year">Année</Label>
            <Select onValueChange={(value) => handleSelectChange('year', value)}>
              <SelectTrigger id="year">
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10).keys()].map(i => (
                  <SelectItem key={i} value={2024 + i}>{2024 + i}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" name="cvc" value={formData.cvc} onChange={handleInputChange} placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>Continuer</Button>
      </CardFooter>
    </Card>
  );
}


function BanknoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function WalletCardsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}