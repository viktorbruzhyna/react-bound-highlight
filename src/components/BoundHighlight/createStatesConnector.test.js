/* global jest describe it expect */
import createStatesConnector from './createStatesConnector';

describe('createStatesConnector', () => {
  it('should return global state object', () => {
    const globalState = createStatesConnector();
    expect(globalState).toHaveProperty('observers', []);
  });

  it('should able to add observers', () => {
    const globalState = createStatesConnector();
    const observerMock = jest.fn();
    globalState.addObserver('test-id', observerMock);
    globalState.addObserver('test-id', observerMock);
    globalState.addObserver('test-id', observerMock);
    expect(globalState.observers).toHaveLength(3);
  });

  it('should able to set a state and observers should receive it', () => {
    const globalState = createStatesConnector();
    const observerOneMock = jest.fn();
    const observerTwoMock = jest.fn();
    const observerThreeMock = jest.fn();
    globalState.addObserver('test-id', observerOneMock);
    globalState.addObserver('test-id', observerTwoMock);
    globalState.addObserver('test-id', observerThreeMock);
    globalState.setBoundedState('test-id', 'test value');
    expect(observerOneMock).toHaveBeenCalledWith('test value');
    expect(observerTwoMock).toHaveBeenCalledWith('test value');
    expect(observerThreeMock).toHaveBeenCalledWith('test value');
  });
});
