# React bound highlight

React component for connecting elements hover states


## Features:
- Highlight one component when hover on another
- Highlight all connected components
- Lightweight
- No dependencies


## Install

```
npm install react-bound-highlight --save
```


## Props

| Prop | Description |  Type  | Default  |
| ------------- |:-------------| -----:| -----:|
| id`*`                     | unique group bound identifier | string |
| currentHoverHighlight   | turn on hover highlight on current element | bool   | false
| oppositeBoundOff        | turn off highligh on bound component | bool   | false |
| className               | custom className              | string | 'BoundHighlight' |
| htmlTag                 | wrapper HTML tag              | string | 'span' |
| children`*`              | nested elements               | string, node | |


## Classes

| ClassName | Desciprtion |
| ------------- |:-------------|
| `BoundHighlight` | Main class name, can by override via `className` prop |
| `{className}--currentHover` | Current hover state className |
| `{className}--boundHover` | Bound hover state className |


## Basic usage
Wrap needed elements and specify unique id for connected components group:

```
import BoundHighlight from 'react-bound-highlight';
...
    <div>
      <BoundHighlight id="group1">Group 1</BoundHighlight>
      <BoundHighlight id="group2">Group 2</BoundHighlight>
      ...
      <BoundHighlight id="group1">Group 1</BoundHighlight>
      <BoundHighlight id="group2">Group 2</BoundHighlight>
    </div>
...
```

## Storybook

Review all examples on storybook:

```
npm run storybook
```

## License
MIT
