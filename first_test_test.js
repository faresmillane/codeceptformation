Feature('naviguer sur lurl de base ');

Scenario('premier test', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
});
