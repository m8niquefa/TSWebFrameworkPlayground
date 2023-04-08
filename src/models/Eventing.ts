type Callback = () => void;

export class Eventing {

  // Basically the fields could have any name. But we want to make sure 
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // if undefined, set to empty array
    const handlers = this.events[eventName] || []; 
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}