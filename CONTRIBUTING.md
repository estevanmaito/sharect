First of all, thank you for taking time to contribute!

This is a non exhaustive guide for contributing to this project, and you can contribute to this document also.

## Creating issues

1. Describe your issue in the title
2. Is this a bug?
  2. Copy the error messages
  2. Describe the steps to reproduce
  2. Inform your navigator (`navigator.userAgent` in the browser console)
  2. Inform every other thing that could help solving the issue
  2. Are you going to fix it or someone else can take it?
3. Is this a feature request?
  3. Describe why is this needed

## Creating pull requests

- Every pull request should reference an issue, this way everyone can discuss and contribute before writing any code and possibly spending time.
- Describe what your pull request does succintly in the title and give more details in the body.
- Restrict yourself to changing only related code, ex: don't change a CSS alignment if you are coding a fix in the tooltip rendering. You should create another issue and pull request in this case.
- Run `npm run build` before pulling

## Git commit messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Styleguide

I'm constantly trying to improve the overall coding experience, but until we have ES Lint and Prettier fine tunned, there are some rules that should be followed.

Some things may sound obvious to the more experienced developer, but are based on previous pull requests received by this project.

#### Don't use `var`

```javascript
// bad
var something = 'hi'

// good
const something = 'hi'
let otherThing = 'hey'
```

#### Function titles should describe what the function do
