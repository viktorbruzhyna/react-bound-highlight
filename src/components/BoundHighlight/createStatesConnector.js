const createStatesConnector = () => ({
  observers: [],
  addObserver(id, observer) {
    this.observers.push({ id, observer });
  },
  setBoundedState(id, value) {
    this.observers
      .filter(({ id: observerId }) => id === observerId)
      .forEach(({ observer }) => {
        observer(value);
      });
  },
});

export default createStatesConnector;
