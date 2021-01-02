![Release publish and deploy](https://github.com/contentmunch/contentmunch-blog/workflows/Release%20publish%20and%20deploy/badge.svg)
# Contentmunch-blog
Front end for contentmunch blog.

## Using Contentmunch-blog 
To use this component library:

* Add the npm package to your project
    ```
    $ npm install @contentmunch/contentmunch-blog
    ```
## Installation guide
In the project directory, you can run:

### `npm start`
Launches the front end on port 3008

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the package library.

### `npm run publish`

Publishes the library to npm.

### `npm run deploy`

Deploys the application to production.

## Coding rules
We use [GitHub Flow](https://guides.github.com/introduction/flow/) for our project workflow.
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* Create pull request against develop to merge your code.
* All features or bug fixes **must be tested** by one or more [specs][unit-testing].

### Pull request format

```
<subject>

* changes 1
* changes 2

fixes/closes #<github issue number>

```

### Git commit format

```
<type>: <subject>
<BLANK LINE> 
<body> optional
```
* Any line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.
* The subject contains succinct description of the change:
    * use the imperative, present tense: "change" not "changed" nor "changes"
    * no dot (.) at the end
* Commit type:
    * feat: a new feature
    * fix: a bug fix
    * refactor: a code change that neither fixes a bug nor adds a feature
    * test: adding missing tests
    * chore: changes to the build process or auxiliary tools and libraries such as documentation generation



