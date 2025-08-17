export interface State {
  showHud: boolean;
  position: {
    currentZone: string;
    currentStreet: string;
    direction: string;
  };
  minimap: {
    x: number;
    y: number;
  };
  character: {
    id: number;
    ping: number;
    health: number;
    armor: number;
    cash: number;
    bank: number;
  };
  vehicle: {
    isInVehicle: boolean;
    speed: number;
    fuel: number;
    tankSize: number;
    hasSeatbelt: boolean;
    isEngineOn: boolean;
  };
}
