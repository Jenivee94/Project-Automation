browser.waitForAngularEnabled(false);
browser.get('https://testing.stg.coinspectapp.com/');
it('something', () => {
    var username = $('[name="email"]');
    username.sendKeys('ojt_admin');
    browser.sleep(500);

    var password = $('[name="password"]');
    password.sendKeys('Password1!');
    browser.sleep(500);
    

    var loginbtn = $('[type="submit"]');
    loginbtn.click();
    browser.sleep(500);
    
    //Properties

    // var propertiesbtn = $('.ico.i-properties');
    // propertiesbtn.click();
    // browser.sleep(800);

   
    // var propcategorybtn = element(by.model('category'));
    // propcategorybtn.click();
    // browser.sleep(500);

    // var newpropertybtn = $('.btn.ug-add.pro-btns--create');
    // newpropertybtn.click();
    // browser.sleep(500);

    // var bldgname = element(by.model('building.name'));
    // bldgname.sendKeys('Casa Blanca');
    // browser.sleep(500);

    // var bldgaddress = element(by.model('building.address'));
    // bldgaddress.sendKeys('Molave Street');
    // browser.sleep(500);

    // var bldgcity = element(by.model('building.city'));
    // bldgcity.sendKeys('Cebu City');
    // browser.sleep(500);

    // var bldgstate = element (by.model('building.state'));
    // bldgstate.sendKeys('Cebu');
    // browser.sleep(500);

    // var bldgzip = element (by.model('building.zip'));
    // bldgzip.sendKeys('6000');
    // browser.sleep(500);

    // var bldgcountry = element (by.model('building.country'));
    // bldgcountry.sendKeys('Philippines');
    // browser.sleep(500);

    // var bldgsave = $('.btn-action.fix');
    // bldgsave.click();
    // browser.sleep(500);

    //Checklist
    

    var checklistbtn=$('.ico.i-checklists');
    checklistbtn.click();
    browser.sleep(800);

    var checkcatbtn = $('.column.small-9');
    checkcatbtn.click();
    browser.sleep(500);
 
    var newcheckbtn = $('.btn.ug-add');
    newcheckbtn.click();
    browser.sleep(500);

    var addchecklist = element(by.model('ctrl.checklist.name'));
    addchecklist.sendKeys('First Automation');
    browser.sleep(500);


    var checklistIcon = element(by.css('.ck-editor-header__image--hovered.ng-binding'));
    checklistIcon.click();
    browser.sleep(500);
    var avatarlist = element(by.css('img.checklist-icon__image.ng-scope'));
    avatarlist.click();
    var selectAvatar = $('button.checklist-icon__button.checklist-icon__button--select.ng-binding');
    selectAvatar.click();
    browser.sleep(300);

    var checklistDescription = $('.ck-details').$('div.mb-3').$('[ng-model="model"]');
    checklistDescription.sendKeys('this is test');
    browser.sleep(300);

    var createNewchecklist = element(by.css('button.ui-button.ui-button--primary.checklist-ctrl-btns__create.ng-scope'));
    createNewchecklist.click();
    browser.sleep(5000);

    var checklistCategory1 = $('div.ck-editor-button.ng-scope').$('i.checklist-editor-collapsible__icon.checklist-editor__btn-icon.checklist-editor__btn-icon--blue.i-add');
    checklistCategory1.click();
    browser.sleep(2000);

    var inputField = element.all(by.model('model'))
    inputField.get(2).sendKeys('First Category');
    browser.sleep(2000);

    var saveCategory1 = element.all(by.css('.ck-editor__btn-icon.i-edit.edit.unedit'));
    saveCategory1.get(0).click();
    browser.sleep(500);

    var addQuestion1 = element.all(by.css('.ck-editor__btn-icon.i-add'));
    addQuestion1.get(0).click();
    browser.sleep(500);
    //For first question //inputField variable already declared above, with the same element locator
    inputField.get(2).sendKeys('Element of success');
    //For question description 
    inputField.get(3).sendKeys('Success is what we are always want'); 
    //First choice
    inputField.get(4).sendKeys('Experience');

    var addAnswerChoice = element(by.css('.answer-choices__add-answer-button.ng-binding'))
    addAnswerChoice.click();
    browser.sleep(500);

    //Second choice
    inputField.get(6).sendKeys('Determination');
    browser.sleep(500);


    
    inputField.get(5).sendKeys('5');
    browser.sleep(500);

    inputField.get(7).sendKeys('10');
    browser.sleep(500);

    var colorPicker = element(by.css('.ui-colorpicker__icon.i-empty'));
    colorPicker.click();

    var answerColor = element(by.css('.ui-colorpicker__icon.i-green-pass'))
    answerColor.click();
    browser.sleep(500);

    var multipleAns = element.all(by.css('.checkbox-container__checker__checkmark'));
    multipleAns.get(7).click();
    browser.sleep(500);

    var questionSave = element(by.css('.action-icon.i-save'));
    questionSave.click();
    browser.sleep(500);

    // var addChild = element(by.css('.i-add.action-icon.ng-scope'));
    // addChild.click();
    // browser.sleep(500);
    
    var addQuestion = element.all(by.css('.ck-editor-next-question.ng-scope'));
    addQuestion.get(0).click();
    browser.sleep(500);

    inputField.get(6).sendKeys('Patience');
    browser.sleep(500);

    

   
    




    


    

    

    


    
   





    // Users


    // var usersbtn=$('.ico.i-users2');
    // usersbtn.click();
    // browser.sleep(500);
    
    // var userNew = $ ('.ug-add');
    // userNew.click();
    // browser.sleep(500);

    // var userFname = element(by.model('user.profile.firstName'));
    // userFname.sendKeys('Kitkat')
    // browser.sleep(500);

    // var userLname = element(by.model('user.profile.lastName'));
    // userLname.sendKeys('Smith');
    // browser.sleep(500);

    // var username = element(by.model('user.username'));
    // username.sendKeys('kitkat101');
    // browser.sleep(500);

    // var userEditEmail = $('.i-edit');
    // userEditEmail.click();
    // browser.sleep(500);

    // var userEmail = element(by.model('user.email'));
    // userEmail.sendKeys('kitkat@coinspectapp.com');
    // browser.sleep(500);

    // var userSaveEmail = $('.i-done');
    // userSaveEmail.click();
    // browser.sleep(500);

    // var userEditPassword = element.all(by.className('i-edit')).get(2).all(by.tagName('div'));
    // userEditPassword.click();
    // browser.sleep(500);

    // var userPassword = element(by.model('tmpPassword'));
    // userPassword.sendKeys('Password1!');
    // browser.sleep(5000);


    
    // var userPassword = element(by.model('tmpPassword'));
    // userPassword.sendKeys('Password1!');
    // browser.sleep(500);

    // var userSaveBtn = $('.btn-action.action-btns-save');
    // userSaveBtn.click();
    // browser.sleep(5000);



    // var usergroupbtn=$('.ico.i-usergroups');
    // usergroupbtn.click();
    // browser.sleep(5000);

    // var assignmentbtn=$('.ico.i-assignments');
    // assignmentbtn.click();
    // browser.sleep(5000);

    // var settingbtn=$('.ico.i-settings2');
    // settingbtn.click();
    // browser.sleep(5000);

    // var accountbtn=$('.ico.i-myaccount');
    // accountbtn.click();
    // browser.sleep(5000);

    // var logoutbtn=$('.ico.i-logout');
    // logoutbtn.click();
    // browser.sleep(5000);

    

    

});

