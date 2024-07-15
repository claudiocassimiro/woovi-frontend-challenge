"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/validations/paymentConfirmationSchema";

export default function PaymentConfirmationForm() {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [installment, setinstallment] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinstallment(event.target.value as string);
  };

  return (
    <Box
      className="flex flex-col gap-7 max-w-[427px]"
      component="form"
      autoComplete="off"
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="outlined-basic"
            label="Nome completo"
            variant="outlined"
            value={value}
            error={!!errors.name}
            helperText={errors.name && `${errors.name.message}`}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="cpf"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            value={value}
            error={!!errors.cpf}
            helperText={errors.cpf && `${errors.cpf.message}`}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="cardNumber"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="outlined-basic"
            label="Número do cartão"
            variant="outlined"
            value={value}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber && `${errors.cardNumber.message}`}
            onChange={onChange}
          />
        )}
      />

      <Box className="flex gap-[22px]" component="div">
        <Controller
          name="expiry"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="Vencimento"
              variant="outlined"
              value={value}
              error={!!errors.expiry}
              helperText={errors.expiry && `${errors.expiry.message}`}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="cvv"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="CVV"
              variant="outlined"
              value={value}
              error={!!errors.cvv}
              helperText={errors.cvv && `${errors.cvv.message}`}
              onChange={onChange}
            />
          )}
        />
      </Box>

      <TextField
        value={installment}
        select
        label="Parcelas"
        onChange={handleChange}
      >
        <MenuItem value="1x R$ 30.500,00">1x R$ 30.500,00</MenuItem>
        <MenuItem value="2x R$ 15.300,00<">2x R$ 15.300,00</MenuItem>
        <MenuItem value="3x R$ 10.196,66">3x R$ 10.196,66</MenuItem>
        <MenuItem value="4x R$ 7.725,00">4x R$ 7.725,00</MenuItem>
        <MenuItem value="5x R$ 6.300,00">5x R$ 6.300,00</MenuItem>
        <MenuItem value="6x R$ 5.283,33">6x R$ 5.283,33</MenuItem>
        <MenuItem value="7x R$ 4.542,85">7x R$ 4.542,85</MenuItem>
      </TextField>
    </Box>
  );
}
