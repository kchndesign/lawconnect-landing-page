# LawConnect Landing Page Exercise

## [Find this project hosted here](https://codesandbox.io/p/github/kchndesign/lawconnect-landing-page/main)

This is a mock landing page that uses create-react-app with the typescript
template. It was built to demonstrate my ability to recreate an Adobe XD mockup
as well as my current knowledge in front end development. This was a task given
to me during the recruitment process for a junior front end web developer
position.

## Project Brief

### Aims

The aims of the project are to demonstrate my knowledge in the following:

-   React
-   Typescript
-   SASS/SCSS

### Requirements

-   Create a page referencing the provided design files, trying to match it as
    closely as possible.
-   Avoid using UI kits or CSS libraries/frameworks.
-   Free to use vanilla JS or a modern framework of your choice.
-   Avoid libraries for simple tasks.

## Implementation Notes

### Component Architecture Philosophy

Upon completing this project, there were only 3 'reusable' components:

-   A navbar component that took no props
-   An action button component
-   A card component

Most of the markup for the landing page was contained in a `LandingPage` file.
The rationale here is that since the page is unlikely to change dynamically and
features little interaction or data fetching, there was no reason to
over-engineer a solution that would split the page further into sub components.

The navbar was encapsulated into a component for two reasons. The first was that
on a production website, the nav bar would most obviously be used more than a
few times. The second was that, since I was to create a hamburger menu
implementation by hand, I would need to manage the toggle state of the dropdown
menu.

The action buttons and cards were obvious candidates to be extracted into
components because they were used more than once on the page. They didn't have
any state, so were just presentational components.

### Scoped vs Unscoped CSS

### UI Changes
