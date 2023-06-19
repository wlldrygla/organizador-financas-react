import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TableBody from "../FinanceTable/TableBody";
import Total from "../components/Total";
import TableHeader from "../FinanceTable/TableHeader";


const DivPaiStyle = styled.div`
text-align:center;
border:1px gray double;
border-radius: 5px;
margin:50px;
padding:30px;
background-color:white;
overflow-y: scroll;
height:500px;

@media (max-width: 768px) {
  margin: 5%;
  padding:5px;
}
`


const DivStyleDetalhes = styled.div`
`


const Resumo = (props) => {
  let user = props.user
  const baseURL = "https://api-finances-will.onrender.com/finance/get-all/" + user


  const [finance, setFinanca] = React.useState([]);
  let listaFinancasResumo = []
  let total = 0
  let total_antigo = 0
  let total_novo = 0
  let contador = 0
  React.useEffect(() => {
    axios.get(baseURL).then(financesResult => {
      contador = contador + 1;
      console.log(financesResult.data.finance)

      if (contador <= 1) {
        for (let i = 0; i < financesResult.data.finance.length; i++) {
          listaFinancasResumo.push(financesResult.data.finance[i]);
          setFinanca(listaFinancasResumo)
        }
      }
    });
  }, []);

  if (!finance) return (<h1>Carregando....</h1>);

  return (
    <DivPaiStyle className="teste">
      <TableHeader name='NOME' value='VALOR' ></TableHeader>

      {
        finance.map((item) => {
          if (props.month == item.month && item.situation == "unpay") {
            total_novo = item.value;
            if (item.category == "negative" || item.category == "investiment") {
              total = total_antigo - total_novo;
            } else { total = total_antigo + total_novo }
            total_antigo = total;

            return (

              <DivStyleDetalhes>
                <TableBody name={item.name} value={item.value} category={item.category} situation={item.situation} id={item._id}></TableBody>
              </DivStyleDetalhes>
            )
          }
        }
        )}
      <Total total={total}></Total>
      

    </DivPaiStyle>
  )
}


export default Resumo;