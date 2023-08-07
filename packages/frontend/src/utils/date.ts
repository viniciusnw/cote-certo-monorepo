import ptBR from 'date-fns/locale/pt-BR';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInYears from 'date-fns/differenceInYears';
import format from 'date-fns/format';

export function getAgeFromBirthdate(birthdate: Date) {
  return differenceInYears(new Date(), birthdate);
}

export function formatDate(date: Date) {
  return format(new Date(date), 'dd/MM/yyyy', {
    locale: ptBR,
  });
}

export function calculoDias(data: Date) {
  const differenceInDays = differenceInCalendarDays(new Date(), data);
  if (!differenceInDays) return 'Hoje: '
  return `Últimos ${differenceInDays} dia(s): `;
}

export function formatDateWithHours(date: Date) {
  return format(new Date(date), "dd/MM/yyyy 'ás' hh:MM", {
    locale: ptBR,
  });
}

export function getNextUtilDay(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();

  if (day === 0) d.setDate(d.getDate() + 1);
  else if (day === 6) d.setDate(d.getDate() + 2);
  else if (day === 5) d.setDate(d.getDate() + 3);
  else d.setDate(d.getDate() + 1);

  return d;
}