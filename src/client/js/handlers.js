const urlInput = document.getElementById('url');
const resultHeader = document.getElementById('result-header');
const confidenceResult = document.getElementById('confidence');
const agreementResult = document.getElementById('agreement');
const subjectivityResult = document.getElementById('subjectivity');
const ironyResult = document.getElementById('irony');

/**
* @description Handles form submission event.
* @param {Event} event - The form onsubmit event.
*/
export default function formSubmit(event) {
    event.preventDefault();

    resultHeader.innerHTML = 'Fetching results...';
    confidenceResult.innerHTML = '';
    agreementResult.innerHTML = '';
    subjectivityResult.innerHTML = '';
    ironyResult.innerHTML = '';

    // Validating input
    if (!Client.validateUrl(urlInput.value)) {
        urlInput.setCustomValidity('Please enter a URL.');
        urlInput.reportValidity();
        return;
    }

    fetch('http://localhost:8080/getSentiment', {
        method: 'POST',
        body: JSON.stringify({
            url: urlInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(body => {
            resultHeader.innerHTML = 'Results';
            confidenceResult.innerHTML = body.confidence;
            agreementResult.innerHTML = body.agreement;
            subjectivityResult.innerHTML = body.subjectivity;
            ironyResult.innerHTML = body.irony;
        })
        .catch(error => {
            alert(error);
        });
}