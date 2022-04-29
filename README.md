# React bound highlight


React component for connecting elements hover states

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/viktorbruzhyna/react-bound-highlight/jest-tests-and-lint)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-bound-highlight)

## Features:
- Highlight other components when a component is hovered
- Custom styles
- Lightweight
- No dependencies

## Examples from storybook

Two directions bound:

<img src="https://github.com/viktorbruzhyna/react-bound-highlight/raw/main/public/two-way-bound.gif" />

Two directions bound with current element highlight ON:

<img src="https://github.com/viktorbruzhyna/react-bound-highlight/raw/main/public/two-way-bound-2.gif" />

Single direction bound:

<img src="https://github.com/viktorbruzhyna/react-bound-highlight/raw/main/public/one-way-bound.gif" />

Multiple elements in bound:

<img src="https://github.com/viktorbruzhyna/react-bound-highlight/raw/main/public/multiple-in-bound.gif" />

Custom highlight styles:

<img src="https://github.com/viktorbruzhyna/react-bound-highlight/raw/main/public/custom-styles.gif" />

Can be used for building side by side editor like this:

<img src="https://github.com/viktorbruzhyna/react-bound-highlight/raw/main/public/side-by-side-editor.gif" />


## Install

```
npm install react-bound-highlight --save
```

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

## Props

| Prop | Description |  Type  | Default  |
| ------------- |:-------------| -----:| -----:|
| id`*`                   | unique group bound identifier | string |
| currentHoverHighlightOn      | turn on hover highlight on current element | bool   | false
| oppositeHoverHighlightOff    | turn off current component oposite highlight | bool   | false |
| defaultStyleOff         | turn off default style for highligting | bool | false |
| className               | custom className              | string | 'BoundHighlight' |
| htmlTag                 | wrapper HTML tag              | string | 'span' |
| children`*`             | nested elements               | string, node | |


## Classes

Use classes to override highlighting styles. Set `defaultStyleOff=true` prop to turn off default style.

| Class | Desciption |
| ------------- |:-------------|
| `BoundHighlight` | Main class name, can by override via `className` prop |
| `{className}--currentHover` | Current hover state className |
| `{className}--boundHover` | Bound hover state className |


## Storybook

Review all examples on storybook:

```
npm run storybook
```

## Run tests

```
npm run test
```


## Linter

Run linter:

```
npm run lint
```

Fix formatting issues:

```
npm run lint:fix
```

## License
MIT
