import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValid = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(""),
    [searchOk, setSearchOk] = useState(false),
    [loading, setLoading] = useState(false),
    [profissionals, setProfissionals] = useState([] as UserShortInterface[]),
    [remainingProfissionals, setRemainingProfissionals] = useState(0);

  async function searchProfissionals(cep: string) {
    setSearchOk(false);
    setLoading(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setProfissionals(data.diaristas);
      setRemainingProfissionals(data.quantidade_diaristas);
      setSearchOk(true);
      setLoading(false);
    } catch (error) {
      setError("CEP não encontrado");
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    cepValid,
    searchProfissionals,
    error,
    profissionals,
    searchOk,
    loading,
    remainingProfissionals,
  };
}
