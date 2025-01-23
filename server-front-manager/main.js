const apiUrl = 'http://localhost:3000';

async function getData() {
    const response = await fetch(`${apiUrl}/subscriptions`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await response.json();
    console.log(json);

    json.forEach((e) => {
        document.querySelector("#subscriptions")
            .appendChild(getTemplateForElement(e));
    })


}

getData()
    .then(() => { });

function getTemplateForElement(data) {
    var template = document.querySelector("#subscription");

    var clone = subscription.content.cloneNode(true);

    var div = clone.querySelectorAll("div");
    div[0].textContent = JSON.stringify(data);

    var button = clone.querySelectorAll("button");
    button[0].addEventListener("click", () => {
        fetch(`${apiUrl}/sendpush`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    });

    return clone;
}