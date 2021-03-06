import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}
export const LESSONS_LIST_AVAILABLE = ' NEW_LIST_AVAILABLE';
export const ADD_NEW_LESSON = ' ADD_NEW_LESSON';

interface Subject {
  registerObserver(eventType: string, obs: Observer);
  unRegisterObserver(eventType: string, obs: Observer);
  notifyObserver(eventType: string, data: any);
}

class EventBus implements Subject {
  private observers: { [key: string]: Observer[] } = {};

  registerObserver(eventType: string, obs: Observer) {
    this.observersPerEventType(eventType).push(obs);
  }
  unRegisterObserver(eventType: string, obs: Observer) {
    _.remove(this.observersPerEventType(eventType), el => el === obs);
  }
  notifyObserver(eventType: string, data: any) {
    this.observersPerEventType(eventType).forEach(obs => {
      obs.notify(data);
    });
  }

  private observersPerEventType(eventType: string): Observer[] {
    const observersPerType = this.observers[eventType];
    if (!observersPerType) {
      this.observers[eventType] = [];
    }
    return this.observers[eventType];
  }
}

export const globalEventBus = new EventBus();
