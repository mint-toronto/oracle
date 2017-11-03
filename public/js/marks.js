// HOOK UP ADD/REMOVE BUTTONS

document.getElementById('add-button').addEventListener('click', addRow);

var formFieldCount = 1;
var mainSection = document.getElementById('main-section');

window.onload = function ()
{
    addRow();
};

function addRow()
{
    var divList = [ 'row', 'far-left', 'left', 'right', 'far-right' ];
    var divTable = {};

    // Create all divs to add
    for (i = 0; i < divList.length; i++)
    {
	divName = divList[i];
	divTable[divName] = document.createElement('div');
	divTable[divName].className = divName;
    }

    // Create form fields to add
    markField = document.createElement('input');
    markField.setAttribute('type', 'text');
    markField.className = 'mark-box';

    weightField = document.createElement('input');
    weightField.setAttribute('type', 'text');
    weightField.className = 'mark-box';

    // Create remove button
    removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('id', 'remove-button-' + formFieldCount.toString());

    // Create the DOM sub-tree we're going to add. First the main row elements.
    for (var key in divTable)
    {
	if (divTable.hasOwnProperty(key) && key != 'row')
	{
	    divTable['row'].appendChild(divTable[key]);
	}
    }

    // Now the fields and buttons
    divTable['far-left'].appendChild(removeButton);
    divTable['left'].appendChild(markField);
    divTable['right'].appendChild(weightField);

    document.getElementById('marks-form').appendChild(divTable['row']);

    // Remove old add button
    addButton = document.getElementById('add-button');
    addButton.parentElement.removeChild(addButton);
    
    formFieldCount++;
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

//document.querySelector('#submit-button').addEventListener('click', doSubmit);

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
    
    return params.substring(0, params.length - 1);
}
