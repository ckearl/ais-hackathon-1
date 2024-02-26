export type TScan = {
  eventId: number;
  netId: string;
  plusOne: number;
  scannerId: string;
  timestamp?: number;
};

export type TUser = {
  dateCreated: number;
  firstName: string;
  isAdmin: number;
  lastName: string;
  netId: string;
  scans: TScan[];
  events: TEvent[];
};

export type TEvent = {
  createdBy: string;
  createdDate: number;
  editDate: number;
  editedBy: string;
  endTime: number;
  notes: string;
  startTime: number;
  title: string;
  type: string;
  location: string;
};
