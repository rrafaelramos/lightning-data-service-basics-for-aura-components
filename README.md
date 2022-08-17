# lightning-data-service-basics-for-aura-components
Challenge from TrailHead

- Use force:recordData to create two Aura components that display and edit the details of an account

- Create Aura components to manage accounts. Use force:recordData to create a component that displays the details of a standard account record, and another component that allows for quick edits to that record.

- Create a display component named accDisplay.cmp using the record attribute named accountRecord that displays the record and record's Name using lightning:card, its Industry and Description using lightning:formattedText, and Phone using lightning:formattedPhone

- Create an edit component named accEdit.cmp using the record attribute named accountRecord that allows edits to the Name field. Use the fields attribute to query for Name.

- Add the following UI elements to accEdit.cmp:
-- lightning:input - "Account Name"
-- lightning:button - "Save Account"

- In the Salesforce UI, use the Lightning App Builder to add accDisplay.cmp and accEdit.cmp to the account record home page layout. Check out the Lightning App Builder module if you need a refresher.

- The accEdit component displays an error message if the edits made in the component are invalid

- Name the attribute that holds the error message recordSaveError

#####[TrailHead: Link](https://trailhead.salesforce.com/content/learn/modules/lightning_data_service?trail_id=lex_dev "Link")
