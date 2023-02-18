let i = 1;

let tableArray = []

document.addDataToTable = () => {
    const bookInput = document.getElementById("book_name_input");
    let bookInputValue = bookInput?.value;
    const issuedInput = document.getElementById("issued_input");
    const issuedInputValue = issuedInput?.value
    const table = document.getElementById("library-table");

    if (!(bookInputValue && issuedInputValue)) {

        alert('please add book details')
        return null
    } else {

        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();
        let id = i++;

        cell1.innerHTML = id;
        cell2.innerHTML = bookInputValue;
        cell3.innerHTML = issuedInputValue;

        let MyDate = new Date();
        let date = ('0' + MyDate.getDate()).slice(-2) + '/'
            + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/'
            + MyDate.getFullYear();
        let time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

        cell4.innerHTML = `${date} at ${time} `
        cell5.innerHTML = '<span class=book-status>not returned<span>';

        tableArray.push({
            id: id,
            book_name: bookInputValue,
            issued_to: issuedInputValue,
            issued_time: `${date} at ${time} `,
            status: "not returned"
        })

        bookInput.value = '';
        issuedInput.value = '';
    }
}