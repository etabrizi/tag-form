// JavaScript Document

app = function () {

    // let taste = `Emyr is the ${initalValue.length} king`  

    let initalValue = ['tom'];

    let length = initalValue.length;

    add = (value) => {
        // Add either a string or an array of values to the collection
        typeof (value) === "object" ? initalValue = [...initalValue, ...value] : initalValue = [...initalValue, value];
    }

    remove = (name) => {
        // Filter out the required names and update the collection
        if (typeof (name) !== "object") {
            initalValue = initalValue.filter((item) => item !== name);
        } else {
            // Filter out the required names from an array of values from the collection
            for (i = 0; i < name.length; i++) {
                initalValue = initalValue.filter((item) => item !== name[i]);
            }
        }
    }

    now = () => {
        // whats the latest collection values
        return initalValue;
    }

    reset = () => {
        //Reset the collection to the original values
        initalValue = app.initalValue;
    }

    format = (name) => {
        return name.map((item, i) => `<li><span>${item}</span><button id=${i} class='remove' href='#'>x</button></li>`).join('');
    }

    size = () => {
        //Get back the size of the array
        return initalValue.length
    }

    hasWhiteSpace = (name) => {
        return name.indexOf(' ') >= 0;
    }

    return {
        // Public API methods   
        initalValue: initalValue,
        length: length,
        add: add,
        remove: remove,
        now: now,
        size: size,
        reset: reset,
        format: format,
        hasWhiteSpace: hasWhiteSpace
    }
}();

const addForm = document.forms['add-user'];
const removeForm = document.forms['remove-user'];

// Apply events to the document object model

document.getElementById("button").addEventListener("click", function () {
    app.reset();
    document.getElementById("message").innerHTML = app.format(app.now());
});

document.getElementById("message").addEventListener("click", function (e) {
    if (e.target && e.target.matches(".remove")) {
        app.remove(e.target.parentNode.childNodes[0].textContent);
        document.getElementById("message").innerHTML = app.format(app.now());
    }
});

// Forms have a 'submit' event that we can listen for. They also refresh the page by default
// That explains e.preventDefault(); below

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = addForm.querySelector('input[type="text"]').value;
    let collection = value.split(" ");
    let filteredCollection = collection.filter((str) => /\S/.test(str));
    app.hasWhiteSpace(value) && value.split(" ")[1].length > 0 ? app.add(filteredCollection) : app.add(value.trim());
    addForm.reset();
    document.getElementById("message").innerHTML = app.format(app.now());
});

removeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = removeForm.querySelector('input[type="text"]').value;
    app.hasWhiteSpace(value) ? app.remove(value.split(" ")) : app.remove(value);
    removeForm.reset();
    document.getElementById("message").innerHTML = app.format(app.now());
});

