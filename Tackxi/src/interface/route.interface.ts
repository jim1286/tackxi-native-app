import {ModeEnum} from '../enums';

export interface SuggestResponse {
  location: Location;
  stationInfo: StationInfo;
  infoList: Info[];
}

export interface Location {
  start: string;
  end: string;
}

export interface StationInfo {
  [property: string]: {
    lon: string;
    lat: string;
    stationId: string | null;
  };
}

export interface Info {
  summary: {
    taxiFare: number;
    wastedTime: number;
    savedTime: number;
    savedMoney: number;
  };
  steps: Step[];
}

export interface Step {
  mode: ModeEnum;
  sectionTime: number;
  route: null | string;
  routeId: null | string;
  stationList: string[];
}
