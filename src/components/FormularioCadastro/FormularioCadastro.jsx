import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

// Formulario criado e sendo usado com duas props com varios estados
function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // previnindo comportamento padrão do formulario submint
        aoEnviar({nome, sobreNome, cpf, promocoes, novidades});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value); // pegando o valor do target(oque foi digitado)
        }}
        id="nome"
        label="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobreNome}
        onChange={(event) => {
          setSobrenome(event.target.value); // pegando valor do target(oque for digitado)
        }}
        id="sobrenome "
        label="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value); // pegando valor do target(oque for digitado)
        }}

        
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
          checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
          checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
