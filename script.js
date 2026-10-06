const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

const STORAGE_KEY = "my-notes";

const categoryLabels = {
  personal: "Personal",
  work: "Work",
  study: "Study"
};

let notes = [];

function showError(message) {
  errorMessage.textContent = message;
}

function saveNotes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    showError("Your changes were not saved. Browser storage is unavailable.");
  }
}

function loadNotes() {
  try {
    const savedNotes = localStorage.getItem(STORAGE_KEY);

    if (savedNotes === null) {
      return;
    }

    const parsedNotes = JSON.parse(savedNotes);

    if (!Array.isArray(parsedNotes)) {
      throw new Error("Invalid notes format");
    }

    notes = parsedNotes.filter((note) => {
      return (
        note !== null &&
        typeof note === "object" &&
        typeof note.id === "string" &&
        typeof note.text === "string" &&
        note.text.trim().length > 0 &&
        note.text.length <= 200 &&
        Object.hasOwn(categoryLabels, note.category) &&
        typeof note.createdAt === "string" &&
        !Number.isNaN(Date.parse(note.createdAt))
      );
    });
  } catch {
    showError("Saved notes did not load. Please check your browser storage.");
  }
}

function updateCount(visibleCount, searching) {
  const total = notes.length;

  if (total === 0) {
    noteCount.textContent = "No notes yet.";
    return;
  }

  const totalMessage = total === 1 ? "1 note" : `${total} notes`;

  noteCount.textContent = searching
    ? `${totalMessage} total. ${visibleCount} matching your search.`
    : `${totalMessage}.`;
}

function render() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredNotes = notes.filter((note) => {
    return (
      note.text.toLowerCase().includes(query) ||
      note.category.toLowerCase().includes(query)
    );
  });

  notesList.replaceChildren();

  filteredNotes.forEach((note) => {
    const card = document.createElement("li");
    card.classList.add("note-card", `category-${note.category}`);

    const content = document.createElement("div");
    content.classList.add("note-content");

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const meta = document.createElement("p");
    meta.classList.add("note-meta");

    const category = document.createElement("span");
    category.classList.add("category-label");
    category.textContent = categoryLabels[note.category];

    const separator = document.createElement("span");
    separator.textContent = " • ";

    const date = document.createElement("time");
    date.dateTime = note.createdAt;
    date.textContent = new Date(note.createdAt).toLocaleString();

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete note: ${note.text}`);

    deleteButton.addEventListener("click", () => {
      notes = notes.filter((item) => item.id !== note.id);
      showError("");
      saveNotes();
      render();
    });

    meta.append(category, separator, date);
    content.append(text, meta);
    card.append(content, deleteButton);
    notesList.append(card);
  });

  updateCount(filteredNotes.length, query !== "");
}

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const rawText = noteInput.value;
  const text = rawText.trim();
  const category = noteCategory.value;

  showError("");
  noteInput.removeAttribute("aria-invalid");

  if (text === "") {
    showError("Enter a note before submitting.");
    noteInput.setAttribute("aria-invalid", "true");
    noteInput.focus();
    return;
  }

  if (rawText.length > 200) {
    showError("Your note must contain 200 characters or fewer.");
    noteInput.setAttribute("aria-invalid", "true");
    noteInput.focus();
    return;
  }

  if (!Object.hasOwn(categoryLabels, category)) {
    showError("Choose a valid category.");
    noteCategory.focus();
    return;
  }

  const note = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text,
    category,
    createdAt: new Date().toISOString()
  };

  notes.unshift(note);
  saveNotes();

  noteForm.reset();
  searchInput.value = "";
  render();
  noteInput.focus();
});

searchInput.addEventListener("input", render);

loadNotes();
render();