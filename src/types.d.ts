declare namespace NodeJS { interface Timeout {} }
declare var require: any;
declare var module: any;

declare namespace ioBroker {
  type State = {
    val: any;
    ack: boolean;
    ts?: number;
    lc?: number;
    from?: string;
  } | null;
}

declare module "@iobroker/adapter-core" {
  export interface AdapterOptions {
    name?: string;
    [key: string]: any;
  }

  export class Adapter {
    constructor(options?: AdapterOptions);
    name: string;
    namespace: string;
    config: any;
    log: {
      silly: (...args: any[]) => void;
      debug: (...args: any[]) => void;
      info: (...args: any[]) => void;
      warn: (...args: any[]) => void;
      error: (...args: any[]) => void;
    };
    on(event: string, handler: (...args: any[]) => void): void;
    subscribeStates(pattern: string): void;
    setState(id: string, value: any, ack?: boolean, callback?: (err?: Error | null) => void): void;
    setStateAsync(id: string, value: any, ack?: boolean): Promise<void>;
    setStateChangedAsync(id: string, value: any): Promise<void>;
    getStateAsync(id: string): Promise<ioBroker.State>;
    extendObjectAsync(id: string, obj: any): Promise<void>;
    setObjectNotExistsAsync(id: string, obj: any): Promise<void>;
    delObjectAsync(id: string, options?: any): Promise<void>;
    terminate(reason?: string): void;
  }
}
