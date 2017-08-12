// HOOK UP ADD/REMOVE BUTTONS

document.querySelector('#add-tt').addEventListener('click', addTT);
document.querySelector('#add-qa').addEventListener('click', addQA);

var ttInputGroup = document.getElementById('tts-inputs');
var qaInputGroup = document.getElementById('qas-inputs');

function addTT()
{
    var br = document.createElement('br');
    
    var label = document.createElement('label');
    label.textContent = "Term Test: "
    
    var input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.setAttribute('step', '0.5');
    input.setAttribute('value', '100.0');

    label.appendChild(input);
    ttInputGroup.appendChild(br);
    ttInputGroup.appendChild(label);
}

function addQA()
{
    var br = document.createElement('br');
    
    var label = document.createElement('label');
    label.textContent = "Q/A: "
    
    var input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.setAttribute('step', '0.5');
    input.setAttribute('value', '100.0');

    label.appendChild(input);
    qaInputGroup.appendChild(br);
    qaInputGroup.appendChild(label);
}


// FORM SUBMISSON

document.querySelector('#submit-button').addEventListener('click', doSubmit);

function doSubmit()
{
    var data    = getFormData();
    var request = new XMLHttpRequest();
    console.log(data);
    request.open('POST', 'marks/submit', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-encoded; charset=UTF-8');
    request.send(data);
}

function getFormData()
{
    var params = '';
    
    for( var i = 0; i < document.MarksForm.elements.length; i++ )
    {
	if (document.MarksForm.elements[i].type == 'number')
	{
	    var fieldName = document.MarksForm.elements[i].name;
	    var fieldValue = document.MarksForm.elements[i].value;
	    params += fieldName + '=' + fieldValue + '&';
	}
    }
    
    return params.substring(0, params.length - 1);;
}
