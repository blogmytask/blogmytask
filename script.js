function extractNumbers() {
    const inputText = document.getElementById('inputText').value;
    const regex = /\b\d{16}\|\d{2}[\/|]\d{4}\|\d{3}\b|\b\d{16}\|\d{2}[\/|]\d{2}\|\d{3}\b/g;
    const matches = inputText.match(regex);
    const numberList = document.getElementById('numberList');
    const convertButton = document.getElementById('convertButton');
    const addYearButton = document.getElementById('addYearButton');
    const copyButton = document.getElementById('copyButton');
    numberList.innerHTML = '';

    if (matches) {
        matches.forEach(number => {
            const li = document.createElement('li');
            li.textContent = number;
            numberList.appendChild(li);
        });
        convertButton.style.display = 'inline-block';
        addYearButton.style.display = 'inline-block';
        copyButton.style.display = 'inline-block';
    } else {
        numberList.innerHTML = '<li>No numbers found</li>';
        convertButton.style.display = 'none';
        addYearButton.style.display = 'none';
        copyButton.style.display = 'none';
    }
}

function convertSlashes() {
    const listItems = document.querySelectorAll('#numberList li');
    listItems.forEach(item => {
        item.textContent = item.textContent.replace(/\//g, '|');
    });
}

function addYearPrefix() {
    const listItems = document.querySelectorAll('#numberList li');
    listItems.forEach(item => {
        item.textContent = item.textContent.replace(/(\|\d{2}\|)(\d{2})(\|\d{3}\b)/, '$1' + '20' + '$2' + '$3');
    });
}

function copyToClipboard() {
    const listItems = document.querySelectorAll('#numberList li');
    const textToCopy = Array.from(listItems).map(item => item.textContent).join('\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard');
    }).catch(err => {
        alert('Failed to copy: ', err);
    });
          }
