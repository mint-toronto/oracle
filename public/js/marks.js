// HOOK UP ADD/REMOVE BUTTONS

var formFieldCount = 1;
var mainSection = document.getElementById('main-section');

window.onload = function ()
{
    addRow();
};

function addRow()
{
    rowName = 'row-' + formFieldCount.toString();
    divList = [ 'row', 'far-left', 'left', 'right', 'far-right' ];
    divTable = {};

    // Create all divs to add
    for (i = 0; i < divList.length; i++)
    {
	divName = divList[i];
	divTable[divName] = document.createElement('div');
	divTable[divName].className = divName;
    }
    divTable['row'].id = rowName;

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

    // Finally, set up click listeners
    addButton.addEventListener('click', addRow);
    removeButton.addEventListener('click', removeRowFunction(rowName));
    formFieldCount++;
}

function removeRowFunction(rowName)
{
    return function()
    {
	rowToRemove = document.getElementById(rowName);
	rowToRemove.parentElement.removeChild(rowToRemove);
    };
}
