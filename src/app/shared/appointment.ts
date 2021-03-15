export interface Appointment {
  title: string;
  dateOfStart: Date;
  participants: string;
  sportKind?: string;
  direction: string;
  status: string;
  placeOfHolding?: {
    country: string;
    region: string;
    town: string;
    sportHallName: string;
    address: string;
  };
}
