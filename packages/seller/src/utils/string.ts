import {
  formatToPhone,
  formatToCPFOrCNPJ,
  formatToCEP,
} from 'brazilian-values';

export function formatPhoneNumber(phoneNumber: string) {
  return formatToPhone(phoneNumber);
}

export function formatCPF(cpf: string) {
  return formatToCPFOrCNPJ(cpf);
}

export function formatCep(cep: string) {
  return formatToCEP(cep);
}
