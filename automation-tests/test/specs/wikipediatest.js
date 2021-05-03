describe ('Google test', () => {

  it('Has title Google', () => {
    browser.url('https://google.com');
    browser.pause(1000);
    const title = browser.getTitle();
    const input = $('input[title="Buscar"]');
    input.value('wikipedia');
    browser.pause(1000);
    input.value = 'weee';
    browser.pause(1000);
    expect(title).toMatch('Google hiola');
  })
})