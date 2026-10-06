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

## Manual testing results

| Test | Expected result | Result |
| --- | --- | --- |
| Submit an empty note | Show an error without adding a note | Passed |
| Submit only spaces | Show an error without adding a note | Passed |
| Submit exactly 200 characters | Add the note successfully | Passed |
| Submit more than 200 characters | Show an error without adding a note | Passed |
| Add notes in all three categories | Show the correct category label and colour | Passed |
| Search by note text | Display matching notes | Passed |
| Search by category | Display notes from the matching category | Passed |
| Search using uppercase letters | Match notes regardless of letter case | Passed |
| Search for unmatched text | Show an empty list and zero matches | Passed |
| Clear the search field | Display all notes again | Passed |
| Refresh after adding notes | Restore saved notes | Passed |
| Delete a note | Remove the selected note and update the count | Passed |
| Refresh after deleting a note | Keep the deleted note removed | Passed |
| Delete all notes | Display "No notes yet." | Passed |
| Add one note | Display "1 note." | Passed |
| Add multiple notes | Display the correct total | Passed |
| Resize below 600px | Stack the form controls and note cards | Passed |
| Hover over buttons | Display a visible hover style | Passed |
| Navigate using Tab | Display visible focus on controls | Passed |

## What I learned

- How semantic HTML and linked labels improve page structure and accessibility.
- How Flexbox and media queries support responsive layouts.
- How arrays of objects represent application data.
- How createElement and textContent safely display user input.
- How JSON.stringify, JSON.parse and localStorage preserve data.
- How event listeners support forms, searches and delete controls.