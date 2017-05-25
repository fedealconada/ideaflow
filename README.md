# Ideaflow challenge

This is a React app that handles Hashtag (#), People (@), and Relations (<>)  Autocomplete using Draft.js.

## Requirements
- React.js
- Npm
- Node

## Usage

Find below the commands to get the app running locally:

* `git clone https://github.com/fedealconada/ideaflow && cd ideaflow` *(Clone repo)*
* `npm i` *(Installs npm dependencies)*
* `npm start` *(Starts app; The browser might open automatically)*
* You can see the app deployed in Heroku [here](https://ideaflow-challenge.herokuapp.com/)

## Considerations
- I had some problems to make the hashtag work with the `space`key. The problem is that this is not supported on the `draft-js-plugins`. The ideal solution would be to make a custom solution for it. In the mean time, a quick solution (super hacky/hardcoded/to-be-avoided solution) has been to add the class hardcoded. It 'works' but not fully. For instance, the text becomes MUTABLE.

## License

MIT
