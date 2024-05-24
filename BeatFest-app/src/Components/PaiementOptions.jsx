import React from 'react';
import {
  Card, CardHeader, CardContent, CardActions, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel,
  TextField, MenuItem, Button
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function PaymentOptions() {
  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', padding: 2 }}>
      <CardHeader
        title="Choisissez votre mode de paiement"
        subheader="Sélectionnez votre méthode de paiement préférée pour finaliser votre achat."
      />
      <CardContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">Méthode de paiement</FormLabel>
          <RadioGroup row defaultValue="card" name="payment-method">
            <FormControlLabel value="card" control={<Radio />} label={<CreditCardIcon />} />
            <FormControlLabel value="wallet" control={<Radio />} label={<AccountBalanceWalletIcon />} />
            <FormControlLabel value="bank" control={<Radio />} label={<AccountBalanceIcon />} />
          </RadioGroup>
        </FormControl>
        <TextField fullWidth label="Nom" margin="normal" placeholder="Prénom Nom" />
        <TextField fullWidth label="Numéro de carte" margin="normal" placeholder="" />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <TextField
            select
            label="Expire Mois"
            fullWidth
            defaultValue=""
          >
            {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'].map((month, index) => (
              <MenuItem key={index} value={index + 1}>{month}</MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Expire Année"
            fullWidth
            defaultValue=""
          >
            {Array.from({ length: 10 }, (_, index) => 2024 + index).map(year => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </TextField>
          <TextField fullWidth label="CVC" margin="normal" placeholder="CVC" />
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          <a href='/envoie'>Continuer</a>
        </Button>
      </CardActions>
    </Card>
  );
}
