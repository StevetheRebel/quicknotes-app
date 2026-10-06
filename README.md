# My Notes

My Notes is a responsive note manager built with HTML, CSS and JavaScript. Users add notes, organise them into Personal, Work or Study categories, search their collection and delete unwanted entries. Notes are stored in the browser through localStorage and restored after refreshing the page.

## Features

- Add notes containing up to 200 characters.
- Reject empty notes and display validation errors.
- Choose Personal, Work or Study categories.
- Display a separate colour style for each category.
- Show the creation date and time for each note.
- Delete individual notes.
- Search by note text or category.
- Display correct counts for zero, one and multiple notes.
- Save and restore notes through localStorage.
- Adjust the layout for screens up to 600px wide.
- Use labelled controls and visible keyboard focus styles.

## Run locally

1. Place index.html, style.css and script.js in the same folder.
2. Open the folder in Visual Studio Code.
3. Open index.html through the Live Server extension.
4. Use the same browser and local address when returning to saved notes.

No build step or package installation is required for the application.

## Manual checks

1. Submit an empty note. Confirm a validation error appears.
2. Submit more than 200 characters. Confirm rejection.
3. Add a note in each category. Check the card colours.
4. Search for a word, then a category.
5. Refresh the page. Confirm saved notes return.
6. Delete notes. Confirm the count updates.
7. Refresh again. Confirm deleted notes stay removed.
8. Resize the window below 600px. Check the stacked form layout.

## What I learned

- How semantic HTML and linked labels improve page structure and accessibility.
- How Flexbox and media queries support responsive layouts.
- How arrays of objects represent application data.
- How createElement and textContent safely display user input.
- How JSON.stringify, JSON.parse and localStorage preserve data.
- How event listeners support forms, searches and delete controls.