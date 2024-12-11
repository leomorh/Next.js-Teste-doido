

import MainLayout from "@/layouts/layoutPadrao"
import NovaSenha from '@/components/SenhaCode'
import React, { useState } from "react";
import axios from "@/utils/axios";

export default function Senha({ }) {

  let [controller, setController] = useState(true);

  const handleDataFromChild = async (Email) => {
    try {
      const response = await axios.post(`/send`, { Email })
      if (response.type === "success") {
        await setController(true)
     }
    } catch (error) {
      console.log(error.message);

    }
  }

  const sendCode = async (data = {}) => {
    try {
      setController(false)
      const response = await axios.post(`/code`, { ...data })
      if (response.type === "error") {
         setController(false)
      }else{
        setController(true)
      }
    } catch (error) {
      console.log(error.message);

    }
  }

  const sendPassword = async (data = {}) => {
    try {
      const response = await axios.post(`/newPassword`, { ...data })
      if (response.type === "info") {
        setController(true)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
        <NovaSenha handleDataFromChild={handleDataFromChild} sendCode={sendCode} sendPassword={sendPassword} controller={controller}/>
    </>
  );
}