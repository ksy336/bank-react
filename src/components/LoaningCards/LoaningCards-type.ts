export interface ICard {
  applicationId: number,
  requestedAmount: number,
  totalAmount: number,
  term: number,
  monthlyPayment: number,
  rate: number,
  isInsuranceEnabled: boolean,
  isSalaryClient: boolean
}
export type CardProps = {
  card: ICard;
}