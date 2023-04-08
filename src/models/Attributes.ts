

export class Attributes<T extends object> {

  constructor(private data: T) {
    console.log(`Attributes constructor called with data: ${JSON.stringify(data)}`);
  }

  get = <K extends keyof T>(key: K): T[K] => {
    console.log(`Attributes.get called with key: ${key.toString()}`);
    console.log(`At this point this.data is: ${JSON.stringify(this.data)}`);
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
  
  getAll(): T {
    return this.data;
  }
}
