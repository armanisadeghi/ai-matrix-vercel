export type Function = {
  id: string;
  displayName: string;
  functionName: string;
  modulePath: string;
  class: string;
  returnName: string;
  returnDataType: string;
  defaultBroker: string;
  Args: Arg[];
};

type Arg = {
  name: string;
  dataType: string;
  defaultBroker: string;
  defaultValue: string;
  defaultValueReady: boolean;
};
