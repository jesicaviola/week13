describe ('Google test', () => {

  it('Has title and url of wikipedia', () => {
    browser.url('https://google.com');
    browser.pause(1000);
    const input = $('.gLFyf');
    input.setValue('wikipedia');
    const search = $('.gNO89b');
    search.click();
    browser.pause(1000);
    const clickWikipedia = $('.LC20lb.DKV0Md');
    clickWikipedia.click();
    browser.pause(1000);
    const title = browser.getTitle();
    const url = browser.getUrl();
    expect(url).toMatch('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    expect(title).toMatch('Wikipedia, la enciclopedia libre');
  })
})