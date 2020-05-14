# White Bear Assets

Here you will finds assets to help you prototype your spaced-repetition note-taking app, White Bear. Follow these guidelines as if you were given them by a design department.

## Colors

`primary` will be gray.
`success` will be blue.
`danger` will be red.

Regarding tints and shades, try to match the mockup as close as possible. It's ok if you are off by one or two shades. Focus more on layout.

## Spacing

Use Bootstrap classes for all spacing. Follow the style in `spacers.scss`.

Corners are rounded by 4px.

## Borders

Border width for `btn-outline` and inputs is 2px.

## Padding

There are 3 types of buttons and inputs. The text size should remain the same (1rem), but the padding changes for each. Note: though the following is expressed in pixels, use your spacer variables.

| Input / Button Size  | x-padding | y-padding  |
| ------------- | ------------- | ------------- |
| large  | 32px  | 8px  |
| normal  | 16px  | 8px  |
| small  | 16px  | 4px  |

## Fonts

Find these all on Google Fonts and import them into your project.

"White Bear" text next to the logo:
**Fira Sans Medium**

Standard text used throughout the application
**Noto Sans Regular**

Button text
**Noto Sans Bold**

Text on the cards
**Noto Serif Regular**

## Font sizes

Four font sizes are used.

**16px** - standard `<p>` text in the app

**20px** - Centered text above card ( `<h4>` ) & size of text on cards (except in "All cards" view, which is 16px)

**20px** - White Bear logo text in the app, `<h3>`

**27px** - Card titles on landing page, `<h2>`

**60px** - White Bear logo text on the landing page, `<h1>`

## File structure

The project should have 8 HTML pages that are linked together as described in [Prototyping the User Experience of White Bear](https://www.youtube.com/watch?v=Q2M-jRUNgB4&list=PLa5bYMAqOz6Mv5ohqx3Eu80y7uv-_0YIk&index=7&t=0s):

- **index.html** - the landing page
- **create-answer.html**
- **create-imagery.html**
- **review-imagery.html**
- **review-answer.html**
- **review-empty.html**
- **all-cards.html**
- **edit.html**
