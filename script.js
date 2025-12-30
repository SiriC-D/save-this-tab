// Store all saved URLs or notes
let myLeads = [];

// Get DOM elements
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// Load saved data from localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Restore saved leads if they exist
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// Save current tab URL
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentUrl = tabs[0].url;

    if (!myLeads.includes(currentUrl)) {
      myLeads.push(currentUrl);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    }
  });
});

// Render leads list
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${leads[i]}">
          ${leads[i]}
        </a>
      </li>
    `;
  }

  ulEl.innerHTML = listItems;
}

// Save manual input
inputBtn.addEventListener("click", function () {
  const value = inputEl.value.trim();

  if (value === "") return;

  myLeads.push(value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// Delete all leads (single click, destructive action)
deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
