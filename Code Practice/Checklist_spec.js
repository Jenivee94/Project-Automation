describe('First Automation',function(){
    it('should work as exoected',function(){
        browser.get('https://testing.stg.coinspectapp.com');
    });

    it('should login', function(){
        var username = $("[name='email']")
        username.sendKeys("ojt_admin")
        var password = $("[name='password']")
        password.sendKeys("Password1!")
        var loginbtn = $('[type="submit"]')
        loginbtn.click();
        
        
    });
    it('should select the checklist', function(){
        var checklist = element(by.css('.ico.i-checklists'))
        checklist.click()
        browser.sleep(500);
        
        var category = element(by.css('.column.small-9'))
        category.click()
        browser.sleep(500);

        var newChecklist = element(by.css('.btn.ug-add'))
        newChecklist.click()
        browser.sleep(500);

        var checklistName = element(by.model('ctrl.checklist.name'))
        checklistName.sendKeys('Hello My Test')
        browser.sleep(500);

        var checklistDescription = element(by.model('model'));
        checklistDescription.sendKeys('This is just a test');
        browser.sleep(500);
        
        var checklistIcon = $('.ck-editor-header__root-image');
        checklistIcon.click();
        browser.sleep(500);

        var checklistAvatar = $('.checklist-icon__image');
        checklistAvatar.click();
        browser.sleep(500);

        var createChecklist = $('.ui-button.ui-button--primary.checklist-ctrl-btns__create.ng-scope');
        createChecklist.click();
        browser.sleep(500);

        var checklistSelect = $('.checklist-icon__button.checklist-icon__button--select');
        checklistSelect.click();
        browser.sleep(500);

        


        

    });
})