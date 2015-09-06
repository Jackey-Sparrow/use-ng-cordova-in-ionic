# use-camera-in-ionic

## install pulugin

```
bower install ngCordova

cordova plugin add cordova-plugin-contacts
```

## how to use

### pick one contact
```

$scope.pickContactUsingNativeUI = function () {
    $cordovaContacts.pickContact().then(function (contactPicked) {
      $scope.contact = contactPicked;
    }
  }

```

### pick all contacts

```
$scope.getAllContacts = function() {
    $cordovaContacts.find().then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
      $scope.contacts = allContacts;
    }
  };

```

### find contacts

```

$scope.findContactsBySearchTerm = function (searchTerm) {
    var opts = {                                           //search options
      filter : searchTerm,                                 // 'Bob'
      multiple: true,                                      // Yes, return any contact that matches criteria
      fields:  [ 'displayName', 'name' ]                   // These are the fields to search for 'bob'.
      desiredFields: [id];    //return fields.
    };

    if ($ionicPlatform.isAndroid()) {
      opts.hasPhoneNumber = true;         //hasPhoneNumber only works for android.
    };

    $cordovaContacts.find(opts).then(function (contactsFound) {
      $scope.contacts = contactsFound;
    };
  }

```


##properties

-id: A globally unique identifier. (DOMString)

-displayName: The name of this Contact, suitable for display to end users. (DOMString)

-name: An object containing all components of a persons name. (ContactName)

-nickname: A casual name by which to address the contact. (DOMString)

-phoneNumbers: An array of all the contact's phone numbers. (ContactField[])

-emails: An array of all the contact's email addresses. (ContactField[])

-addresses: An array of all the contact's addresses. (ContactAddress[])

-ims: An array of all the contact's IM addresses. (ContactField[])

-organizations: An array of all the contact's organizations. (ContactOrganization[])

-birthday: The birthday of the contact. (Date)

-note: A note about the contact. (DOMString)

-photos: An array of the contact's photos. (ContactField[])

-categories: An array of all the user-defined categories associated with the contact. (ContactField[])

-urls: An array of web pages associated with the contact. (ContactField[])

##Methods

-clone: Returns a new Contact object that is a deep copy of the calling object, with the id property set to null.

-remove: Removes the contact from the device contacts database, otherwise executes an error callback with a ContactError object.

-save: Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.