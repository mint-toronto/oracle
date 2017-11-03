// HOOK UP ADD/REMOVE BUTTONS

var formFieldCount = 1;
var rowsDisplayed = [];
var mainSection = document.getElementById('main-section');

window.onload = function ()
{
    addRow();
};

function addRow()
{
    var rowName = 'row-' + formFieldCount.toString();
    var divList = [ 'row', 'far-left', 'left', 'right', 'far-right' ];
    var divTable = {};

    // Create all divs to add
    for (var i = 0; i < divList.length; i++)
    {
	var divName = divList[i];
	divTable[divName] = document.createElement('div');
	divTable[divName].className = divName;
    }
    divTable['row'].id = rowName;

    // Create form fields to add
    var markField = document.createElement('input');
    markField.setAttribute('type', 'text');
    markField.className = 'mark-box';

    var weightField = document.createElement('input');
    weightField.setAttribute('type', 'text');
    weightField.className = 'mark-box';

    // Create remove button
    var removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');

    // Create add button
    var addButton = document.createElement('button');
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
	var oldAddButton = document.getElementById('add-button');
	var oldAddParent = oldAddButton.parentElement;
	oldAddParent.removeChild(oldAddButton);
    }

    divTable['far-right'].appendChild(addButton);
    rowsDisplayed.push(divTable['row'])

    // Finally, set up click listeners
    addButton.addEventListener('click', addRow);
    removeButton.addEventListener('click', removeRowFunction(divTable['row']));
    formFieldCount++;
}

function removeRowFunction(row)
{
    return function()
    {
	var index = rowsDisplayed.indexOf(row);
	
	// Do nothing if this is the last row left.
	if (rowsDisplayed.length == 1)
	{
	    return;
	}

	// If we're removing the last row, we need to move the add button.
	if (index == rowsDisplayed.length - 1)
	{
	    var newLastRow = rowsDisplayed[rowsDisplayed.length - 2];
	    var farRightCol = firstChildByClass(newLastRow, 'far-right');
	    
	    var oldAddButton = document.getElementById('add-button');
	    var oldAddParent = oldAddButton.parentElement;
	    oldAddParent.removeChild(oldAddButton);

	    var addButton = document.createElement('button');
	    addButton.setAttribute('type', 'button');
	    addButton.setAttribute('id', 'add-button');
	    addButton.addEventListener('click', addRow);

	    farRightCol.appendChild(addButton);
	}

	// Clear row from list of displayed rows. 
	if (index > -1)
	{
	    rowsDisplayed.splice(index, 1);
	}
	
	row.parentElement.removeChild(row);
    };
}

function firstChildByClass(domElement, className)
{
    for (var i = 0; i < domElement.childNodes.length; i++)
    {
	var childNode = domElement.childNodes[i];
	if (childNode.className == className)
	{
	    return childNode;
	}        
    }
}
