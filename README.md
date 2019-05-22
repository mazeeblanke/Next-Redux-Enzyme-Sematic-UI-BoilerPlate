[![Deploy to now](https://deploy.now.sh/static/button.svg)]

# NEXT +REDUX +ENZYME +SEMANTICUI BOILERPLATE

Install it and run:

```bash
npm install
npm run postinstall
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## Introduction

This setup includes redux, enzyme for testing and custom routing.

### Stying

Part of the installation steps includes

 1. Install the modules required for this to work:
    ```
    npm i -D semantic-ui-less ncp find-in-files
    ```
 2. `npm run postinstall`

#### Before we get started

Depending on your use case, bear in mind that you may need to:

  - `npm uninstall semantic-ui-less`
  - backup and delete any files you created

#### Important - the `SITE_ROOT` folder

All semantic-ui related files and custom themes are placed in `static/semantic-ui`. This directory holds your theme config and all of your site-level variables/overrides.

#### Remember

You can now load your files like this:

```js
import { Button, Dropdown, Modal } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';
```

It's up to you where/when you load the LESS file. I recommend importing it anywhere you use a semantic-ui component - it will only be imported once, even if it's imported in 10 different components. Other people like to import _once_ as early as possible - in their main `app.js` file or wherever. It's up to you.

#### Customizing components

Take a look at the `static/theme.config` file. All components use the `default` theme out of the box, but you can update any component to use a different theme ([look here](https://github.com/Semantic-Org/Semantic-UI-LESS/tree/master/themes) for a list of available themes). For example, if you want all buttons to use the "amazon" theme, then update your theme.config accordingly:

```
@button     : 'amazon';
```

If you need further customization, then you can use the variables/overrides files which are now in your project.

 - **`static/elements/button.variables`** - set your own button variables here. These will override the values set by the theme. There is no need to set _all_ variables, just the ones you want to change. Do not write any CSS in this file, just variables.
 - **`static/elements/button.overrides`** - write any custom CSS here to override the button CSS. You should only need to do this for advanced situations. Most of the time you should be able to use variables to get the styles you need.

#### Keeping things up-to-date

You should be able to update `semantic-ui-less` just like you would any other module. If you are worried about updates breaking your app, I recommend locking into a certain version of `semantic-ui-less` by removing the caret `^` or tilde `~` from your package.json:

```
"devDependencies": {
  "semantic-ui-less": "2.2.12"
}
```

Whenever you are ready to update, you can do so explicitly by updating the version number manually or running a script like this:

```
npm uninstall semantic-ui-less -D && npm i semantic-ui-less -D
```

Whenever you update, it is up to you to test your app and make sure everything still looks ok.