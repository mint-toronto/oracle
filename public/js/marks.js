// HOOK UP ADD/REMOVE BUTTONS

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

    // Create add button
    addButton = document.createElement('button');
    addButton.setAttribute('type', 'button');
    addButton.setAttribute('id', 'add-button');

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

    // Remove old add button and/or add new one
    if (formFieldCount != 1)
    {
	oldAddButton = document.getElementById('add-button');
	oldAddButton.parentElement.removeChild(oldAddButton);
    }

    divTable['far-right'].appendChild(addButton);
    addButton.addEventListener('click', addRow);  
    formFieldCount++;
}
