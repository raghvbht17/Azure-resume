window.addEventListener('DOMContentLoaded', (event) => {
    getvisitcount();
});
const functionapi = '';
const getvisitcount = {};
{
    let count = 30;
    fetch(functionapi).then(Response => {
        return Response.json();
    }).then(Response => {
        console.log("Website called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}