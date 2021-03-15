export interface Appointment {
  title: string;
  startDate: Date;
  finishDate: Date;
  duration?: number;
  placeOfHolding?: PlaceOfHolding;
  participants: string;
  sportKind?: string;
  direction: string;
  status: string;
  organiser: string;
}

export interface PlaceOfHolding {
  country: string;
  region?: string;
  town: string;
  sportHallName?: string;
  address?: string;
}

export interface QuantityOfParticipants {
  countries?: number;
  regions?: number;
  educationEntity?: number;
  sportsmen: number;
  coaches?: number;
  referees?: number;
  others: number;
  total: number;
}
