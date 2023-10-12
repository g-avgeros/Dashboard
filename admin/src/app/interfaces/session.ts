export interface Session {
  id: string;
  measuredTime: Date;
  evse_uid: string;
  currency: string;
  connector_id: string;
  country_code: string;
  last_updated: Date;
  end_date_time: Date;
  kwh: number;
  total_cost: number;
  party_id: string;
  start_date_time: Date;
  status: string;
  _id: string;
  location_id: string;
}
