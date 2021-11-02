# react-native-elements

A react native framework for building Chelsea Apps cross platform mobile applications.

## Getting started

This library should be already part of the [react-native-starter](https://github.com/chelsea-apps/react-native-starter), our starting point for mobile applications, but in case it isn't simply run:

```
npm install @chelseaapps/react-native-elements
```

Once the package is installed, make sure it's using the latest version and inside the `src/common/elements` you should have folders for each of the components that are part of this package.

Example:

```
/elements/Input/index.tsx
/elements/Icon/index.tsx
...
```

These local files are `Styled` wrappers for the components included in the package. They are the ones that are actually going to be `imported` throughout the project.

`/elements/Input/index.tsx`:

```
import React from 'react';
import {
	Input as InputElement,
	InputProps as InputElementProps,
} from '@chelseaapps/react-native-elements';

const Input = ({ ...props }: InputElementProps) => <InputElement {...props} />;

export default Input;
```

## Advanced Usage

Advanced usage refers to a case where you want a specific component to do a specific action. To see a full list of props for any `Element` visit
the [docs]() and search for your component to see the functionality its capable of.

The general rule of thumb is that `components/elements/` should be minimalistic files which contain only `styling props` if possible, while locally should sit all the other props that you might need.

In the rare case where a component requires some additional functionality you will have to `Update the library` globally.

## Updating the library

In order to update the library with some new functionality there is a checklist that needs to followed thoroughly:

- `git clone` [react-native-elements](https://github.com/chelsea-apps/react-native-elements) project locally
- Add the necessary changes (shouldn't be more than props at this stage)
- Using [jsDocs](https://jsdoc.app/), document your new changes
- Update the docs by running `npx typedoc src/index.tsx`
- Increase the version by one where `x` is in case: `1.x` if your change is an addition or `1.11.x` if your change is a bug fix.
- Publish the new version of the package using `npm publish`
- View your new version at [App Registry](http://registry.chelsea-apps.com:4873/-/web/detail/@chelsea-apps/react-native-elements)

## Adding a new component

Adding a new component should follow the same steps as updating the library but before **cloning** the library and updating it, the component should be created either inside **the current project** or inside the **react-native-starter** in order for the changes to be seen.

##### Considerations to keep in mind when creating a new component:

- Should be created with global usage in mind
- A lot of use cases should be taken into consideration and the functionality should be available through props
- Customisability is a must have and the component should have props available for styling as much of it as possible
