document.getElementById("printButton").addEventListener("click", () => {
    const printContents = document.querySelector("table").outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
});