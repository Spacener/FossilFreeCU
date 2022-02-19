

function loadBigOil() {

    var list = document.getElementById("list");

    let data = ''

    list.append(data)

};

function reloadDat(){

    if (button4.checked) {
        nResults = 100
    } else if (button5.checked) {
        nResults = 1000
    } else if (button6.checked) {
        nResults = 10000
    }


}

function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("list");
    tr = table.getElementsByTagName("tr");

    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var searchColumnValue = 0

    if (button1.checked) {
        searchColumnValue = 1
    } else if (button2.checked) {
        searchColumnValue = 5
    } else if (button3.checked) {
    searchColumnValue = 15
    }

    displayCount = 0

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[searchColumnValue];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                displayCount++
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    resultsCount = document.getElementById("resultsCount")
    resultsCount.innerText = displayCount + " results showing"
}